"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[3331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Single Node Openshift deployment with Static IP",description:"This article explains to you how to deploy the Single Node Openshift with Static IP, since there is no detailed introduction in openshift official documentation. An automatic deployment tool also included for vmware provisioning.",tags:["openshift","ocp","sno"],slug:"single-node-openshift-deployment-with-static-ip"},r=void 0,s={permalink:"/waiops-tech-jam/blog/single-node-openshift-deployment-with-static-ip",editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/blog/single-node-openshift-deployment-with-static-ip/single-node-openshift-deployment-with-static-ip.md",source:"@site/blog/single-node-openshift-deployment-with-static-ip/single-node-openshift-deployment-with-static-ip.md",title:"Single Node Openshift deployment with Static IP",description:"This article explains to you how to deploy the Single Node Openshift with Static IP, since there is no detailed introduction in openshift official documentation. An automatic deployment tool also included for vmware provisioning.",date:"2023-03-22T09:47:27.000Z",formattedDate:"March 22, 2023",tags:[{label:"openshift",permalink:"/waiops-tech-jam/blog/tags/openshift"},{label:"ocp",permalink:"/waiops-tech-jam/blog/tags/ocp"},{label:"sno",permalink:"/waiops-tech-jam/blog/tags/sno"}],readingTime:7.7,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Single Node Openshift deployment with Static IP",description:"This article explains to you how to deploy the Single Node Openshift with Static IP, since there is no detailed introduction in openshift official documentation. An automatic deployment tool also included for vmware provisioning.",tags:["openshift","ocp","sno"],slug:"single-node-openshift-deployment-with-static-ip"}},l={authorsImageUrls:[]},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Manual Steps",id:"manual-steps",level:2},{value:"Automatic deployment",id:"automatic-deployment",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from openshift v4.9, RedHat announced the support for single node\ncluster deployment. OpenShift Container Platform on a single node is a\nspecialized installation that requires the creation of a special ignition\nconfiguration ISO. The primary use case is for edge computing workloads,\nincluding intermittent connectivity, portable clouds, and 5G radio access\nnetworks (RAN) close to a base station. The major tradeoff with an installation\non a single node is the lack of high availability."),(0,o.kt)("p",null,"Furthermore Single Node Openshift (SNO) can also be used in many other scenarios\nsuch as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get full functionality of openshift cluster (except high availability) through\none node deployment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run an openshift cluster with few resources and run openshift-based demo apps\non top of it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy to build demo scenarios for product-only features.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Quickly backup and restore a demo/poc environment, by building a single VM\nimage, it's easily migrated to new environments and will launch and start\nwithout product deployment & configuration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Convenient state recovery by using the snapshot, you can revert to the\nprevious state at any time, which greatly facilitates functional testing and\ndevelopment, while the multi-nodes cluster snapshot recovery is almost\nimpossible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the resources of a single node are sufficient enough, you can run IBM\nCloud Paks (non-production deployment). Currently, the deployment of AIOps\nAIManager with xsmall sizing has been verified."))),(0,o.kt)("p",null,"RedHat provided the steps\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/installing/installing_sno/install-sno-installing-sno.html"},"here"),"\nto provision SNO, however, this guide only support a DHCP enabled environment,\nthe SNO bootstrap & master node has to obtain the IP address via DHCP client,\nthis is often not possible as the SNO won't be deployed into a DHCP enabled\nenvironment. You have to use a manual configured static IP address for this\nall-in-one node."),(0,o.kt)("p",null,"On the other hand, RedHat's tutorial suggests to use the Assisted Installer to\nperform the guided installation which is hard to automated and requires internet\naccess. This is not an option for an air-gapped deployment or you have to create\nyour own Assisted Installer service which is more complicated."),(0,o.kt)("p",null,"What we intend to do is make it simple without the Assisted Installer and ensure\neverything is automated."),(0,o.kt)("p",null,"First, let's go through the manual Static IP deployment steps."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum resource requirements")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory"),(0,o.kt)("th",{parentName:"tr",align:null},"Storage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8 vCPU cores"),(0,o.kt)("td",{parentName:"tr",align:null},"32G"),(0,o.kt)("td",{parentName:"tr",align:null},"120G")))),(0,o.kt)("h2",{id:"manual-steps"},"Manual Steps"),(0,o.kt)("p",null,"Take the latest version of openshift version 4.10 as an example."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare the oc client binary, openshift-install binary, CoreOS live ISO file\nand SSH key to login to CoreOS."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/openshift-client-linux.tar.gz > oc.tar.gz\ntar zxf oc.tar.gz\nchmod +x oc\nOCP_VERSION=latest-4.10\ncurl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/$OCP_VERSION/openshift-install-linux.tar.gz > openshift-install-linux.tar.gz\ntar zxvf openshift-install-linux.tar.gz\nchmod +x openshift-install\nISO_URL=$(./openshift-install coreos print-stream-json | grep location | grep x86_64 | grep iso | cut -d\\" -f4)\ncurl -kLo rhcos-live.x86_64.iso $ISO_URL\nssh-keygen -f snokey\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the install config file. ",(0,o.kt)("inlineCode",{parentName:"p"},"vim install-config.yaml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="install-config.yaml"',title:'"install-config.yaml"'},'apiVersion: v1\nbaseDomain: cn.ibm.com\ncompute:\n  - name: worker\n    replicas: 0\ncontrolPlane:\n  name: master\n  replicas: 1\nmetadata:\n  name: sno-test\nnetworking:\n  networkType: OpenShiftSDN\n  clusterNetworks:\n    - cidr: 10.128.0.0/14\n      hostPrefix: 23\n  serviceNetwork:\n    - 172.30.0.0/16\nBootstrapInPlace:\n  InstallationDisk: /dev/sda\nplatform:\n  none: {}\npullSecret: "<your redhat pull secret>"\nsshKey: "<your ssh key (snokey content in above command)>"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create single node ignition file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir ocp && cp install-config.yaml ocp\n./openshift-install --dir=ocp create single-node-ignition-config\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare coreos-installer command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"alias coreos-installer='podman run --privileged --rm -v /dev:/dev -v /run/udev:/run/udev -v $PWD:/data -w /data quay.io/coreos/coreos-installer:release'\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Or you can download the ",(0,o.kt)("strong",{parentName:"p"},"coreos-installer")," binary from\n",(0,o.kt)("a",{parentName:"p",href:"https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer"},"here.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a script which will be used to replace the bootstrap ignition content."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"vim install-to-disk-customized.sh")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="install-to-disk-customized.sh"',title:'"install-to-disk-customized.sh"'},'#!/usr/bin/env bash\nset -euoE pipefail ## -E option will cause functions to inherit trap\n\n# This script is executed by install-to-disk service when installing single node with bootstrap in place\n\n. /usr/local/bin/bootstrap-service-record.sh\n\nrecord_service_stage_start "wait-for-bootkube"\necho "Waiting for /opt/openshift/.bootkube.done"\nuntil [ -f /opt/openshift/.bootkube.done ]; do\n  sleep 5\ndone\nrecord_service_stage_success\n\nif [ ! -f coreos-installer.done ]; then\n  record_service_stage_start "coreos-installer"\n  # Write image + ignition to disk\n  echo "Executing coreos-installer with the following options: install -i /opt/openshift/master.ign /dev/sda"\n  coreos-installer install -n -i /opt/openshift/master.ign /dev/sda\n  touch coreos-installer.done\n  record_service_stage_success\nfi\n\nrecord_service_stage_start "reboot"\necho "Going to reboot"\nshutdown -r +1 "Bootstrap completed, server is going to reboot."\ntouch /opt/openshift/.install-to-disk.done\necho "Done"\nrecord_service_stage_success\n')),(0,o.kt)("p",{parentName:"li"},"This could be tricky, SNO installation procedure will be:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Launch the VM as the bootstrap node first with bootstrap ignition file,\nthis ignition file include all the necessary actions to start bootstrap\nservices which include generating the master ign file, then"),(0,o.kt)("li",{parentName:"ol"},"Bootstrap node will write the master.ign file into master node disk (here\nit is /dev/sda) through ",(0,o.kt)("strong",{parentName:"li"},"install-to-disk")," service, after that"),(0,o.kt)("li",{parentName:"ol"},"Bootstrap node will reboot and become a master node, however, the\n",(0,o.kt)("strong",{parentName:"li"},"master.ign")," won't include any network configuration, hence after\nreboot, the master node won't have ip address and require to obtain ip via\nDHCP. So we need embed the network configuration include ip/gateway\nsettings to the ",(0,o.kt)("strong",{parentName:"li"},"master.ign"),". ",(0,o.kt)("strong",{parentName:"li"},"coreos-installer install")," command\nprovide the option ",(0,o.kt)("strong",{parentName:"li"},"-n")," to copy existing network configuration to ign\nfile. Which make us be able to pass the bootstrap network setting to\nmaster node. The above content is the piece extracted and decoded from the\n",(0,o.kt)("strong",{parentName:"li"},"bootstrap-in-place-for-live-iso.ign")," file, the original content include\nthe command ",(0,o.kt)("strong",{parentName:"li"},"coreos-installer install -i /opt/openshift/master.ign\n/dev/sda")," , we replaced this into ",(0,o.kt)("strong",{parentName:"li"},"coreos-installer install -n -i\n/opt/openshift/master.ign /dev/sda")," as you can see in above script."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Encode the ",(0,o.kt)("strong",{parentName:"p"},"install-to-disk")," script and replace relevant content in\nbootstrap ign file."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"make a copy of original bootstrap ign file"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp ocp/bootstrap-in-place-for-live-iso.ign iso.ign\n"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'newb64=$(cat install-to-disk-customized.sh |base64 -w0)\nsed -i "s/IyEvdXNyL2Jpbi9lbnYgYmFzaApzZXQgLWV1b0UgcGlwZWZhaWwgIyMgLUUgb3B0aW9uIHdpbGwgY2F1c2UgZnVuY3Rpb25zIHRvIGluaGVyaXQgdHJhcAoKIyBUaGlzIHNjcmlwdCBpcyBleGVjdXRlZCBieSBpbnN0YWxsLXRvLWRpc2sgc2VydmljZSB3aGVuIGluc3RhbGxpbmcgc2luZ2xlIG5vZGUgd2l0aCBib290c3RyYXAgaW4gcGxhY2UKCi4gL3Vzci9sb2NhbC9iaW4vYm9vdHN0cmFwLXNlcnZpY2UtcmVjb3JkLnNoCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAid2FpdC1mb3ItYm9vdGt1YmUiCmVjaG8gIldhaXRpbmcgZm9yIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIgp1bnRpbCBbIC1mIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIF07IGRvCiAgc2xlZXAgNQpkb25lCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MKCmlmIFsgISAtZiBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUgXTsgdGhlbgogIHJlY29yZF9zZXJ2aWNlX3N0YWdlX3N0YXJ0ICJjb3Jlb3MtaW5zdGFsbGVyIgogICMgV3JpdGUgaW1hZ2UgKyBpZ25pdGlvbiB0byBkaXNrCiAgZWNobyAiRXhlY3V0aW5nIGNvcmVvcy1pbnN0YWxsZXIgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6IGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYSIKICBjb3Jlb3MtaW5zdGFsbGVyIGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYQoKICB0b3VjaCBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUKICByZWNvcmRfc2VydmljZV9zdGFnZV9zdWNjZXNzCmZpCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAicmVib290IgplY2hvICJHb2luZyB0byByZWJvb3QiCnNodXRkb3duIC1yICsxICJCb290c3RyYXAgY29tcGxldGVkLCBzZXJ2ZXIgaXMgZ29pbmcgdG8gcmVib290LiIKdG91Y2ggL29wdC9vcGVuc2hpZnQvLmluc3RhbGwtdG8tZGlzay5kb25lCmVjaG8gIkRvbmUiCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MK/${newb64}/g" iso.ign\n')),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The above base64 encoded string is the original ",(0,o.kt)("strong",{parentName:"p"},"install-to-disk")," script\ncontent, we replace it into the value of ",(0,o.kt)("strong",{parentName:"p"},"${newb64}")," which is the one with\ncopy network action enabled."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Embed the bootstrap ign file to CoreOS live ISO file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"coreos-installer iso ignition embed -fi iso.ign rhcos-live.x86_64.iso\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("strong",{parentName:"p"},"coreos-installer iso ignition show rhcos-live.x86_64.iso")," to\ncheck the results."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add static IP setting to ISO kernel arguments."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'coreos-installer iso kargs modify -a "ip=10.0.2.230::10.0.2.254:255.255.255.0:sno-test:ens192:off:9.9.9.9" rhcos-live.x86_64.iso"\n')),(0,o.kt)("p",{parentName:"li"},"Alternatively you can create an network connection file(eg.\n",(0,o.kt)("strong",{parentName:"p"},"sno-static-ip.nmconnection"),") and use ",(0,o.kt)("strong",{parentName:"p"},"coreos-installer iso network embed\nrhcos-live.x86_64.iso -k sno-static-ip.nmconnection")," to embed the network\nsetting to iso. Here I just use the ",(0,o.kt)("strong",{parentName:"p"},"kargs modify")," to embed it with kernel\nsetting which is easier. The kernel argument consisted with :\n",(0,o.kt)("inlineCode",{parentName:"p"},'"ip=${ip}::${gateway}:${netmask}:${hostname}:${interface}:none:${nameserver}"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now it's time to launch you SNO vm with the customized ISO file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Post boot actions After SNO vm boot via the customized ISO file, It will\nbecome a bootstrap node in the first time, no further action to take during\nthis period, Once bootstrap process completed, the VM will automatically\nreboot and become a master node. This time the master node will have the\nstatic IP setting as we've already manipulated the master.ign file. but the\nhostname information won't be copied. Hence the master node will started with\nhostname ",(0,o.kt)("strong",{parentName:"p"},"localhost"),". We need correct it."),(0,o.kt)("p",{parentName:"li"},"If we don't want or don't have authority to add the DNS entry in public DNS\nserver(in my example the public dns server is 9.9.9.9), we also need to\nconfigure the DNS resolution for SNO cluster."),(0,o.kt)("p",{parentName:"li"},"After the 2nd boot, take the following steps to correct hostname and DNS\nsetting."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat << EOF > /etc/dnsmasq.d/single-node.conf\naddress=/apps.sno-test.cn.ibm.com/10.0.2.230\naddress=/api-int.sno-test.cn.ibm.com/10.0.2.230\naddress=/api.sno-test.cn.ibm.com/10.0.2.230\nEOF\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable dnsmasq\nsystemctl restart dnsmasq\n")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"CoreOS default has dnsmasq installed but stopped and not enabled by default.\nwe just add the DNS resolution and enable it. Here ",(0,o.kt)("strong",{parentName:"p"},"sno-test")," is the\ncluster name, ",(0,o.kt)("strong",{parentName:"p"},"cn.ibm.com")," is the cluster base domain, ",(0,o.kt)("strong",{parentName:"p"},"10.0.2.230")," is\nthe SNO node static IP address.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat << EOF > /etc/NetworkManager/dispatcher.d/forcedns\nexport IP="10.0.2.230"\nexport BASE_RESOLV_CONF=/run/NetworkManager/resolv.conf\nif [ "$2" = "dhcp4-change" ] || [ "$2" = "dhcp6-change" ] || [ "$2" = "up" ] || [ "$2" = "connectivity-change" ]; then\n    if ! grep -q "$IP" /etc/resolv.conf; then\n      export TMP_FILE=$(mktemp /etc/forcedns_resolv.conf.XXXXXX)\n      cp  $BASE_RESOLV_CONF $TMP_FILE\n      chmod --reference=$BASE_RESOLV_CONF $TMP_FILE\n      sed -i -e "s/sno-test.cn.ibm.com//" \\\n      -e "s/search /& sno-test.cn.ibm.com /" \\\n      -e "0,/nameserver/s/nameserver/& $IP\\n&/" $TMP_FILE\n      mv $TMP_FILE /etc/resolv.conf\n    fi\nfi\nEOF\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chmod 755 /etc/NetworkManager/dispatcher.d/forcedns\nnmcli conn up ens192  # this command enable SNO ip been the nameserver and update the /etc/resolv.conf\n")),(0,o.kt)("p",{parentName:"li"},"Check the ",(0,o.kt)("strong",{parentName:"p"},"/etc/resolv.conf"),", it will look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"# Generated by NetworkManager\nnameserver 10.0.XXX.XXX\nnameserver 9.9.9.9\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for SNO ready Now everything has been settled, Just wait for the SNO\ncluster to be ready and access. If you don't use public DNS to resolve fqdn\nentries about the SNO cluster, add the entry in ",(0,o.kt)("strong",{parentName:"p"},"/etc/hosts")," file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"10.0.XXX.XXX api.sno-test.cn.ibm.com console-openshift-console.apps.sno-test.cn.ibm.com integrated-oauth-server-openshift-authentication.apps.sno-test.cn.ibm.com oauth-openshift.apps.sno-test.cn.ibm.com prometheus-k8s-openshift-monitoring.apps.sno-test.cn.ibm.com grafana-openshift-monitoring.apps.sno-test.cn.ibm.com\n")),(0,o.kt)("p",{parentName:"li"},"Check the cluster operator status:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export KUBECONFIG=<install_path>/ocp/auth/kubeconfig\noc get co\n")))),(0,o.kt)("h2",{id:"automatic-deployment"},"Automatic deployment"),(0,o.kt)("p",null,"All the processes to automatic deploy a SNO cluster have been developed and\nmerged to the repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lxin-git/ocp4-vsphere-automation-airgap"},"ocp4-vsphere-automation-airgap"),"."),(0,o.kt)("p",null,"This repo provide the one step configuration for all kinds of openshift\ndeployment on vmware via ansible playbook, include v4.3~v4.10 support, and\nsupport air-gapped deployment, see detailed instruction about\n",(0,o.kt)("a",{parentName:"p",href:"https://github.ibm.com/llixinn/ocp4-vsphere-automation-airgap"},"airgap configuration")),(0,o.kt)("p",null,"For SNO automatic deployment, the new extra parameters introduced in the one-off\nconfigure file, example as following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sno:\n  enabled: true\n  network: DPortGroup\n  name: \"{{'{{'}}config.cluster_name{{'}}'}}-ocp\"\n  nic: ens192\n  ip: 10.0.XXX.XXX\n  netmask: 255.255.255.0\n  gateway: 10.0.XXX.XXX\n  public_dns1: 9.XXX.XXX.XXX\n  public_dns2: 9.XXX.XXX.XXX\n  cpu: 8\n  ram: 32768\n  disksize: 200\n  installationdisk: /dev/sda\n")))}m.isMDXComponent=!0}}]);