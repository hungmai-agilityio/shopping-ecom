"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[352],{"./src/ui/components/common/Logo/Logo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customColor:()=>customColor,customLabel:()=>customLabel,default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_ui_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/common/Logo/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:"centered",nextjs:{appDirectory:!0}},argTypes:{url:{description:"path to a certain location"},color:{description:"Text color class (ex: `text-red-500`, `text-blue-700`)"},label:{description:"Logo name"}}},primary={args:{}},customColor={args:{color:"text-red-500"}},customLabel={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Apple"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Android",color:"text-green-500"})]})},__namedExportsOrder=["primary","customColor","customLabel"];primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...primary.parameters?.docs?.source}}},customColor.parameters={...customColor.parameters,docs:{...customColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'text-red-500'\n  }\n}",...customColor.parameters?.docs?.source}}},customLabel.parameters={...customLabel.parameters,docs:{...customLabel.parameters?.docs,source:{originalSource:"{\n  render: () => <div className='flex gap-10'>\r\n    <Logo label='Apple' />\r\n    <Logo label='Android' color='text-green-500' />\r\n  </div>\n}",...customLabel.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TYPE,INPUT_TYPE,SIZE;__webpack_require__.d(__webpack_exports__,{Ih:()=>INPUT_TYPE,SK:()=>SIZE,ZE:()=>TYPE,vS:()=>avatarSizeClasses,eT:()=>btnSizeClasses,HX:()=>btnTypeClasses,eS:()=>iconTypeClasses,vr:()=>inputTypeClasses,Tv:()=>target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default(),ij:()=>listAbout,sr:()=>listQuick,Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default(),sG:()=>slideHero}),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={})),function(INPUT_TYPE){INPUT_TYPE.FILE="file",INPUT_TYPE.TEXT="text",INPUT_TYPE.PASSWORD="password",INPUT_TYPE.EMAIL="email"}(INPUT_TYPE||(INPUT_TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={}));const btnSizeClasses={[SIZE.SMALL]:"max-w-btn-sm",[SIZE.MEDIUM]:"max-w-btn-md",[SIZE.LARGE]:"w-full"},btnTypeClasses={[TYPE.PRIMARY]:"bg-primary text-white",[TYPE.SECOND]:"bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent",[TYPE.THIRD]:"bg-transparent text-primary hover:underline"},iconTypeClasses={[TYPE.PRIMARY]:"",[TYPE.SECOND]:"bg-gray-200 p-2 rounded-full",[TYPE.THIRD]:"bg-white p-2 rounded-full"},inputTypeClasses={[TYPE.PRIMARY]:"border border-dark rounded-md focus:ring-1 focus:ring-dark h-14",[TYPE.SECOND]:"border-b border-gray-300 focus:border-dark h-12",[TYPE.THIRD]:"bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12"},avatarSizeClasses={[SIZE.SMALL]:"w-avatar-sm h-avatar-sm",[SIZE.MEDIUM]:"w-avatar-md h-avatar-md",[SIZE.LARGE]:"w-avatar-lg h-avatar-lg"};var target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_=(__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"roboto"}'),__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"inter"}')),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_);const END_POINT_CONTACT="/contact",navItems=[{name:"Home",url:"/"},{name:"Contact",url:END_POINT_CONTACT},{name:"About",url:"/about"}],listAbout=[{name:"My Account",url:"/profiles"},{name:"Login / Register",url:"/signIn"},{name:"Cart",url:"/cart"},{name:"Wishlist",url:"/wishlist"}],listQuick=[{name:"Privacy Policy",url:""},{name:"Terms Of Use",url:""},{name:"FAQ",url:""},{name:"Contact",url:END_POINT_CONTACT}],slideHero=[{id:"hero-1",image:"/hero_iphone.png",content:"Up to 10% off Voucher",title:"IPhone 14 Series",icon:"/icon-iphone.svg"},{id:"hero-2",image:"/hero-canon.png",content:"Capture stunning photos every time.",title:"Canon camera"},{id:"hero-3",image:"/hero-shoes.png",content:"Durable, stylish, all-day comfort",title:"Adidas Sneakers"},{id:"hero-4",image:"/hero-cooler.png",content:"Max Cooling Power - Liquid Cooling for Your PC!",title:"Advanced Liquid Cooling System"},{id:"hero-5",image:"/hero-ps5.png",content:"Level Up with PS5 - Buy Now",title:"PS5",icon:"/logo-sony.svg"}]},"./src/ui/components/common/Logo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts");const Logo=({url="/",label="Exclusive",color="text-dark"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`${_constants__WEBPACK_IMPORTED_MODULE_2__.Tv.className}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:url,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.$)("font-bold text-2xl",color),children:label})}),__WEBPACK_DEFAULT_EXPORT__=Logo;Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{url:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Exclusive'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text-dark'",computed:!1}}}}}}]);