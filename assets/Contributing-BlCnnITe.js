import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as r}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"contributing-to-redback-ui",children:"Contributing to Redback UI"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#prerequisites",children:"Prerequisites"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getting-started",children:"Getting started"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#creating-a-new-component",children:"Creating a new component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#working-with-documentation-pages",children:"Working with documentation pages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#submitting-your-change",children:"Submitting your change"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#useful-links",children:"Useful links"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://git-scm.com/downloads",rel:"nofollow",children:"Git"})," installed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/en/download/current",rel:"nofollow",children:"Node.js"})," installed"]}),`
`,e.jsx(n.li,{children:"IDE or editor of choice (e.g., WebStorm, VS Code)"}),`
`,e.jsx(n.li,{children:"Terminal of choice (e.g., Git Bash, WSL, PowerShell, Command Prompt, MacOS Terminal)"}),`
`,e.jsx(n.li,{children:"Web browser"}),`
`]}),`
`,e.jsx(n.h3,{id:"recommended",children:"Recommended"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["React Dev Tools browser extension for ",e.jsx(n.a,{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",rel:"nofollow",children:"Chrome"}),", ",e.jsx(n.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/",rel:"nofollow",children:"Firefox"}),", or ",e.jsx(n.a,{href:"https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil",rel:"nofollow",children:"Edge"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"optional",children:"Optional"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Git GUI such as GitKraken, SourceTree, GitHub Desktop (if you prefer this over working only with terminal commands)"}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Clone the repository to your local machine",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone https://github.com/Redback-Operations/redback-ui.git
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Create a branch for your work, following the Capstone ",e.jsx(n.a,{href:"https://verdant-raindrop-f3e404.netlify.app/processes/quality-assurance/git-contributions-guide/#branching-guidelines",rel:"nofollow",children:"Branching Guidelines"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git branch <branch-name>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Check out your branch",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git checkout <branch-name>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Open your terminal and navigate to the project directory",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd path/to/redback-ui
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Install the project dependencies",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Start Storybook and see the components and docs, including your changes, in your browser",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run storybook
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"creating-a-new-component",children:"Creating a new component"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/generate-react-cli",rel:"nofollow",children:"generate-react-cli"})," is set up to generate the boilerplate code required for a new component using our pre-defined templates. To create a new component, run the following command in your terminal, replacing ",e.jsx(n.code,{children:"ComponentName"})," with the name of your component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx generate-react-cli component ComponentName
`})}),`
`,e.jsxs(n.p,{children:["A new folder named with your component name will be created in the ",e.jsx(n.code,{children:"src/components"})," directory, containing the following files:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ComponentName.tsx"}),": the main React component file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ComponentName.styled.ts"}),": where styles are defined, using ",e.jsx(n.a,{href:"https://styled-components.com/",rel:"nofollow",children:"styled-components"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ComponentName.stories.tsx"}),": the ",e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})," file used to see, test, and document the component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ComponentName.test.tsx"}),": the unit test file. A basic example is included. Please add further tests as relevant to your component."]}),`
`]}),`
`,e.jsx(n.h3,{id:"theme-and-design-tokens",children:"Theme and design tokens"}),`
`,e.jsx(n.p,{children:"Design tokens are used to maintain consistency across the design system and applications that use it. The tokens are defined in a JavaScript object."}),`
`,e.jsxs(n.p,{children:["All apps/websites consuming Redback UI should define a theme with keys matching the example provided in Redback UI (i.e., of type ",e.jsx(n.code,{children:"RedbackUiTheme"}),"), and be wrapped in a ",e.jsx(n.code,{children:"RedbackUiThemeProvider"})," component imported from Redback UI. This component is a wrapper for styled-components' ",e.jsx(n.code,{children:"ThemeProvider"})," that expects the tokens we have defined."]}),`
`,e.jsx(n.p,{children:"When developing components for Redback UI, please use design tokens wherever possible rather than hard-coding values. This will ensure consistency and make it easier to apply new themes or update the design system in the future."}),`
`,e.jsx(n.h3,{id:"automated-tests",children:"Automated tests"}),`
`,e.jsxs(n.p,{children:["This project is set up for unit testing with ",e.jsx(n.a,{href:"https://jestjs.io/",rel:"nofollow",children:"Jest"})," and ",e.jsx(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro/",rel:"nofollow",children:"React Testing Library"}),".  Further testing types will be added as the project progresses."]}),`
`,e.jsx(n.p,{children:"To run the unit tests from your terminal, run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:unit
`})}),`
`,e.jsx(n.p,{children:"Instructions on running tests using WebStorm's relevant IDE features will be made available as the project progresses."}),`
`,e.jsx(n.h2,{id:"working-with-documentation-pages",children:"Working with documentation pages"}),`
`,e.jsxs(n.p,{children:["Component documentation pages are automatically generated by the ",e.jsx(n.code,{children:".stories.tsx"})," files in the ",e.jsx(n.code,{children:"src/components"})," directory."]}),`
`,e.jsxs(n.p,{children:["In addition to these, custom documentation pages written in Markdown are located in the ",e.jsx(n.code,{children:"docs"})," directory. ",e.jsx(n.code,{children:".mdx"})," files can contain React components, making it possible to use custom components to lay out and style documentation page content in more complex ways than basic Markdown supports, when appropriate."]}),`
`,e.jsxs(n.p,{children:["Like regular components, ",e.jsx(n.a,{href:"https://www.npmjs.com/package/generate-react-cli",rel:"nofollow",children:"generate-react-cli"})," is set up to simplify the creation of new custom components for documentation pages. If you see a need to add a new component for documentation purposes, please use the generator to do so from the boilerplate templates:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx generate-react-cli component ComponentName --type=doc
`})}),`
`,e.jsx(n.h2,{id:"submitting-your-change",children:"Submitting your change"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Stage your changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git add .
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Commit your changes to your local branch"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git commit -m "A brief description of your changes"
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Push your changes up to GitHub"}),`
`,e.jsx(n.p,{children:"For the first time:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git push --set-upstream origin <branch-name>
`})}),`
`,e.jsx(n.p,{children:"For subsequent pushes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git push
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Create a pull request on GitHub, ensuring your include a clear description of your changes and any relevant context for reviewers."}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"useful-links",children:"Useful links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://react.dev/",rel:"nofollow",children:"React docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://styled-components.com/",rel:"nofollow",children:"Styled Components docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.js.org/docs/get-started/whats-a-story",rel:"nofollow",children:"Storybook docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/",rel:"nofollow",children:"TypeScript docs"})}),`
`,e.jsxs(n.li,{children:["Web Content Accessibility Guidelines (WCAG), in particular:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/quickref/#distinguishable",rel:"nofollow",children:"1.4: Distinguishable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#principle2",rel:"nofollow",children:"2.x: Operable"})}),`
`]}),`
`]}),`
`]})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{c as default};
