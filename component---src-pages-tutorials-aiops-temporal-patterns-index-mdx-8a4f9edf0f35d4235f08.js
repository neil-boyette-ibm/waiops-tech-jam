"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[1511,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),i=a(8650),r=a.n(i),s=a(1597),o=a(4799),l=a(3448),c=a(5900),p=a.n(c),m=function(e){var t,a=e.title,i=e.theme,r=e.tabs,s=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,i=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,o=r.baseUrl,l=r.subDirectory,c=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},A=a(4703),g=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===o,c=new RegExp(o+"/?(#.*)?$"),m=i.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),h=u,b=a(7296),v=a(5387),f=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,p=t.frontmatter,g=void 0===p?{}:p,u=t.relativePagePath,f=t.titleType,E=g.tabs,w=g.title,k=g.theme,I=g.description,N=g.keywords,O=g.date,S=(0,v.Z)().interiorTheme,C=(0,s.useStaticQuery)("2456312558").site.pathPrefix,R=C?i.pathname.replace(C,""):i.pathname,L=E?R.split("/").filter(Boolean).slice(-1)[0]||r()(E[0],{lower:!0}):"",T=k||S;return n.createElement(l.Z,{tabs:E,homepage:!1,theme:T,pageTitle:w,pageDescription:I,pageKeywords:N,titleType:f},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:E,theme:T}),E&&n.createElement(h,{title:w,slug:R,tabs:E,currentTab:L}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:u}),n.createElement(y,{date:O})),n.createElement(A.Z,{pageContext:t,location:i,slug:R,tabs:E,currentTab:L}),n.createElement(o.Z,null))}},5938:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return A}});var n=a(3366),i=(a(7294),a(4983)),r=a(3624),s=["components"],o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:o},d=r.Z;function A(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"10-1: Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"10-2: Create historical data for learning"),(0,i.kt)(p,{mdxType:"AnchorLink"},"10-3: Insert historical events into event manager"),(0,i.kt)(p,{mdxType:"AnchorLink"},"10-4: Run training for temporal patterns"),(0,i.kt)(p,{mdxType:"AnchorLink"},"10-5: Check policies created from learning"),(0,i.kt)(p,{mdxType:"AnchorLink"},"10-6: Replay Events")),(0,i.kt)("h2",null,"10-1: Overview"),(0,i.kt)("p",null,"This module focuses on temporal patterns that group events based on learned patterns in time-based relations. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Temporal patterns?")),(0,i.kt)("p",null,"The temporal pattern analytic identifies patterns of behavior among temporal groups, which are similar, but occur on different resources. Subsequent events, which match the pattern and occur on a new, common resource are grouped."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How does it work?")),(0,i.kt)("p",null,"First, temporal grouping Policies are generated when 2, or more, events occur together (i.e. each less than 20 mins apart)."),(0,i.kt)("p",null,"Temporal patterns are created by training when 3, or more, Temporal grouping Policies are generated, for events with common Event Types. But only if the events which make up the pattern have the same Resource (aka Node) field."),(0,i.kt)("p",null,"So to create a pattern, we need to produce 3 Related Events Temporal Policies, with common Event Types, whose Resource values (within a policy) are the same."),(0,i.kt)("p",null,"The generation of Temporal Policies is done based on the First Occurrence of an Event and uses its Identifier to identify it. The First Occurrance is set with a Unix epoch value."),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"10-2: Create historical data for learning"),(0,i.kt)("p",null,"In order to understand how Watson AIOps learns temporal patterns, we will simulate a sample set of events and train analytics engine on the simulated historical dataset.\nIn this historical dataset we are simulating same issue in 3 differetn locations (SASKATOON,EDMONTON,VANCOUVER) , that will generate 3 temporal policies and 1 temporal pattern."),(0,i.kt)("p",null,"For replay we will use 4th Location (WINNIPEG) to simulate same issue , Watson AIOps applies the learned pattern policy to group events from another location that is not seen in past."),(0,i.kt)("p",null,"Login into OCP cluster using oc login."),(0,i.kt)("p",null,"Create pattern_events_historic.sh script (as below)  that simulates a historic set of events into the ObjectServer. starttime in script is EPOCH conversion for the time in history (9AM Jul 1, 2022) so we have a minimum 3-4 weeks of sample data generated for machine learning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\nstarttime=1656363600\nstamp=$starttime\nfor (( i=0; i<=4; i++ ))\ndo\nstamp_temporal=$(($starttime+$i*6*86400))\nstamp_temporal1=$(($starttime+$i*5*71500))\nstamp_temporal2=$(($starttime+$i*4*72500))\n\necho $i $stamp_temporal $stamp_temporal1 $stamp_temporal2\n\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\n\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier11','ADX-A', 'SAS-BLDG-01-FLOOR-01', 'A','RACK01-FAN07','FAN Failure reported for RACK01', 2, $stamp_temporal,$stamp_temporal, 40373,'EventId', 'SASKATOON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier12','ADX-A', 'SAS-BLDG-01-FLOOR-01', 'B','RACK01','POWER Supply Failure reported for RACK01',  4, $stamp_temporal + 5,$stamp_temporal+5, 40373,'EventId', 'SASKATOON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier13','ADX-A', 'SAS-BLDG-01-FLOOR-01', 'C','RACK01-DEV03', 'DEVICE Failure on RACK01', 3, $stamp_temporal + 6,$stamp_temporal+6, 40373,'EventId', 'SASKATOON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier14','ADX-A', 'SAS-BLDG-01-FLOOR-01', 'C', 'RACK01-DEV02','DEVICE Failure on RACK01',3, $stamp_temporal + 6,$stamp_temporal+6, 40373,'EventId', 'SASKATOON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier15','ADX-A', 'SAS-BLDG-01-FLOOR-01', 'C', 'RACK01-DEV01','DEVICE Failure on RACK01', 3, $stamp_temporal +6,$stamp_temporal, 40373,'EventId', 'SASKATOON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier21','ADX-B', 'EDM-BLDG-02-FLOOR-01', 'A','RACK01-FAN07','FAN Failure reported for RACK01', 2, $stamp_temporal1,$stamp_temporal1, 40373,'EventId', 'EDMONTON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier22','ADX-B', 'EDM-BLDG-02-FLOOR-01', 'B','RACK01','POWER Supply Failure reported for RACK01',  4, $stamp_temporal1+ 5,$stamp_temporal1+5, 40373,'EventId', 'EDMONTON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier23','ADX-B', 'EDM-BLDG-02-FLOOR-01', 'C','RACK01-DEV03', 'DEVICE Failure on RACK01', 3, $stamp_temporal1+ 6,$stamp_temporal1+6, 40373,'EventId', 'EDMONTON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier24','ADX-B', 'EDM-BLDG-02-FLOOR-01', 'C', 'RACK01-DEV02','DEVICE Failure on RACK01',3, $stamp_temporal1+ 6,$stamp_temporal1 +6, 40373,'EventId', 'EDMONTON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier25','ADX-B', 'EDM-BLDG-02-FLOOR-01', 'C', 'RACK01-DEV01','DEVICE Failure on RACK01', 3, $stamp_temporal1+6,$stamp_temporal1+6, 40373,'EventId', 'EDMONTON',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier31','ADX-B', 'VAN-BLDG-02-FLOOR-01', 'A','RACK01-FAN07','FAN Failure reported for RACK01', 2, $stamp_temporal2,$stamp_temporal2, 40373,'EventId', 'VANCOUVER',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('SampleIdentifier32','ADX-B', 'VAN-BLDG-02-FLOOR-01', 'B','RACK01','POWER Supply Failure reported for RACK01',  4, $stamp_temporal2+ 5,$stamp_temporal2+5, 40373,'EventId', 'VANCOUVER',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier33','ADX-B', 'VAN-BLDG-02-FLOOR-01', 'C','RACK01-DEV03', 'DEVICE Failure on RACK01', 3, $stamp_temporal2+ 6,$stamp_temporal2+6, 40373,'EventId', 'VANCOUVER',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier34','ADX-B', 'VAN-BLDG-02-FLOOR-01', 'C', 'RACK01-DEV02','DEVICE Failure on RACK01',3, $stamp_temporal2+ 6,$stamp_temporal2 +6, 40373,'EventId', 'VANCOUVER',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('SampleIdentifier35','ADX-B', 'VAN-BLDG-02-FLOOR-01', 'C', 'RACK01-DEV01','DEVICE Failure on RACK01', 3, $stamp_temporal2+6,$stamp_temporal2+6, 40373,'EventId', 'VANCOUVER',1);\ngo\n\nexit\nEOF\n\nsleep 1m\n\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\nupdate alerts.status set Severity = 0 where Manager like 'ADX';\ngo\nexit\nEOF\n\nsleep 1m\n\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\ndelete from alerts.status where Manager like 'ADX' ;\ngo\nexit\nEOF\n\nsleep 1m\n\necho \"Done.\" $i\ndone\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"10-3: Insert historical events into event manager"),(0,i.kt)("p",null,"Copy historic event generating script to ObjectServer pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'cat pattern_events_historic.sh | oc exec -i evtmanager-ncoprimary-0 -- sh -c "cat > /tmp/pattern_events_historic.sh"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'oc exec -it evtmanager-ncoprimary-0 bash -- sh -c "chmod +x /tmp/pattern_events_historic.sh"\n')),(0,i.kt)("p",null,"Now execute this script to simulate historic data set replay.( It will take approx 6 mins)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 bash -- /tmp/pattern_events_historic.sh\n")),(0,i.kt)("p",null,"You can ignore message “Warning: Failed to find tar in the following directories : /bin /usr/bin” "),(0,i.kt)("p",null,"Once replay is finished ( takes approx 5-6 mins), you can start training."),(0,i.kt)("h2",null,"10-4: Run training for temporal patterns"),(0,i.kt)("p",null,"Get image for trainer pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc get noi evtmanager -o yaml | grep ea-events-tooling\n")),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1031px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.722222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAXklEQVQI1x3CQQ7DIAwEwPz/nRG0sQ0YFuFsOFTpaI5WyjdnVTVVyfnzl1JK+ZXO091H78NsArP3OQaA4f6QR3MvIu9azUxVRUSvq9UKAO4BPOS9FsmIYATJtdbe+weIvnCWudcnLwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"trainingpod",title:"trainingpod",src:"/waiops-tech-jam/static/57bed871b139d5dec9239581d3f0996a/76078/trainingpod.png",srcSet:["/waiops-tech-jam/static/57bed871b139d5dec9239581d3f0996a/7fc1e/trainingpod.png 288w","/waiops-tech-jam/static/57bed871b139d5dec9239581d3f0996a/a5df1/trainingpod.png 576w","/waiops-tech-jam/static/57bed871b139d5dec9239581d3f0996a/76078/trainingpod.png 1031w"],sizes:"(max-width: 1031px) 100vw, 1031px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Run training with algorithm related-events to learn temporal grouping and pattern policies from historic data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc delete pod trainer\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'oc run trainer -it --command=true --restart=Never --env=LICENSE=accept --image=cp.icr.io/cp/noi/ea-events-tooling:14.0.0-20220614134620BST --overrides=\'{"apiVersion":"v1", "spec":{"imagePullSecrets":[{"name":"noi-registry-secret"}]}}\' runTraining.sh -- -r evtmanager -a related-events\n')),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.13888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVQI15XLsQ7CMAwE0NiKnYuTCFEitUWMLUtZGMv/fxhKxEDHPt10p3NmCUAwVSgxuVMQxmh3HSw/crxGd+oO1IBbGS7ra93eW50rMoiIO+r4D7X8GlealEtS6PJc9s8+zRMzi4qI+E6OvPeqbf4CLlcF4E3vKOIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"TrainingSuccess",title:"TrainingSuccess",src:"/waiops-tech-jam/static/d72d0fa3cfb917020bace26619f905d6/3cbba/TrainingSuccess.png",srcSet:["/waiops-tech-jam/static/d72d0fa3cfb917020bace26619f905d6/7fc1e/TrainingSuccess.png 288w","/waiops-tech-jam/static/d72d0fa3cfb917020bace26619f905d6/a5df1/TrainingSuccess.png 576w","/waiops-tech-jam/static/d72d0fa3cfb917020bace26619f905d6/3cbba/TrainingSuccess.png 1152w","/waiops-tech-jam/static/d72d0fa3cfb917020bace26619f905d6/f44a6/TrainingSuccess.png 1721w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("hr",null),(0,i.kt)("h2",null,"10-5: Check policies created from learning"),(0,i.kt)("p",null,"Launch “Policies” using new UI URL.\n",(0,i.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"603px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB80lEQVQoz33S626bMBQHcF5gmhSwKTcbfOEWLsoKOKW5kGafGkBaiZakidRp7/8QE7CsUaXupyNLtnRk8P9IruvGcVyWZT4QQmRZJoSYzWa6rpsDXdcNw9CNfr0lEUIwxrZtD4vtOA7GeDwEAEAINU0btwgh0zStGxLnHEKVMp6kqa7rsiwrQBlBCAEAlmXNxdzzPFGIal0tHhdhEPgDyXEcCKHrejbGEEJ1AK8AAHeGnqRJLoooSShjjHN6LQkPPY5DTMMYLwRA+desAKXEbJ/PDw/lj/vseRrvomSsJoolSqkCACGEUU4Zi6ZT3w/UO3UymciKIn/90sTV5fz71/HQ1U1XN/u23bftS9tennfSunoSRbGpNt+326rarFbrxWIphCgGoij22fK03Lw9bc+r1bF87PKiy4uXvHgVD9LP46Vtm8PheH49n06nurdrBnVdv3TdalFmUbQs5uu5KO+/BYSElE4Zy+JYStMUWcgP/CiOXNf9kKRlWdi2KeeEUodSyhj3vLEY52NUECFEKUHIAuAa1N/HA4Zh+L7vXbk3JNvuX9vzvDAKgzC0LGtMeKSqqmmaH3remznnqqoO+XHfDwgh8IamaQihT5ujKOoHsP8d5nk+pfR2QkzTxBi7n5BkWYYQyoM+22H7PiSK8p/P/gO+poAabr7C/QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"LaunchPolicies",title:"LaunchPolicies",src:"/waiops-tech-jam/static/851772a0fdac3f12f2e81b5a76704d54/47915/LaunchPolicies.png",srcSet:["/waiops-tech-jam/static/851772a0fdac3f12f2e81b5a76704d54/7fc1e/LaunchPolicies.png 288w","/waiops-tech-jam/static/851772a0fdac3f12f2e81b5a76704d54/a5df1/LaunchPolicies.png 576w","/waiops-tech-jam/static/851772a0fdac3f12f2e81b5a76704d54/47915/LaunchPolicies.png 603w"],sizes:"(max-width: 603px) 100vw, 603px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)("p",null,"Filter policies for temporal patterns."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.65277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAx0lEQVQY003OO04DMRCA4T09J6CIREdFR+Aq1CEg1l7vBmE5Gz/mjeKNEF81U/yjGZxz4zjO8+y9d9fl6/Dh3w7BuzF03vvv0ymEEGNERGYGgFLKsiwDEQFAaw07YUpVP6OYiXVMpKpmRoTrujILEYmIqg6ttdK11mqtCDVe6BhVVW4N4jbkXNN53S5KNwDApcs5IyIAMAur/RHmLUakaZpCWH7OGtP1x1ucc04plVJqrQBg/yCAbrXZy+vzw+7x7v74tH83k19B9x1/NKfp7gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ManagePolicies TP",title:"ManagePolicies TP",src:"/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/3cbba/ManagePolicies_TP.png",srcSet:["/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/7fc1e/ManagePolicies_TP.png 288w","/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/a5df1/ManagePolicies_TP.png 576w","/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/3cbba/ManagePolicies_TP.png 1152w","/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/0b124/ManagePolicies_TP.png 1728w","/waiops-tech-jam/static/7de10dd06da9cc35753b3fee1c62ee0e/7bd75/ManagePolicies_TP.png 1842w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Check details of Temporal pattern policy by clicking “Preview Policy”"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.430555555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAtUlEQVQY043OsU7EMAwG4Lz+bbwC8w0svAEDA6oO3fEASIgmdp2SNrYbqSGc6kroxvtk2b892TGryPJraq3tDn+mteYensvhaQmUF2URKaXUzVpvrOu69z0Uo1pcAPQBYoxoAMD70AcMISBsKwAQESLGGInIe//d90AUf0aX85xSmkxKaZ7SMOYvEubMJudZjKpuVxXsLp+PR3x7d8zCIszbz8Jik62E927+g6oO5w//8uq70xValRrl2oADXQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"TP preview",title:"TP preview",src:"/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/3cbba/TP_preview.png",srcSet:["/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/7fc1e/TP_preview.png 288w","/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/a5df1/TP_preview.png 576w","/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/3cbba/TP_preview.png 1152w","/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/0b124/TP_preview.png 1728w","/waiops-tech-jam/static/2b43ea8c43f086769b37306ec3991cdd/52da3/TP_preview.png 1870w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJElEQVQoz3WR2Y7DIAxF8/+/18dZ+pBOSRq2ALGx2UahbaRRp0fGgodr+5ph/JmmSUip5nk2xvgn4Yl/z7BIqZTy3jvnQggAgJ2tczxfAYBBa31vaO3qOt6HGCMA3PWIGP8DEQdjjHNOSnk6nc7n78s4XsZRCDE9EW+43W7DYewqhNJ67xu27njP90t4oVt2D7Fz/qriYkGuqFzUjqRFE0iuaLcUqHkstdbW2n5aY07OheGopVcQiiZNGxARIcZSKnPilGqtFDNjrnmnlELEdvXDMYdZYTa8WEKI1BdSa005MXNrFWPWvpiQiR/i9RB77zEyYIKYUtrLp5RKJ+dca9kwLZaVY4zETDGS833sbQvW2vP5++vzw1pzfNJfAvTY9nis8BcYCTrQFEWPKQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"TP policyDetails",title:"TP policyDetails",src:"/waiops-tech-jam/static/50a292329d7bdcf7024f2f32cd699f17/3cbba/TP_policyDetails.png",srcSet:["/waiops-tech-jam/static/50a292329d7bdcf7024f2f32cd699f17/7fc1e/TP_policyDetails.png 288w","/waiops-tech-jam/static/50a292329d7bdcf7024f2f32cd699f17/a5df1/TP_policyDetails.png 576w","/waiops-tech-jam/static/50a292329d7bdcf7024f2f32cd699f17/3cbba/TP_policyDetails.png 1152w","/waiops-tech-jam/static/50a292329d7bdcf7024f2f32cd699f17/8d956/TP_policyDetails.png 1557w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Temporal pattern policies can be edited. "),(0,i.kt)("p",null,"For more information on Temporal Pattern Policy editing :\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=policies-editing"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=policies-editing")),(0,i.kt)("p",null,"Note: Policy Details UI is only availabel in new UI"),(0,i.kt)("h2",null,"10-6: Replay events"),(0,i.kt)("p",null,"Create pattern_events_live.sh script (as below)  that simulates a set of events into the ObjectServer for Location=‘WINNIPEG’. starttime  is EPOCH conversion for current time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\n\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('IdentifierX1','ADX-A', 'WIN-BLDG-01-FLOOR-01', 'A','RACK01-FAN07','FAN Failure reported for RACK01', 2, getdate,getdate, 40373,'EventId', 'WINNIPEG',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type ) values ('IdentifierX2','ADX-A', 'WIN-BLDG-01-FLOOR-01', 'B','RACK01','POWER Supply Failure reported for RACK01',  4, getdate + 5,getdate+5, 40373,'EventId', 'WINNIPEG',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('IdentifierX3','ADX-A', 'WIN-BLDG-01-FLOOR-01', 'C','RACK01-DEV03', 'DEVICE Failure on RACK01', 3, getdate + 6,getdate+6, 40373,'EventId', 'WINNIPEG',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('IdentifierX4','ADX-A', 'WIN-BLDG-01-FLOOR-01', 'C', 'RACK01-DEV02','DEVICE Failure on RACK01',3, getdate + 6,getdate+6, 40373,'EventId', 'WINNIPEG',1);\ngo\ninsert into alerts.status (Identifier, Manager, Node, AlertGroup, AlertKey, Summary, Severity, FirstOccurrence, LastOccurrence,Class,EventId, Location, Type) values ('IdentifierX5','ADX-A', 'WIN-BLDG-01-FLOOR-01', 'C', 'RACK01-DEV01','DEVICE Failure on RACK01', 3, getdate +6,getdate, 40373,'EventId', 'WINNIPEG',1);\n\ngo\nEOF\n\n")),(0,i.kt)("p",null,"Copy script to objectserver pod."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'cat pattern_events_live.sh | kubectl exec -i evtmanager-ncoprimary-0 -- sh -c "cat > /tmp/pattern_events_live.sh"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'oc exec -it evtmanager-ncoprimary-0 bash -- sh -c "chmod +x /tmp/pattern_events_live.sh"\n')),(0,i.kt)("p",null,"Replay Sample Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 bash -- /tmp/pattern_events_live.sh\n")),(0,i.kt)("p",null,"You will see output like this:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.527777777777775%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAg0lEQVQI143JQRLCIAwAQP7/NMfxA7UqR9tJAoGkhCo4cqo397pOVUXk/Z/WGgB473POvXd3naZlecYYEZGImBmJ1nUFACKKAzPnQUTmeT6dL7f7I6XkthxzYlXdDgAAEWFg/q6Z1VrNLIRgpZiZqrrddN9r/5UGEWHm1tqxRKSU8ho+QvXl2ZeCXdQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"TPReplayResult",title:"TPReplayResult",src:"/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/3cbba/TPReplayResult.png",srcSet:["/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/7fc1e/TPReplayResult.png 288w","/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/a5df1/TPReplayResult.png 576w","/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/3cbba/TPReplayResult.png 1152w","/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/0b124/TPReplayResult.png 1728w","/waiops-tech-jam/static/2fea9ca3ca04946f8dfe88de54931efc/5d938/TPReplayResult.png 1855w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"click on any dot in clock icon column to check details of temporal pattern."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABCElEQVQY022P627DIAxG8/4PuaZrl5BAE662CdhULJrUVjtChh+cz/ZgjAGA8Iv33lobYyQiRETqACIAnA8iBKQYARBSgmFZlNFGa62NWfullVLLsiilZqX0uu6m470/Molwa01EWhOuZTBaWefsH865eZ7HcZymabxep9tt+7qYx+M+6wgHlUaH9FpaRB5yzu0dRAwhIKL3PufMwpX5cv1Res+lHbXl0g9mHvJR5IVTjjEiorU2hCAitfL37b4sKwASHUcR5ibS5frROaW0bVtKyVrrvT83DIm2UEPqQ9XKTRrzfzIAWGsBwDl3du6JQLnK67dTLu19bADY9/2MOGUWzkiV8of8BOpNzid/0tEHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"TP Investigate",title:"TP Investigate",src:"/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/3cbba/TP_Investigate.png",srcSet:["/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/7fc1e/TP_Investigate.png 288w","/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/a5df1/TP_Investigate.png 576w","/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/3cbba/TP_Investigate.png 1152w","/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/0b124/TP_Investigate.png 1728w","/waiops-tech-jam/static/47b998129c2592959b50e965565fc934/875d1/TP_Investigate.png 1845w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"That completes the Temporal pattern section of the lab."))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-aiops-temporal-patterns-index-mdx-8a4f9edf0f35d4235f08.js.map