"use strict";var t={name:"GlobalAttrs",render:t=>t(),data:()=>({currentAttrs:[]}),watch:{$attrs:{immediate:!0,handler(){this.refreshAttributes()}}},beforeDestroy(){this.removeAttributes()},methods:{refreshAttributes(){this.removeAttributes(),Object.keys(this.$attrs).forEach((t=>{const e=this.$attrs[t];!1===e?document.documentElement.removeAttribute(t):void 0!==e&&document.documentElement.setAttribute(t,!0===e?"":e),this.currentAttrs.push(t)}))},removeAttributes(){this.currentAttrs.forEach((t=>{document.documentElement.removeAttribute(t)})),this.currentAttrs=[]}}};module.exports=t;
