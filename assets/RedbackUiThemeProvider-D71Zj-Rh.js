import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{u as i,d as r,t as s}from"./styled-components.browser.esm-CoKU8m7y.js";import{r as d,d as n}from"./polished.esm-DHPXM_EY.js";const h=i.div`
	width: 100%;
	height: 100%;
	background: ${e=>e.theme.colors.background};
	color: ${e=>d(e.theme.colors.background)};
`,a=r`
	body {
		margin: 0;
		padding: 0;
		font-family: ${e=>e.theme.fontFamily.body};
		font-size: ${e=>e.theme.fontSizes.default};
		font-weight: ${e=>e.theme.fontWeights.light};
		line-height: 1.4;
	}
	
	h1, h2, h3, h4, h5, h6 {
		line-height: 1.2;
		
		&:first-child {
			margin-top: 0;
		}
	}
	
	h1 {
		font-size: ${e=>e.theme.fontSizes.xl};
	}
	
	h2 {
		font-size: ${e=>e.theme.fontSizes.lg};
	}
	
	h3 {
		font-size: ${e=>e.theme.fontSizes.md};
	}
	
	strong {
		font-weight: ${e=>e.theme.fontWeights.semibold};
	}
	
	a {
		color: ${e=>e.theme.colors.dark};
		text-decoration: underline;
		text-decoration-color: ${e=>n(e.theme.colors.subtle,.65)};
	}
`,m=({theme:e,children:o})=>t.jsxs(s,{theme:e,children:[t.jsx(a,{}),t.jsx(h,{id:"redback-ui","data-testid":"redback-ui.wrapper",children:o})]});m.__docgenInfo={description:"",methods:[],displayName:"RedbackUiThemeProvider",props:{theme:{required:!0,tsType:{name:"themes.default"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{m as R};
