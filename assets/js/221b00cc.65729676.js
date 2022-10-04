"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[1050],{20525:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"single-node-openshift-deployment-with-static-ip","metadata":{"permalink":"/waiops-tech-jam/blog/single-node-openshift-deployment-with-static-ip","editUrl":"https://github.com/IBM/waiops-tech-jam/blog/single-node-openshift-deployment-with-static-ip/single-node-openshift-deployment-with-static-ip.md","source":"@site/blog/single-node-openshift-deployment-with-static-ip/single-node-openshift-deployment-with-static-ip.md","title":"Single Node Openshift deployment with Static IP","description":"This article explains to you how to deploy the Single Node Openshift with Static IP, since there is no detailed introduction in openshift official documentation. An automatic deployment tool also included for vmware provisioning.","date":"2022-10-04T03:32:10.000Z","formattedDate":"October 4, 2022","tags":[{"label":"openshift","permalink":"/waiops-tech-jam/blog/tags/openshift"},{"label":"ocp","permalink":"/waiops-tech-jam/blog/tags/ocp"},{"label":"sno","permalink":"/waiops-tech-jam/blog/tags/sno"}],"readingTime":7.7,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Single Node Openshift deployment with Static IP","description":"This article explains to you how to deploy the Single Node Openshift with Static IP, since there is no detailed introduction in openshift official documentation. An automatic deployment tool also included for vmware provisioning.","tags":["openshift","ocp","sno"],"slug":"single-node-openshift-deployment-with-static-ip"}},"content":"Starting from openshift v4.9, RedHat announced the support for single node\\ncluster deployment. OpenShift Container Platform on a single node is a\\nspecialized installation that requires the creation of a special ignition\\nconfiguration ISO. The primary use case is for edge computing workloads,\\nincluding intermittent connectivity, portable clouds, and 5G radio access\\nnetworks (RAN) close to a base station. The major tradeoff with an installation\\non a single node is the lack of high availability.\\n\\nFurthermore Single Node Openshift (SNO) can also be used in many other scenarios\\nsuch as:\\n\\n- Get full functionality of openshift cluster (except high availability) through\\n  one node deployment.\\n\\n- Run an openshift cluster with few resources and run openshift-based demo apps\\n  on top of it.\\n\\n- Easy to build demo scenarios for product-only features.\\n\\n- Quickly backup and restore a demo/poc environment, by building a single VM\\n  image, it\'s easily migrated to new environments and will launch and start\\n  without product deployment & configuration.\\n\\n- Convenient state recovery by using the snapshot, you can revert to the\\n  previous state at any time, which greatly facilitates functional testing and\\n  development, while the multi-nodes cluster snapshot recovery is almost\\n  impossible.\\n\\n- When the resources of a single node are sufficient enough, you can run IBM\\n  Cloud Paks (non-production deployment). Currently, the deployment of AIOps\\n  AIManager with xsmall sizing has been verified.\\n\\nRedHat provided the steps\\n[here](https://docs.openshift.com/container-platform/4.10/installing/installing_sno/install-sno-installing-sno.html)\\nto provision SNO, however, this guide only support a DHCP enabled environment,\\nthe SNO bootstrap & master node has to obtain the IP address via DHCP client,\\nthis is often not possible as the SNO won\'t be deployed into a DHCP enabled\\nenvironment. You have to use a manual configured static IP address for this\\nall-in-one node.\\n\\nOn the other hand, RedHat\'s tutorial suggests to use the Assisted Installer to\\nperform the guided installation which is hard to automated and requires internet\\naccess. This is not an option for an air-gapped deployment or you have to create\\nyour own Assisted Installer service which is more complicated.\\n\\nWhat we intend to do is make it simple without the Assisted Installer and ensure\\neverything is automated.\\n\\nFirst, let\'s go through the manual Static IP deployment steps.\\n\\n## Pre-requisites\\n\\n- Minimum resource requirements\\n\\n| vCPU         | Memory | Storage |\\n| ------------ | ------ | ------- |\\n| 8 vCPU cores | 32G    | 120G    |\\n\\n## Manual Steps\\n\\nTake the latest version of openshift version 4.10 as an example.\\n\\n1. Prepare the oc client binary, openshift-install binary, CoreOS live ISO file\\n   and SSH key to login to CoreOS.\\n\\n   ```sh\\n   curl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/openshift-client-linux.tar.gz > oc.tar.gz\\n   tar zxf oc.tar.gz\\n   chmod +x oc\\n   OCP_VERSION=latest-4.10\\n   curl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/$OCP_VERSION/openshift-install-linux.tar.gz > openshift-install-linux.tar.gz\\n   tar zxvf openshift-install-linux.tar.gz\\n   chmod +x openshift-install\\n   ISO_URL=$(./openshift-install coreos print-stream-json | grep location | grep x86_64 | grep iso | cut -d\\\\\\" -f4)\\n   curl -kLo rhcos-live.x86_64.iso $ISO_URL\\n   ssh-keygen -f snokey\\n   ```\\n\\n1. Create the install config file. `vim install-config.yaml`\\n\\n   ```yaml title=\\"install-config.yaml\\"\\n   apiVersion: v1\\n   baseDomain: cn.ibm.com\\n   compute:\\n     - name: worker\\n       replicas: 0\\n   controlPlane:\\n     name: master\\n     replicas: 1\\n   metadata:\\n     name: sno-test\\n   networking:\\n     networkType: OpenShiftSDN\\n     clusterNetworks:\\n       - cidr: 10.128.0.0/14\\n         hostPrefix: 23\\n     serviceNetwork:\\n       - 172.30.0.0/16\\n   BootstrapInPlace:\\n     InstallationDisk: /dev/sda\\n   platform:\\n     none: {}\\n   pullSecret: \\"<your redhat pull secret>\\"\\n   sshKey: \\"<your ssh key (snokey content in above command)>\\"\\n   ```\\n\\n1. Create single node ignition file\\n\\n   ```sh\\n   mkdir ocp && cp install-config.yaml ocp\\n   ./openshift-install --dir=ocp create single-node-ignition-config\\n   ```\\n\\n1. Prepare coreos-installer command\\n\\n   ```sh\\n   alias coreos-installer=\'podman run --privileged --rm -v /dev:/dev -v /run/udev:/run/udev -v $PWD:/data -w /data quay.io/coreos/coreos-installer:release\'\\n   ```\\n\\n   > Or you can download the **coreos-installer** binary from\\n   > [here.](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer)\\n\\n1. Create a script which will be used to replace the bootstrap ignition content.\\n\\n   `vim install-to-disk-customized.sh`\\n\\n   ```shell title=\\"install-to-disk-customized.sh\\"\\n   #!/usr/bin/env bash\\n   set -euoE pipefail ## -E option will cause functions to inherit trap\\n\\n   # This script is executed by install-to-disk service when installing single node with bootstrap in place\\n\\n   . /usr/local/bin/bootstrap-service-record.sh\\n\\n   record_service_stage_start \\"wait-for-bootkube\\"\\n   echo \\"Waiting for /opt/openshift/.bootkube.done\\"\\n   until [ -f /opt/openshift/.bootkube.done ]; do\\n     sleep 5\\n   done\\n   record_service_stage_success\\n\\n   if [ ! -f coreos-installer.done ]; then\\n     record_service_stage_start \\"coreos-installer\\"\\n     # Write image + ignition to disk\\n     echo \\"Executing coreos-installer with the following options: install -i /opt/openshift/master.ign /dev/sda\\"\\n     coreos-installer install -n -i /opt/openshift/master.ign /dev/sda\\n     touch coreos-installer.done\\n     record_service_stage_success\\n   fi\\n\\n   record_service_stage_start \\"reboot\\"\\n   echo \\"Going to reboot\\"\\n   shutdown -r +1 \\"Bootstrap completed, server is going to reboot.\\"\\n   touch /opt/openshift/.install-to-disk.done\\n   echo \\"Done\\"\\n   record_service_stage_success\\n   ```\\n\\n   This could be tricky, SNO installation procedure will be:\\n\\n   1. Launch the VM as the bootstrap node first with bootstrap ignition file,\\n      this ignition file include all the necessary actions to start bootstrap\\n      services which include generating the master ign file, then\\n   2. Bootstrap node will write the master.ign file into master node disk (here\\n      it is /dev/sda) through **install-to-disk** service, after that\\n   3. Bootstrap node will reboot and become a master node, however, the\\n      **master.ign** won\'t include any network configuration, hence after\\n      reboot, the master node won\'t have ip address and require to obtain ip via\\n      DHCP. So we need embed the network configuration include ip/gateway\\n      settings to the **master.ign**. **coreos-installer install** command\\n      provide the option **-n** to copy existing network configuration to ign\\n      file. Which make us be able to pass the bootstrap network setting to\\n      master node. The above content is the piece extracted and decoded from the\\n      **bootstrap-in-place-for-live-iso.ign** file, the original content include\\n      the command **coreos-installer install -i /opt/openshift/master.ign\\n      /dev/sda** , we replaced this into **coreos-installer install -n -i\\n      /opt/openshift/master.ign /dev/sda** as you can see in above script.\\n\\n1. Encode the **install-to-disk** script and replace relevant content in\\n   bootstrap ign file.\\n\\n   :::tip\\n\\n   make a copy of original bootstrap ign file\\n\\n   ```sh\\n   cp ocp/bootstrap-in-place-for-live-iso.ign iso.ign\\n   ```\\n\\n   :::\\n\\n   ```sh\\n   newb64=$(cat install-to-disk-customized.sh |base64 -w0)\\n   sed -i \\"s/IyEvdXNyL2Jpbi9lbnYgYmFzaApzZXQgLWV1b0UgcGlwZWZhaWwgIyMgLUUgb3B0aW9uIHdpbGwgY2F1c2UgZnVuY3Rpb25zIHRvIGluaGVyaXQgdHJhcAoKIyBUaGlzIHNjcmlwdCBpcyBleGVjdXRlZCBieSBpbnN0YWxsLXRvLWRpc2sgc2VydmljZSB3aGVuIGluc3RhbGxpbmcgc2luZ2xlIG5vZGUgd2l0aCBib290c3RyYXAgaW4gcGxhY2UKCi4gL3Vzci9sb2NhbC9iaW4vYm9vdHN0cmFwLXNlcnZpY2UtcmVjb3JkLnNoCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAid2FpdC1mb3ItYm9vdGt1YmUiCmVjaG8gIldhaXRpbmcgZm9yIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIgp1bnRpbCBbIC1mIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIF07IGRvCiAgc2xlZXAgNQpkb25lCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MKCmlmIFsgISAtZiBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUgXTsgdGhlbgogIHJlY29yZF9zZXJ2aWNlX3N0YWdlX3N0YXJ0ICJjb3Jlb3MtaW5zdGFsbGVyIgogICMgV3JpdGUgaW1hZ2UgKyBpZ25pdGlvbiB0byBkaXNrCiAgZWNobyAiRXhlY3V0aW5nIGNvcmVvcy1pbnN0YWxsZXIgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6IGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYSIKICBjb3Jlb3MtaW5zdGFsbGVyIGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYQoKICB0b3VjaCBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUKICByZWNvcmRfc2VydmljZV9zdGFnZV9zdWNjZXNzCmZpCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAicmVib290IgplY2hvICJHb2luZyB0byByZWJvb3QiCnNodXRkb3duIC1yICsxICJCb290c3RyYXAgY29tcGxldGVkLCBzZXJ2ZXIgaXMgZ29pbmcgdG8gcmVib290LiIKdG91Y2ggL29wdC9vcGVuc2hpZnQvLmluc3RhbGwtdG8tZGlzay5kb25lCmVjaG8gIkRvbmUiCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MK/${newb64}/g\\" iso.ign\\n   ```\\n\\n   :::info\\n\\n   The above base64 encoded string is the original **install-to-disk** script\\n   content, we replace it into the value of **${newb64}** which is the one with\\n   copy network action enabled.\\n\\n   :::\\n\\n1. Embed the bootstrap ign file to CoreOS live ISO file.\\n\\n   ```sh\\n   coreos-installer iso ignition embed -fi iso.ign rhcos-live.x86_64.iso\\n   ```\\n\\n   :::tip\\n\\n   You can use **coreos-installer iso ignition show rhcos-live.x86_64.iso** to\\n   check the results.\\n\\n   :::\\n\\n1. Add static IP setting to ISO kernel arguments.\\n\\n   ```sh\\n   coreos-installer iso kargs modify -a \\"ip=10.0.2.230::10.0.2.254:255.255.255.0:sno-test:ens192:off:9.9.9.9\\" rhcos-live.x86_64.iso\\"\\n   ```\\n\\n   Alternatively you can create an network connection file(eg.\\n   **sno-static-ip.nmconnection**) and use **coreos-installer iso network embed\\n   rhcos-live.x86_64.iso -k sno-static-ip.nmconnection** to embed the network\\n   setting to iso. Here I just use the **kargs modify** to embed it with kernel\\n   setting which is easier. The kernel argument consisted with :\\n   `\\"ip=${ip}::${gateway}:${netmask}:${hostname}:${interface}:none:${nameserver}\\"`\\n\\n1. Now it\'s time to launch you SNO vm with the customized ISO file.\\n\\n1. Post boot actions After SNO vm boot via the customized ISO file, It will\\n   become a bootstrap node in the first time, no further action to take during\\n   this period, Once bootstrap process completed, the VM will automatically\\n   reboot and become a master node. This time the master node will have the\\n   static IP setting as we\'ve already manipulated the master.ign file. but the\\n   hostname information won\'t be copied. Hence the master node will started with\\n   hostname **localhost**. We need correct it.\\n\\n   If we don\'t want or don\'t have authority to add the DNS entry in public DNS\\n   server(in my example the public dns server is 9.9.9.9), we also need to\\n   configure the DNS resolution for SNO cluster.\\n\\n   After the 2nd boot, take the following steps to correct hostname and DNS\\n   setting.\\n\\n   ```shell\\n   cat << EOF > /etc/dnsmasq.d/single-node.conf\\n   address=/apps.sno-test.cn.ibm.com/10.0.2.230\\n   address=/api-int.sno-test.cn.ibm.com/10.0.2.230\\n   address=/api.sno-test.cn.ibm.com/10.0.2.230\\n   EOF\\n   ```\\n\\n   ```sh\\n   systemctl enable dnsmasq\\n   systemctl restart dnsmasq\\n   ```\\n\\n   :::info\\n\\n   CoreOS default has dnsmasq installed but stopped and not enabled by default.\\n   we just add the DNS resolution and enable it. Here **sno-test** is the\\n   cluster name, **cn.ibm.com** is the cluster base domain, **10.0.2.230** is\\n   the SNO node static IP address.\\n\\n   :::\\n\\n   ```shell\\n   cat << EOF > /etc/NetworkManager/dispatcher.d/forcedns\\n   export IP=\\"10.0.2.230\\"\\n   export BASE_RESOLV_CONF=/run/NetworkManager/resolv.conf\\n   if [ \\"$2\\" = \\"dhcp4-change\\" ] || [ \\"$2\\" = \\"dhcp6-change\\" ] || [ \\"$2\\" = \\"up\\" ] || [ \\"$2\\" = \\"connectivity-change\\" ]; then\\n       if ! grep -q \\"$IP\\" /etc/resolv.conf; then\\n         export TMP_FILE=$(mktemp /etc/forcedns_resolv.conf.XXXXXX)\\n         cp  $BASE_RESOLV_CONF $TMP_FILE\\n         chmod --reference=$BASE_RESOLV_CONF $TMP_FILE\\n         sed -i -e \\"s/sno-test.cn.ibm.com//\\" \\\\\\n         -e \\"s/search /& sno-test.cn.ibm.com /\\" \\\\\\n         -e \\"0,/nameserver/s/nameserver/& $IP\\\\n&/\\" $TMP_FILE\\n         mv $TMP_FILE /etc/resolv.conf\\n       fi\\n   fi\\n   EOF\\n   ```\\n\\n   ```shell\\n   chmod 755 /etc/NetworkManager/dispatcher.d/forcedns\\n   nmcli conn up ens192  # this command enable SNO ip been the nameserver and update the /etc/resolv.conf\\n   ```\\n\\n   Check the **/etc/resolv.conf**, it will look like:\\n\\n   ```conf\\n   # Generated by NetworkManager\\n   nameserver 10.0.XXX.XXX\\n   nameserver 9.9.9.9\\n   ```\\n\\n1. Wait for SNO ready Now everything has been settled, Just wait for the SNO\\n   cluster to be ready and access. If you don\'t use public DNS to resolve fqdn\\n   entries about the SNO cluster, add the entry in **/etc/hosts** file:\\n   ```conf\\n   10.0.XXX.XXX api.sno-test.cn.ibm.com console-openshift-console.apps.sno-test.cn.ibm.com integrated-oauth-server-openshift-authentication.apps.sno-test.cn.ibm.com oauth-openshift.apps.sno-test.cn.ibm.com prometheus-k8s-openshift-monitoring.apps.sno-test.cn.ibm.com grafana-openshift-monitoring.apps.sno-test.cn.ibm.com\\n   ```\\n   Check the cluster operator status:\\n   ```sh\\n   export KUBECONFIG=<install_path>/ocp/auth/kubeconfig\\n   oc get co\\n   ```\\n\\n## Automatic deployment\\n\\nAll the processes to automatic deploy a SNO cluster have been developed and\\nmerged to the repo\\n[ocp4-vsphere-automation-airgap](https://github.com/lxin-git/ocp4-vsphere-automation-airgap).\\n\\nThis repo provide the one step configuration for all kinds of openshift\\ndeployment on vmware via ansible playbook, include v4.3~v4.10 support, and\\nsupport air-gapped deployment, see detailed instruction about\\n[airgap configuration](https://github.ibm.com/llixinn/ocp4-vsphere-automation-airgap)\\n\\nFor SNO automatic deployment, the new extra parameters introduced in the one-off\\nconfigure file, example as following:\\n\\n```yaml\\nsno:\\n  enabled: true\\n  network: DPortGroup\\n  name: \\"{{\'{{\'}}config.cluster_name{{\'}}\'}}-ocp\\"\\n  nic: ens192\\n  ip: 10.0.XXX.XXX\\n  netmask: 255.255.255.0\\n  gateway: 10.0.XXX.XXX\\n  public_dns1: 9.XXX.XXX.XXX\\n  public_dns2: 9.XXX.XXX.XXX\\n  cpu: 8\\n  ram: 32768\\n  disksize: 200\\n  installationdisk: /dev/sda\\n```"}]}')}}]);