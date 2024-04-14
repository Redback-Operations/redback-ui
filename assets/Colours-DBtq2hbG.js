import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as c}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";import{u as n}from"./styled-components.browser.esm-CoKU8m7y.js";import{g as l,a as d,c as m}from"./polished.esm-DHPXM_EY.js";import{R as h}from"./RedbackUiThemeProvider-D71Zj-Rh.js";import{t as u}from"./index-CUhKrI82.js";import{A as g}from"./Alert-70_fx8x3.js";const x=n.div`
	background: ${e=>e.theme.colors.background};
	margin-bottom: ${e=>e.theme.spacing.xl};
`,$=n.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr); 
	grid-gap: ${e=>e.theme.spacing.md};
`,f=n.div`
	grid-column: ${e=>{switch(e.$color){case"background":return"span 12";case"primary":case"secondary":return"span 6";case"subtle":case"light":case"dark":return"span 4";default:return"span 3"}}};
			
	> div {
		background: ${e=>e.theme.colors[e.$color]};
		height: ${e=>{if(e.$color==="primary"||e.$color==="secondary")return"6rem";if(e.$color!=="background")return"4rem"}};
		/* eslint-enable indent */
		border: ${e=>{const t=l(e.theme.colors[e.$color])<.5;return e.theme.colors[e.$color]===e.theme.colors.background&&e.$color!=="background"?`1px solid ${t?d(.3,e.theme.colors[e.$color]):m(.2,e.theme.colors[e.$color])}`:"1px solid transparent"}};
		/* eslint-enable indent */
	}
	
	> span {
		display: block;
		text-align: right;
		font-size: ${e=>e.theme.fontSizes.default};
		padding-top: ${e=>e.theme.spacing.xs};
	}
`,i=()=>{const e=localStorage.getItem("ui-theme"),t=u[e];return o.jsxs(h,{theme:t,children:[o.jsxs(g,{type:"info",children:[o.jsxs("p",{children:["You are currently viewing these docs with Redback's ",o.jsx("strong",{children:e})," theme."]}),o.jsx("p",{children:"You can select a different theme in the toolbar at the top of the page."})]}),o.jsx(x,{"data-testid":"Colour Docs",children:o.jsx($,{children:Object.entries(t.colors).map(([r,a])=>o.jsxs(f,{$color:r,children:[o.jsx("div",{}),o.jsxs("span",{children:[r," ",o.jsx("strong",{children:a})]})]},r))})})]})};i.__docgenInfo={description:"",methods:[],displayName:"ColourDemo"};function s(e){const t={h1:"h1",...c(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"colours",children:"Colours"}),`
`,o.jsx(i,{})]})}function w(e={}){const{wrapper:t}={...c(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(s,{...e})}):s(e)}export{w as default};
