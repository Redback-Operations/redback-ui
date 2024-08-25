import{j as i}from"./jsx-runtime-Bxcv0yjW.js";import{u as n}from"./styled-components.browser.esm-DnUtS8XV.js";const a=n.span`
	display: -webkit-box; // required for line clamping to work
	-webkit-box-orient: vertical; // required for line clamping to work
	-webkit-line-clamp: ${e=>e.lines};
	overflow: hidden;
	text-overflow: ellipsis;
`,t=({lines:e,text:r})=>i.jsx(a,{"data-testid":"TruncatedText",lines:e,children:r});try{t.displayName="TruncatedText",t.__docgenInfo={description:"",displayName:"TruncatedText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"number"}}}}}catch{}export{t as T};
