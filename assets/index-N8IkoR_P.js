import{a as t,c}from"./polished.esm-DHPXM_EY.js";const a=1.25,e={colors:{primary:"#e97462",secondary:"#370e4a",subtle:"#b3a7b7",light:"#f8f9fa",dark:"#0e080e",success:"#00af60",error:"#84213A",warning:"#e97462",info:"#00aeb2",background:"#f8f9fa"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},typeScale:a,fontFamily:{body:"'Inter Tight', sans-serif",heading:"'Inter Tight', sans-serif"},fontWeights:{light:300,normal:400,semibold:600,bold:700},fontSizes:["md","lg","xl","xxl","display"].reduce((r,s)=>{const o=Object.values(r).pop();return r[s]=`${parseFloat(o.replace("rem",""))*a}rem`,r},{sm:"0.8rem",default:"1rem"})},l={...e,colors:{...e.colors,primary:"#84213A",secondary:"#FF3465",info:"#54bac1",background:"#0B0E10",dark:t(.05,"#0B0E10"),subtle:c(.65,e.colors.subtle)}},n={default:e,smartrack:l};export{n as t};
