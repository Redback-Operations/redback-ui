import{j as $}from"./jsx-runtime-DRTy3Uxn.js";import{u as v}from"./styled-components.browser.esm-CoKU8m7y.js";import{r as E}from"./polished.esm-DHPXM_EY.js";import"./index-BBkUAzwr.js";const _=v.span`
	display: inline-block;
	background: ${e=>e.theme.colors[e.type]};
	color: ${e=>E(e.theme.colors[e.type])};
	font-size: ${e=>e.theme.fontSizes.sm};
	padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
	line-height: 1;
	text-transform: uppercase;
	font-weight: ${e=>e.theme.fontWeights.semibold};
`,L=({type:e,text:P})=>$.jsx(_,{"data-testid":"Label",type:e,children:P});L.__docgenInfo={description:"",methods:[],displayName:"Label",props:{type:{required:!0,tsType:{name:"union",raw:"'info' | 'warning' | 'success' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};const q={title:"Components/Label",component:L},r={type:"info",text:"Label"},c={parameters:{controls:{disable:!0},actions:{disable:!0}}},s={args:{...r,type:"info"},tags:["excludeFromSidebar"]},a={args:{...r,type:"info"},...c},o={args:{...r,type:"warning"},...c},t={args:{...r,type:"success"},...c},n={args:{...r,type:"error"},...c};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    type: 'info'
  },
  tags: ['excludeFromSidebar']
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    type: 'info'
  },
  ...disableControls
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    type: 'warning'
  },
  ...disableControls
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,h,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    type: 'success'
  },
  ...disableControls
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,C,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    type: 'error'
  },
  ...disableControls
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const z=["Demo","Info","Warning","Success","Error"];export{s as Demo,n as Error,a as Info,t as Success,o as Warning,z as __namedExportsOrder,q as default};
