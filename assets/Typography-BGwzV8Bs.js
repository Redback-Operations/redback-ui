import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as d}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";import{u as l}from"./styled-components.browser.esm-CoKU8m7y.js";import{t as p}from"./index-N8IkoR_P.js";import{R as x}from"./RedbackUiThemeProvider-D71Zj-Rh.js";import{A as m}from"./Alert-DAGigJL_.js";import{T as o}from"./Table-Dh1fEt5Y.js";import{T as i}from"./TruncatedText-ACFekBk1.js";import"./polished.esm-DHPXM_EY.js";const a=l.div`

	> p {
		text-align: right;
		margin-top: -1rem;
	}
`,c=()=>{const r=localStorage.getItem("ui-theme"),t=p[r];return e.jsxs(x,{theme:t,children:[e.jsxs(m,{type:"info",children:[e.jsxs("p",{children:["You are currently viewing these docs with Redback's ",e.jsx("strong",{children:r})," theme."]}),e.jsx("p",{children:"You can select a different theme in the toolbar at the top of the page."})]}),e.jsxs(a,{"data-testid":"TypographyDemo",children:[e.jsx("h2",{children:"Font families"}),e.jsx(o,{children:Object.entries(t.fontFamily).map(([s,n])=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{width:"85px"},children:e.jsx("strong",{children:s})}),e.jsx("td",{style:{width:"225px"},children:n}),e.jsx("td",{style:{fontFamily:n},children:e.jsx(i,{text:"The quick brown fox jumped over the lazy dog",lines:1})})]},s))}),e.jsx("hr",{}),e.jsx("h2",{children:"Font sizes"}),e.jsx(o,{children:Object.entries(t.fontSizes).map(([s,n])=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{width:"85px"},children:e.jsx("strong",{children:s})}),e.jsxs("td",{style:{width:"85px"},children:[parseFloat(n).toFixed(2),"rem"]}),e.jsx("td",{style:{fontSize:n},children:e.jsx(i,{text:"The quick brown fox jumped over the lazy dog",lines:1})})]},s))}),e.jsxs("p",{children:["Type scale: ",e.jsx("strong",{children:t.typeScale})]}),e.jsx("hr",{}),e.jsx("h2",{children:"Font weights"}),e.jsx(o,{children:Object.entries(t.fontWeights).map(([s,n])=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{width:"85px"},children:e.jsx("strong",{children:s})}),e.jsx("td",{style:{width:"85px"},children:n}),e.jsx("td",{style:{fontWeight:n},children:e.jsx(i,{text:"The quick brown fox jumped over the lazy dog",lines:1})})]},s))})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"TypographyDemo",props:{name:{required:!0,tsType:{name:"string"},description:""},theme:{required:!0,tsType:{name:"themes.default"},description:""}}};function h(r){const t={h1:"h1",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(c,{})]})}function z(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(h,{...r})}):h(r)}export{z as default};
