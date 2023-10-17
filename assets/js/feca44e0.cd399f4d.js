(self.webpackChunksushii_docs=self.webpackChunksushii_docs||[]).push([[300],{9103:function(e,t,a){var n={"./discord-action-row_19.entry.js":[3577,577]};function s(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return a.e(t[1]).then((function(){return a(s)}))}s.keys=function(){return Object.keys(n)},s.id=9103,e.exports=s},3374:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),o=a(8074),r=["components"],d={sidebar_position:2},m="Usage",l={unversionedId:"moderation/usage",id:"moderation/usage",isDocsHomePage:!1,title:"Usage",description:"DiscordMessages,",source:"@site/docs/moderation/02-usage.mdx",sourceDirName:"moderation",slug:"/moderation/usage",permalink:"/moderation/usage",editUrl:"https://github.com/sushiibot/docs/edit/main/docs/moderation/02-usage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Setup",permalink:"/moderation/setup"},next:{title:"General",permalink:"/commands/general"}},u=[{value:"Basic commands",id:"basic-commands",children:[],level:2},{value:"User History",id:"user-history",children:[],level:2},{value:"Lookup",id:"lookup",children:[],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"basic-commands"},"Basic commands"),(0,i.kt)("p",null,"To get started, the basic commands are as you might expect. You can ban, warn,\nand mute one or multiple members. Just pass more mentions or IDs and make sure\nyour (optional) reason is after them! IDs and mentions can both be\ninterchangably used."),(0,i.kt)(o.dZ,{mdxType:"DiscordMessages"},(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-ban ",(0,i.kt)(o.Hz,{mdxType:"DiscordMention"},"user")," trolling"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","embed-title":"Attempted to ban 1 users",mdxType:"DiscordEmbed"},"\ud83d\udd28 user#0000 (890123456789010) banned.",(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",mdxType:"DiscordEmbedField"},"trolling")))),(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-ban 890123456789010 890123456789011 890123456789012 890123456789013 raid"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","embed-title":"Attempted to ban 4 users",mdxType:"DiscordEmbed"},"\ud83d\udd28 user#0000 (890123456789010) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0001 (890123456789011) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0002 (890123456789012) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0003 (890123456789013) banned.",(0,i.kt)("br",null),(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",mdxType:"DiscordEmbedField"},"raid"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Ban, mute, warn, and note commands all work the same. The only difference is for\nmutes you can also add a duration in the reason to make the mute timed. This\nwill tell sushii to automatically unmute them after the given duration."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mute and warn commands will by default DM the user the reason (and duration for\nmutes). You can disable this for mutes in settings if you do not want sushii to\nDM the targeted user. If you have some information related to a user you only\nwant other moderators to see and to have it show up in their ",(0,i.kt)("inlineCode",{parentName:"p"},"history"),", you can\nuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," command."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ban")," command does ",(0,i.kt)("strong",{parentName:"p"},"not")," delete any messages. In order to ban and delete\nmessages, use the native Discord ban menu then set the reason afterwards. This\nalso allows for flexibility and speed when there is the urgent need to remove\na user and their messages."))),(0,i.kt)("p",null,"If you ban, mute, or warn a user without an initial reason, or if you use\nDiscord's native ban menu, you can set the ban reason. You can either use the\ncase number which you can find in the moderation log, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),". To set\nmultiple latest case reasons, include the number of cases as shown below."),(0,i.kt)(o.dZ,{mdxType:"DiscordMessages"},(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-reason latest trolling"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","embed-title":"Finished updating 1 case",mdxType:"DiscordEmbed"},(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",mdxType:"DiscordEmbedField"},"trolling")))),(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-reason latest~4 raid"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","embed-title":"Finished updating 4 cases",mdxType:"DiscordEmbed"},(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",mdxType:"DiscordEmbedField"},"raid"))))),(0,i.kt)("h2",{id:"user-history"},"User History"),(0,i.kt)("p",null,"Wondering if a member is a repeating troublemaker? Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," command to\nsee all past moderator actions on them."),(0,i.kt)(o.dZ,{mdxType:"DiscordMessages"},(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-history 890123456789010"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","embed-title":"Attempted to ban 4 users",mdxType:"DiscordEmbed"},"\ud83d\udd28 user#0000 (890123456789010) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0001 (890123456789011) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0002 (890123456789012) banned.",(0,i.kt)("br",null),"\ud83d\udd28 user#0003 (890123456789013) banned.",(0,i.kt)("br",null),(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",mdxType:"DiscordEmbedField"},"raid"))))),(0,i.kt)("h2",{id:"lookup"},"Lookup"),(0,i.kt)("p",null,"Have a new member that is suspicious? Look up their ban history across all\nservers sushii is in."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"lookup")," command is ",(0,i.kt)("strong",{parentName:"p"},"opt-in")," only. Sushii will not share any of your\nserver details unless you opt-in to sharing, which will also allow you to see\nother servers that have opted in. You can still use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lookup")," command without\nopting into detail sharing, but information will be limited."))),(0,i.kt)("p",null,"Some servers may have icons to differentiate between their statuses. Servers are\nalways ordered by highest server members to lowest to determine how much\nconsideration you should put into certain ban reasons. Servers with low member\ncounts are hidden to prevent abuse."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Icon"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83e\udded"),(0,i.kt)("td",{parentName:"tr",align:null},"Server is on Discovery")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:"https://cdn.discordapp.com/emojis/856045536687947796.png?size=24"})),(0,i.kt)("td",{parentName:"tr",align:null},"Server is partnered")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:"https://cdn.discordapp.com/emojis/856045537236353024.png?size=24"})),(0,i.kt)("td",{parentName:"tr",align:null},"Server is verified")))),(0,i.kt)(o.dZ,{mdxType:"DiscordMessages"},(0,i.kt)(o.kK,{author:"moderator",mdxType:"DiscordMessage"},"-lookup 890123456789010"),(0,i.kt)(o.kK,{bot:!0,author:"sushii",avatar:"/img/sushii_avatar.png",mdxType:"DiscordMessage"},(0,i.kt)(o._h,{slot:"embeds","author-name":"user#1234","embed-title":"3 bans found",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"https://cdn.discordapp.com/emojis/856045536687947796.png?size=24"}),"\ud83e\udded Cats (123482987234) (5 months ago): trolling",(0,i.kt)("br",null),"Server (19824723948234) (5 months ago): raiding",(0,i.kt)("br",null),"another server (80865141238764) (5 months ago)",(0,i.kt)(o.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"User Info",mdxType:"DiscordEmbedField"},"Account created at August 23, 2020 7:44 PM (a year ago)"))))))}c.isMDXComponent=!0}}]);