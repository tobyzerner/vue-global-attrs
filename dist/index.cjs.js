"use strict";var index={name:"GlobalAttrs",render:t=>t(),data:()=>({currentAttrs:[]}),watch:{$attrs(){this.refreshAttributes()}},beforeDestroy(){this.removeAttributes()},methods:{refreshAttributes(){this.removeAttributes(),Object.keys(this.$attrs).forEach(t=>{document.documentElement.setAttribute(t,this.$attrs[t]),this.currentAttrs.push(t)})},removeAttributes(){this.currentAttrs.forEach(t=>{document.documentElement.removeAttribute(t)}),this.currentAttrs=[]}}};module.exports=index;
