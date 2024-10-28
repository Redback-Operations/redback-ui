import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as i}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{a as r}from"./chunk-454WOBUV-DWuJqIWT.js";import{t as f}from"./types-3IBMpfJl.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-CWVQgxeo.js";import"./smartrack-C9kahsyy.js";import"./polished.esm-CW-cxXBJ.js";import"./hasIn-CZcrsiw3.js";import"./_getPrototype-DHgE_lbf.js";import"./isPlainObject-BhR8C-EB.js";const C=i.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors[e.$color]};
  padding: ${e=>e.theme.spacing.md};
  border-bottom: 1px solid ${e=>e.theme.colors.subtle};
  justify-content: space-between;
`,S=i.a`
  color: ${e=>e.theme.colors.dark};
  margin: 0 ${e=>e.theme.spacing.sm};
  text-decoration: none;
  font-size: ${e=>e.theme.fontSizes.default};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.sm};
  }
`,v=i.div`
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,j=i.img`
  width: 40px;
  height: 40px;
  margin-right: ${e=>e.theme.spacing.md};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,s=({items:e,color:x="primary"})=>o.jsxs(C,{$color:x,children:[o.jsx(j,{src:"/icon.svg",alt:"Menu Icon"}),o.jsx(v,{"aria-label":"Toggle menu",children:"☰"}),o.jsx("nav",{children:o.jsx("ul",{children:e.map((c,y)=>o.jsx("li",{children:o.jsx(S,{href:c.link,onClick:c.onClick,children:c.label})},y))})})]});try{s.displayName="MenuBar",s.__docgenInfo={description:"",displayName:"MenuBar",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuBarItem[]"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"string | number | symbol"}}}}}catch{}const O={title:"Components/MenuBar",component:s,argTypes:{color:{control:"select",options:Object.keys(f)}},args:{color:"primary",items:[{label:"Home",link:"/",onClick:r("Home clicked")},{label:"About",link:"/about",onClick:r("About clicked")},{label:"Contact",link:"/contact",onClick:r("Contact clicked")}]}},t={args:{color:"primary"}},n={args:{color:"secondary"}},a={args:{items:[{label:"Services",link:"/services",onClick:r("Services clicked")},{label:"Blog",link:"/blog",onClick:r("Blog clicked")}]}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,k,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Services',
      link: '/services',
      onClick: action('Services clicked')
    }, {
      label: 'Blog',
      link: '/blog',
      onClick: action('Blog clicked')
    }]
  }
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const T=["Default","Secondary","WithCustomItems"];export{t as Default,n as Secondary,a as WithCustomItems,T as __namedExportsOrder,O as default};
