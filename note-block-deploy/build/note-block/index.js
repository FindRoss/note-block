(()=>{"use strict";var e,l={120:()=>{const e=window.wp.blocks,l=window.wp.blockEditor,t=window.wp.components,s=[{value:"important",label:"Important",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c8c807" class="bi bi-lightning-fill" viewBox="0 0 16 16"><path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"></path></svg>'},{value:"note",label:"Note",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c8c807" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"></path></svg>'},{value:"fact",label:"Fact",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#288000" class="bi bi-question-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path></svg>'},{value:"warning",label:"Warning",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="#CD5C5C" class="bi bi-exclamation-triangle-fill" viewBox="0 0 21 18"><path d="M0.987894 18C0.804561 18 0.637894 17.9543 0.487894 17.863C0.337894 17.7717 0.221228 17.6507 0.137894 17.5C0.054561 17.3493 0.00889441 17.1867 0.000894411 17.012C-0.00710559 16.8373 0.038561 16.6667 0.137894 16.5L9.38789 0.5C9.48789 0.333333 9.61723 0.208333 9.77589 0.125C9.93456 0.0416667 10.0969 0 10.2629 0C10.4289 0 10.5916 0.0416667 10.7509 0.125C10.9102 0.208333 11.0392 0.333333 11.1379 0.5L20.3879 16.5C20.4879 16.6667 20.5339 16.8377 20.5259 17.013C20.5179 17.1883 20.4719 17.3507 20.3879 17.5C20.3039 17.6493 20.1872 17.7703 20.0379 17.863C19.8886 17.9557 19.7219 18.0013 19.5379 18H0.987894ZM10.2629 15C10.5462 15 10.7839 14.904 10.9759 14.712C11.1679 14.52 11.2636 14.2827 11.2629 14C11.2622 13.7173 11.1662 13.48 10.9749 13.288C10.7836 13.096 10.5462 13 10.2629 13C9.97956 13 9.74223 13.096 9.55089 13.288C9.35956 13.48 9.26356 13.7173 9.26289 14C9.26223 14.2827 9.35823 14.5203 9.55089 14.713C9.74356 14.9057 9.98089 15.0013 10.2629 15ZM10.2629 12C10.5462 12 10.7839 11.904 10.9759 11.712C11.1679 11.52 11.2636 11.2827 11.2629 11V8C11.2629 7.71667 11.1669 7.47933 10.9749 7.288C10.7829 7.09667 10.5456 7.00067 10.2629 7C9.98023 6.99933 9.74289 7.09533 9.55089 7.288C9.35889 7.48067 9.26289 7.718 9.26289 8V11C9.26289 11.2833 9.35889 11.521 9.55089 11.713C9.74289 11.905 9.98023 12.0007 10.2629 12Z"/></svg>'},{value:"tip",label:"Tip",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="#D8D530"><path d="M9 14.275L4.85 16.775C4.66667 16.8917 4.475 16.9417 4.275 16.925C4.075 16.9083 3.9 16.8417 3.75 16.725C3.6 16.6083 3.48333 16.4627 3.4 16.288C3.31667 16.1133 3.3 15.9173 3.35 15.7L4.45 10.975L0.775001 7.8C0.608334 7.65 0.504334 7.479 0.463001 7.287C0.421668 7.095 0.434001 6.90767 0.500001 6.725C0.566001 6.54233 0.666001 6.39233 0.800001 6.275C0.934001 6.15767 1.11733 6.08267 1.35 6.05L6.2 5.625L8.075 1.175C8.15833 0.975 8.28767 0.825 8.463 0.725C8.63833 0.625 8.81733 0.575 9 0.575C9.18267 0.575 9.36167 0.625 9.537 0.725C9.71233 0.825 9.84167 0.975 9.925 1.175L11.8 5.625L16.65 6.05C16.8833 6.08333 17.0667 6.15833 17.2 6.275C17.3333 6.39167 17.4333 6.54167 17.5 6.725C17.5667 6.90833 17.5793 7.096 17.538 7.288C17.4967 7.48 17.3923 7.65067 17.225 7.8L13.55 10.975L14.65 15.7C14.7 15.9167 14.6833 16.1127 14.6 16.288C14.5167 16.4633 14.4 16.609 14.25 16.725C14.1 16.841 13.925 16.9077 13.725 16.925C13.525 16.9423 13.3333 16.8923 13.15 16.775L9 14.275Z"/></svg>'}],a=window.ReactJSXRuntime,i=JSON.parse('{"UU":"create-block/note-block"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const{text:n,selectedOption:o}=e,c=s.find((e=>e.value===o))||s[0];return(0,a.jsx)("div",{...(0,l.useBlockProps)(),children:(0,a.jsxs)("aside",{class:"note-block",children:[(0,a.jsxs)("div",{class:"note-block__title",children:[(0,a.jsx)("span",{class:"icon",dangerouslySetInnerHTML:{__html:c.svg}}),(0,a.jsx)(t.SelectControl,{value:o,options:s.map((e=>({value:e.value,label:e.label}))),onChange:e=>i({selectedOption:e})})]}),(0,a.jsx)("div",{class:"note-block__content",children:(0,a.jsx)(l.RichText,{tagName:"p",value:n,onChange:e=>i({text:e}),placeholder:"Type here and add links...",allowedFormats:["core/bold","core/italic","core/link"]})})]})})},save:function({attributes:e}){const{text:t,selectedOption:i}=e;if(!t)return null;const n=s.find((e=>e.value===i))||s[0];return(0,a.jsx)("div",{...l.useBlockProps.save(),children:(0,a.jsxs)("aside",{class:"note-block",children:[(0,a.jsxs)("div",{class:"note-block__title",children:[(0,a.jsx)("span",{class:"icon",dangerouslySetInnerHTML:{__html:n.svg}}),(0,a.jsx)("span",{class:"title",children:n.label})]}),(0,a.jsx)("div",{class:"note-block__content",children:(0,a.jsx)(l.RichText.Content,{tagName:"p",value:t})})]})})}})}},t={};function s(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return l[e](i,i.exports,s),i.exports}s.m=l,e=[],s.O=(l,t,a,i)=>{if(!t){var n=1/0;for(h=0;h<e.length;h++){for(var[t,a,i]=e[h],o=!0,c=0;c<t.length;c++)(!1&i||n>=i)&&Object.keys(s.O).every((e=>s.O[e](t[c])))?t.splice(c--,1):(o=!1,i<n&&(n=i));if(o){e.splice(h--,1);var r=a();void 0!==r&&(l=r)}}return l}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[t,a,i]},s.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={778:0,262:0};s.O.j=l=>0===e[l];var l=(l,t)=>{var a,i,[n,o,c]=t,r=0;if(n.some((l=>0!==e[l]))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var h=c(s)}for(l&&l(t);r<n.length;r++)i=n[r],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(h)},t=globalThis.webpackChunknote_block=globalThis.webpackChunknote_block||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var a=s.O(void 0,[262],(()=>s(120)));a=s.O(a)})();