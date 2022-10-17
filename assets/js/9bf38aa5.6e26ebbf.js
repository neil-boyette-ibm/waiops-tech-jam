"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[2510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},A=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,A=u(e,["components","mdxType","originalType","parentName"]),c=i(a),d=o,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(m,s(s({ref:t},A),{},{components:a})):n.createElement(m,s({ref:t},A))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var n=a(87462),o=(a(67294),a(3905));const r={title:"12. Fully Automated Runbooks",description:"How to setup fully automated runbooks with journal update",sidebar_position:12},s=void 0,u={unversionedId:"watson-aiops/fully-automated-runbooks/index",id:"watson-aiops/fully-automated-runbooks/index",title:"12. Fully Automated Runbooks",description:"How to setup fully automated runbooks with journal update",source:"@site/labs/watson-aiops/12-fully-automated-runbooks/index.mdx",sourceDirName:"watson-aiops/12-fully-automated-runbooks",slug:"/watson-aiops/fully-automated-runbooks/",permalink:"/waiops-tech-jam/labs/watson-aiops/fully-automated-runbooks/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/watson-aiops/12-fully-automated-runbooks/index.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"12. Fully Automated Runbooks",description:"How to setup fully automated runbooks with journal update",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"11. Semi-automated Runbook",permalink:"/waiops-tech-jam/labs/watson-aiops/semi-automated-runbooks/"},next:{title:"1. Introduction",permalink:"/waiops-tech-jam/labs/metric-management/introduction/"}},l={},i=[{value:"12.1: Overview",id:"121-overview",level:2},{value:"12.2: Enable ObjectServer REST Interface",id:"122-enable-objectserver-rest-interface",level:2},{value:"12.3: Create automation to update the journal",id:"123-create-automation-to-update-the-journal",level:2},{value:"12.4: Update Runbook - add a step to update the journal",id:"124-update-runbook---add-a-step-to-update-the-journal",level:2},{value:"12.5: Update Trigger to set Execution Automatic",id:"125-update-trigger-to-set-execution-automatic",level:2},{value:"12.6: Test Fully automated Runbook",id:"126-test-fully-automated-runbook",level:2}],A={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"121-overview"},"12.1: Overview"),(0,o.kt)("p",null,"IBM Runbook Automation can automate procedures that can help IT staff solve\neveryday operational problems and do not require human interaction, thereby\nincreasing the efficiency of IT operational processes."),(0,o.kt)("p",null,"Runbooks start as documented procedures on a piece of paper that can become\nfully automated procedures."),(0,o.kt)("p",null,"This module focuses on the creation of a fully-automated runbook and updates\nrunbook results in the event journal."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(59905).Z,width:"720",height:"134"})),(0,o.kt)("p",null,"Scenario: There is a apache2 server running on HOST. The apache2 process is\nmonitored and configured to generate an alert when the apache2 API service goes\nUP/DOWN."),(0,o.kt)("p",null,"Objective: We have a manual runbook available (created in previous lab) for this\nproblem and have a good success rate based on feedback. As a next step to mature\nthis runbook and achieve full automation, we want to execute this runbook\nautomatically and update results in the event journal. So the problem can be\nfixed without operator intervention."),(0,o.kt)("p",null,"By the end of this module, you will have a fully automated runbook ready in the\nWatson AIOPs Event Manager environment."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"122-enable-objectserver-rest-interface"},"12.2: Enable ObjectServer REST Interface"),(0,o.kt)("p",null,"In order to update event journal runbook sends update via REST API to\nObjectserver. ObjectServer REST interface is disabled out of the box for\nObjectserver. So we need to first enable Objectserver REST interface using below\nsteps:"),(0,o.kt)("p",null,"a) Find ConfigMap for the primary ObjectServer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get configmap| grep primary\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Example Output:"',title:'"Example','Output:"':!0},"evtmanager-objserv-agg-primary-config 2 14d\n")),(0,o.kt)("p",null,"b) Edit primary ObjectServer Configmap to enable REST interface in properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\noc edit configmap evtmanager-objserv-agg-primary-config\n")),(0,o.kt)("p",null,"Add the following to the ConfigMap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'apiVersion: v1\ndata:\n  agg-p-props-append: |\n    NRestOS.Enable: TRUE\n    NHttpd.EnableHTTP: TRUE\n    NHttpd.ListeningPort: 8080\n  agg-p-sql-extensions: ""\n')),(0,o.kt)("p",null,"c) Restart primary ObjectServer pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc delete pod evtmanager-ncoprimary-0\n")),(0,o.kt)("p",null,"d) Expose Listening port for REST API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc expose po evtmanager-ncoprimary-0 --port=8080 --type=NodePort --name=objserver-http-client-external-portforward\n")),(0,o.kt)("p",null,"Check exposed port and make note of the port assigned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get svc | grep objserver-http-client-external-portforward\n")),(0,o.kt)("p",null,"e) Retrieve OMNIBUS root password :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'oc get secret evtmanager-omni-secret -o go-template=\'{{range $k,$v := .data}}{{printf "%s: " $k}}{{if not $v}}{{$v}}{{else}}{{$v | base64decode}}{{end}}{{"\\n"}}{{end}}\'\n')),(0,o.kt)("p",null,"f) You need to delete 1 network policy in the cluster in order to successfully\nrun next curl command that connects to ObjectServer REST API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc delete networkpolicy evtmanager-ibm-netcool-prod-network-policy\n")),(0,o.kt)("p",null,"g) Test REST interface, OMNIbus password and port from the step (e) and step (d)\nare used to test the REST interface using curl."),(0,o.kt)("p",null,"Cluster name is : ",(0,o.kt)("inlineCode",{parentName:"p"},"<Your cluster ingressdomain>"),' like\n"tech-jam-xxx.containers.appdomain.cloud".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -k -u root:<OMNIBUS password from step e> -X POST -d "{ \\"sqlcmd\\": \\"select count(*) from alerts.status\\" }" -H \'Accept: application/json\' -H \'Content-Type: application/json\' http://<ClusterHostname>:<NodePort from step d>/objectserver/restapi/sql/factory\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Example Output:"',title:'"Example','Output:"':!0},'{ "rowset": { "osname": "AGG_P", "affectedRows": 1, "coldesc": [{\n"name": "COUNT( * )", "type": "integer", "size": 4 }], "rows": [{ "COUNT( * )":\n110 }] } }\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"123-create-automation-to-update-the-journal"},"12.3: Create automation to update the journal"),(0,o.kt)("p",null,'Create an automation "Update Journal" with two additional parameters "alertid"\nand "message".'),(0,o.kt)("p",null,"Navigate to: ",(0,o.kt)("strong",{parentName:"p"}," Automations \u2192 Runbooks \u2192 Automations \u2192 Create Automation ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(64861).Z,width:"1303",height:"900"})),(0,o.kt)("p",null,"Script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -k -u root:<OMNIBUS password from step e> -X POST -d "{ \\"sqlcmd\\": \\"exec jinsert($alertid,0, getdate, \'$message\')\\" }" -H \'Accept: application/json\' -H \'Content-Type: application/json\' "http://<ClusterHostname>:<NodePort from step d>/objectserver/restapi/sql/factory"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6177).Z,width:"1193",height:"870"})),(0,o.kt)("p",null,'Save automation "Update Journal".'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"124-update-runbook---add-a-step-to-update-the-journal"},"12.4: Update Runbook - add a step to update the journal"),(0,o.kt)("p",null,"Navigate to: ",(0,o.kt)("strong",{parentName:"p"},' Automations \u2192 Runbooks \u2192 Library \u2192 Edit runbook "Restart API\nService" ')),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29895).Z,width:"1853",height:"55"})),(0,o.kt)("p",null,'Add Automated Step -> Select "Update Journal"'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70992).Z,width:"1452",height:"641"})),(0,o.kt)("p",null,'Add parameter mapping : For "alertid" you can create "New Runbook parameter" of\nString type.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(27277).Z,width:"2013",height:"1148"})),(0,o.kt)("p",null,"Save the automation step parameter mapping and publish the runbook."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"125-update-trigger-to-set-execution-automatic"},"12.5: Update Trigger to set Execution Automatic"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},' Automations \u2192 Runbooks \u2192 Triggers -> Edit Trigger "Restart API Service" ')),(0,o.kt)("p",null,'Update Runbook execution from "Manual" to "Automatic".'),(0,o.kt)("p",null,'Configure Parameter mapping from alert to Runbook parameters "alertid\' = Serial\nand "Node" = Node'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(38146).Z,width:"2217",height:"1544"})),(0,o.kt)("p",null,"Save changes to the trigger."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"126-test-fully-automated-runbook"},"12.6: Test Fully automated Runbook"),(0,o.kt)("p",null,"Connect to OCP Infra node."),(0,o.kt)("p",null,"Check status of apache2 service on OCP Infra node. If it is not running start\nit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status apache2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start apache2\n")),(0,o.kt)("p",null,"Now stop apache2 Service and insert test alert for apache2 Service. (In live\nmonitoring this alert is automatically generated when Service goes down)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop apache2\nsudo systemctl status apache2\n")),(0,o.kt)("p",null,"Login into OCP cluster and simulate corresponding alert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 -- /bin/bash -c '/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -pass $OMNIBUS_ROOT_PWD'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Replace '<HOSTNAME",">","' with the Control Node eth0 IP address captured in 11-5 in\nbelow command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"delete from alerts.status where Summary like 'API Server'\ngo\ninsert into alerts.status (Identifier,Severity,Type,AlertGroup,Node,FirstOccurrence,LastOccurrence,Manager,Class,Summary) values('Demo API Server <HOSTNAME> 1',5,1,'Demo','<HOSTNAME>',getdate,getdate,'Tivoli EIF Probe',6601,'API Server on <HOST>:<PORT> is DOWN');\ngo\n")),(0,o.kt)("p",null,"Expected Output"),(0,o.kt)("p",null,'Launch Alert Viewer and check alert with Summary = " API Server on HOST is\nDOWN". There should be a runbook associated with this alert automatically.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61606).Z,width:"1843",height:"717"})),(0,o.kt)("p",null,"Open Event information for this alert to which runbook is associated. You will\nsee Runbook parameters under Information, Runbook is set to run automatically."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(42210).Z,width:"1564",height:"289"})),(0,o.kt)("p",null,'Once it starts automatic execution "RunbookStatus" changes to "In Progress" ->\n"Complete"'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For more information on RunbookStatus :\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/runbook-automation?topic=events-state-transitions-runbookstatus-field"},"https://www.ibm.com/docs/en/runbook-automation?topic=events-state-transitions-runbookstatus-field"))),(0,o.kt)("p",null,"Open Event information for this alert to which runbook is associated. Click the Timeline tab:"),(0,o.kt)("p",null,"Runbook execution status and result are updated for this event."),(0,o.kt)("p",null,"You can check if the system automatically restarted the service."),(0,o.kt)("p",null,"Connect to OCP Infra node & check status of apache2 service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status apache2\n")),(0,o.kt)("p",null,"It should return running status , as runbook automatically started this service"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(87016).Z,width:"695",height:"320"})),(0,o.kt)("p",null,'Also you can view the runbook execution history in "Automations \u2192 Runbooks \u2192\nExecution" tab.'),(0,o.kt)("p",null,"Now you have a fully automated runbook functional in your environment."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For more details on Runbooks, see the documentation link:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-managing-runbooks-automations"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-managing-runbooks-automations"))),(0,o.kt)("p",null,"You have now completed this module and learned how to create and configure fully\nautomated runbook in Event Manager."),(0,o.kt)("hr",null))}p.isMDXComponent=!0},59905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/AutoRunbookLifeCycle-862971284d51939923796bd7ab5fa80c.png"},61606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_alertviewer-7d1ab18a58d7cb81968736fb60dfdb59.png"},64861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_create_automation-bf978f88f3f8f586686fd54fc4e9a3b4.png"},6177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_create_automation_params-8be2351587ef59428210216c600bde9b.png"},42210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_details-fe37a8f3b8927705083418b717cebc8e.png"},87016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_result_output-5e4e1dc4d4d5caf6317b2927a6630683.png"},27277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_update_journal-ff25991b896c4eb7063db7f01cf57c3b.png"},70992:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_update_runbook-8065409795fb9d3ff97f0cccdb98b8c6.png"},29895:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},38146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FRB_update_trigger-d8de03b76df829dbc0fb53fb02921108.png"}}]);