import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{r as l}from"./index-BBkUAzwr.js";import{u as P}from"./styled-components.browser.esm-CoKU8m7y.js";const R=P.div`
    .slider-container {
        position: relative;
        width: 100%;
        max-width: ${e=>e.size==="small"?"400px":"800px"};
        height: ${e=>e.size==="small"?"250px":"500px"};
        margin: 0 auto;
        overflow: hidden;
    }

    .slider-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 10/6;
        display: block;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .slider-button {
        all: unset;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0.8rem;
        cursor: pointer;
        transition: background-color 100ms ease-in-out, transform 100ms ease; /* Added transform transition */
    }

    .slider-button:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    .slider-button > * {
        stroke: white;
        width: 2rem;
        height: 2rem;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button {
        all: unset;
        display: block;
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        transition: scale 100ms ease-in-out;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button:hover {
        scale: 1.2;
    }

    .slider-index-button > * {
        stroke: white;
        height: 100%;
        width: 100%;
    }

    .turn-horizontal {
        height: ${e=>e.size==="small"?"250px":"500px"};
        transition: transform 0.5s ease;
        display: flex;
    }
`;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=(...e)=>e.filter((t,s,o)=>!!t&&o.indexOf(t)===s).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:c="",children:i,iconNode:a,...n},B)=>l.createElement("svg",{ref:B,...T,width:t,height:t,stroke:e,strokeWidth:o?Number(s)*24/Number(t):s,className:A("lucide",c),...n},[...a.map(([D,E])=>l.createElement(D,E)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const s=l.forwardRef(({className:o,...c},i)=>l.createElement(q,{ref:i,iconNode:t,className:A(`lucide-${_(e)}`,o),...c}));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=u("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=u("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=u("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=u("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),L=({images:e,size:t})=>{const[s,o]=l.useState(0),c=()=>{const a=(s-1+e.length)%e.length;o(a)},i=()=>{const a=(s+1)%e.length;o(a)};return r.jsx(R,{"data-testid":"ImageSlider",size:t,children:r.jsxs("div",{className:"slider-container",children:[r.jsx("div",{className:"turn-horizontal",style:{width:`${100*e.length}%`,transform:`translateX(-${s*(100/e.length)}%)`},children:e.map((a,n)=>r.jsx("img",{src:a,alt:`Slide ${n}`,className:"slider-image",style:{width:`${100/e.length}%`}},n))}),r.jsx("button",{onClick:c,className:"slider-button",style:{left:0},children:r.jsx(F,{})}),r.jsx("button",{onClick:i,className:"slider-button",style:{right:0},children:r.jsx(M,{})}),r.jsx("div",{style:{position:"absolute",bottom:"1.5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:e.map((a,n)=>r.jsxs("button",{className:"slider-index-button",onClick:()=>o(n),children:[" ",n===s?r.jsx(O,{}):r.jsx(V,{})," "]},n))})]})})};L.__docgenInfo={description:"",methods:[],displayName:"ImageSlider",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},size:{required:!0,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:""}}};const h=["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],X={title:"Components/ImageSlider",component:L},x={},b={parameters:{controls:{disable:!0},actions:{disable:!0}}},d={args:{...x,images:h,size:"large"},tags:["excludeFromSidebar"]},m={args:{...x,images:h,size:"large"},...b},p={args:{...x,images:h,size:"large"},...b},g={args:{...x,images:h,size:"small"},...b};var f,w,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  tags: ['excludeFromSidebar']
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var k,v,j;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,z,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var I,$,N;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'small'
  },
  ...disableControls
}`,...(N=($=g.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const Z=["Demo","Default","Large","Small"];export{m as Default,d as Demo,p as Large,g as Small,Z as __namedExportsOrder,X as default};
