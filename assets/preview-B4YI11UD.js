import{j as o}from"./jsx-runtime-CKrituN3.js";import{ai as d,aj as m,ak as p,al as u,am as h,an as f,ao as y,ap as g}from"./index-av9VnBMj.js";import{R as c}from"./RedbackUiThemeProvider-CI6FpJXa.js";import{t as a}from"./index-CWVQgxeo.js";import"./Alert-CkOVO3-e.js";import"./Button-CL61a4B0.js";import"./Label-DilwbW6F.js";import"./LinkButton-su_FFISr.js";import"./Table-Be6O95aW.js";import"./TruncatedText-1Xq2JJo_.js";import"./Modal-DNLLfeiS.js";import{r as j}from"./index-CBqU2yxZ.js";import"./iframe-BmTil_4X.js";import"../sb-preview/runtime.js";import"./index-CbwENYX-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./polished.esm-CW-cxXBJ.js";import"./hasIn-CZcrsiw3.js";import"./_getPrototype-DHgE_lbf.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-Bk0Pcr2r.js";import"./smartrack-C9kahsyy.js";import"./Button.style-DXkfDKIy.js";const b=(s,t)=>o.jsx(c,{theme:a[t.globals.theme],children:o.jsx(s,{})}),{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,O="storybook/a11y/manual",k=(s,t)=>{const e=x.getChannel();return j.useEffect(()=>{const i=r=>{r.passes.length===0&&r.violations.length===0&&r.incomplete.length===0&&e.emit(O,{storyId:t.id})};return e.on("storybook/a11y/result",i),()=>{e.off("storybook/a11y/result",i)}},[e,t.id]),o.jsx(s,{...t})},z={globalTypes:{theme:{defaultValue:"default",toolbar:{name:"Theme",title:"Theme",icon:"paintbrush",items:Object.keys(a),dynamicTitle:!0}}},decorators:[b,k],parameters:{layout:"centered",backgrounds:{disable:!0},a11y:{element:"#storybook-root",config:{rules:[{id:"color-contrast",enabled:!0}]},options:{}},options:{storySort:(s,t)=>{const e=["About","Usage","Contributing"];if(e.includes(s.title)&&e.includes(t.title))return e.indexOf(s.title)-e.indexOf(t.title);const i=["Design Tokens","Components"];if(i.some(r=>s.title.startsWith(r)&&i.some(n=>t.title.startsWith(n)))){const r=i.find(l=>s.title.startsWith(l)),n=i.find(l=>t.title.startsWith(l));return i.indexOf(r)-i.indexOf(n)}return s.title===t.title?0:s.id.localeCompare(t.id,void 0,{numeric:!0})}},docs:{container:({children:s,context:t})=>{var i,r,n;const e=((n=(r=(i=t.channel.data.globalsUpdated)==null?void 0:i[0])==null?void 0:r.globals)==null?void 0:n.theme)??t.channel.data.setGlobals[0].globals.theme??"default";return Object.keys(a).includes(e)&&localStorage.setItem("ui-theme",e),o.jsx(c,{theme:a[e],children:o.jsx(d,{context:t,children:o.jsx(m,{children:s})})})},page:()=>o.jsxs(m,{children:[o.jsx(p,{}),o.jsx(u,{}),o.jsx(h,{}),o.jsx(f,{}),o.jsx(y,{}),o.jsx(g,{includePrimary:!1,title:"Variations"})]})}},tags:["autodocs"]};export{z as default};
