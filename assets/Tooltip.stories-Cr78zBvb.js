import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as l}from"./styled-components.browser.esm-Bk0Pcr2r.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const e=l.div`
  position: relative;
  display: inline-block;
`,c=l.div`
  visibility: hidden;
  width: 120px;
  background-color: ${({theme:o})=>{var t;return((t=o==null?void 0:o.colors)==null?void 0:t.tooltipBg)||"#555"}};
  color: ${({theme:o})=>{var t;return((t=o==null?void 0:o.colors)==null?void 0:t.tooltipText)||"#fff"}};
  text-align: center;
  padding: ${({theme:o})=>{var t;return((t=o==null?void 0:o.spacing)==null?void 0:t.xs)||"5px"}};
  border-radius: ${({theme:o})=>{var t;return((t=o==null?void 0:o.borderRadius)==null?void 0:t.sm)||"6px"}};
  position: absolute;
  z-index: 1;
  bottom: 20%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  ${e}:hover & {
    visibility: visible;
    opacity: 1;
  }
`,r=({text:o,tooltip:t})=>s.jsxs(e,{children:[" ",o," ",s.jsx(c,{children:t})," "]});try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}}}}}catch{}const y={title:"Components/Tooltip",component:r},d={text:"Hover over me",tooltip:"This is a tooltip"},i={args:{...d}};var a,n,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(p=(n=i.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const _=["Default"];export{i as Default,_ as __namedExportsOrder,y as default};
