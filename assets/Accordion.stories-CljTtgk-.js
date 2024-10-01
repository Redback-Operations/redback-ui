import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{u as r}from"./styled-components.browser.esm-Bk0Pcr2r.js";import"./_commonjsHelpers-BosuxZz1.js";const g=r.div`
	width: 100%;
`,f=r.div`
	border: 1px solid ${({theme:o})=>o.colors.border||"#ccc"};
	margin-bottom: ${({theme:o})=>o.spacing.xs||"5px"};
`,x=r.div`
	background-color: ${({theme:o})=>o.colors.backgroundAlt||"#f1f1f1"};
	padding: ${({theme:o})=>o.spacing.sm||"10px"};
	cursor: pointer;
`,_=r.div`
	padding: ${({theme:o})=>o.spacing.sm||"10px"};
	display: none;

	&.open {
		display: block;
	}
`,s=({items:o})=>{const[i,l]=u.useState(null),m=t=>{l(t===i?null:t)};return e.jsx(g,{children:o.map((t,c)=>e.jsxs(f,{children:[e.jsx(x,{onClick:()=>m(c),children:t.title}),e.jsx(_,{className:i===c?"open":"",children:t.content})]},c))})};try{s.displayName="Accordion",s.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ title: string; content: ReactNode; }[]"}}}}}catch{}const C={title:"Components/Accordion",component:s},A={items:[{title:"Section 1",content:"Content for section 1"},{title:"Section 2",content:"Content for section 2"}]},n={args:{...A}};var a,d,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,C as default};
