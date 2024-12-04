"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[572],{"./src/ui/components/common/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,types:()=>types,withIcon:()=>withIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/common/Input/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"],argTypes:{label:{description:"Label for the input field",control:"text"},placeholder:{description:"Placeholder text inside the input field",control:"text"},value:{description:"Value of the input field",control:"text"},variant:{description:"Style variant of the input field",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__.ZE)},type:{description:"HTML type of the input field",control:"select",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__.Ih)},icon:{description:"Optional icon to display on the input field",control:"text"},message:{description:"Error or helper message below the input",control:"text"},disabled:{description:"Whether the input is disabled",control:"boolean"},onClick:{description:"Event handler for when the icon is clicked"}}},basic={render:args=>{const[textInput,setTextInput]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value||""),handleTextInputChange=event=>{var _args_onChange;const newValue=event.target.value;setTextInput(newValue),null===(_args_onChange=args.onChange)||void 0===_args_onChange||_args_onChange.call(args,event)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{...args,label:"Input primary",value:textInput,onChange:handleTextInputChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{...args,label:"input second",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.SECOND,value:textInput,onChange:handleTextInputChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{...args,label:"input third",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.THIRD,value:textInput,onChange:handleTextInputChange})]})},args:{placeholder:"Enter some text",value:"",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.PRIMARY}},withIcon={render:()=>{const[textInput,setTextInput]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Text Input",placeholder:"Enter some text",value:textInput,onChange:event=>{setTextInput(event.target.value)},variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.THIRD,icon:"/heart.svg",onClick:()=>alert("Click icon")})}},types={render:()=>{const[password,setPassword]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),handlePasswordChange=event=>{setPassword(event.target.value)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Password",placeholder:"value...",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.PRIMARY,type:"password",icon:"/heart.svg",onChange:handlePasswordChange,onClick:()=>alert("Icon clicked!"),value:password,isRequired:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Email",placeholder:"value...",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.PRIMARY,type:_constants__WEBPACK_IMPORTED_MODULE_3__.Ih.EMAIL,onChange:handlePasswordChange,onClick:()=>alert("Icon clicked!"),value:password})]})}},error={render:()=>{const[password,setPassword]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Input__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Password",placeholder:"value...",variant:_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.PRIMARY,type:"password",onChange:event=>{setPassword(event.target.value)},onClick:()=>alert("Icon clicked!"),value:password,message:password?"":"Has error..."})}},__namedExportsOrder=["basic","withIcon","types","error"];basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [textInput, setTextInput] = useState(args.value || \'\');\n    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n      const newValue = event.target.value;\n      setTextInput(newValue);\n      args.onChange?.(event);\n    };\n    return <div className="flex flex-col gap-5">\r\n        <Input {...args} label="Input primary" value={textInput} onChange={handleTextInputChange} />\r\n        <Input {...args} label="input second" variant={TYPE.SECOND} value={textInput} onChange={handleTextInputChange} />\r\n        <Input {...args} label="input third" variant={TYPE.THIRD} value={textInput} onChange={handleTextInputChange} />\r\n      </div>;\n  },\n  args: {\n    placeholder: \'Enter some text\',\n    value: \'\',\n    variant: TYPE.PRIMARY\n  }\n}',...basic.parameters?.docs?.source}}},withIcon.parameters={...withIcon.parameters,docs:{...withIcon.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [textInput, setTextInput] = useState(\'\');\n    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n      setTextInput(event.target.value);\n    };\n    return <Input label="Text Input" placeholder="Enter some text" value={textInput} onChange={handleTextInputChange} variant={TYPE.THIRD} icon="/heart.svg" onClick={() => alert(\'Click icon\')} />;\n  }\n}',...withIcon.parameters?.docs?.source}}},types.parameters={...types.parameters,docs:{...types.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [password, setPassword] = useState(\'\');\n    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n      setPassword(event.target.value);\n    };\n    return <div>\r\n        <Input label="Password" placeholder="value..." variant={TYPE.PRIMARY} type="password" icon="/heart.svg" onChange={handlePasswordChange} onClick={() => alert(\'Icon clicked!\')} value={password} isRequired />\r\n        <Input label="Email" placeholder="value..." variant={TYPE.PRIMARY} type={INPUT_TYPE.EMAIL} onChange={handlePasswordChange} onClick={() => alert(\'Icon clicked!\')} value={password} />\r\n      </div>;\n  }\n}',...types.parameters?.docs?.source}}},error.parameters={...error.parameters,docs:{...error.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [password, setPassword] = useState('');\n    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n      setPassword(event.target.value);\n    };\n    return <Input label=\"Password\" placeholder=\"value...\" variant={TYPE.PRIMARY} type=\"password\" onChange={handlePasswordChange} onClick={() => alert('Icon clicked!')} value={password} message={password ? '' : 'Has error...'} />;\n  }\n}",...error.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TYPE,INPUT_TYPE,SIZE,CELL,TIME_STATUS;__webpack_require__.d(__webpack_exports__,{hv:()=>END_POINT,Ih:()=>INPUT_TYPE,XH:()=>MESSAGE_VALID,Jj:()=>QUERY,SK:()=>SIZE,ZE:()=>TYPE,vS:()=>avatarSizeClasses,eT:()=>btnSizeClasses,HX:()=>btnTypeClasses,eS:()=>iconTypeClasses,vr:()=>inputTypeClasses,Tv:()=>target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default(),ij:()=>listAbout,sr:()=>listQuick,Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default(),sG:()=>slideHero}),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={})),function(INPUT_TYPE){INPUT_TYPE.FILE="file",INPUT_TYPE.TEXT="text",INPUT_TYPE.PASSWORD="password",INPUT_TYPE.EMAIL="email"}(INPUT_TYPE||(INPUT_TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(CELL){CELL.TD="td",CELL.TH="th"}(CELL||(CELL={})),function(TIME_STATUS){TIME_STATUS[TIME_STATUS.STALE_TIME=36e5]="STALE_TIME",TIME_STATUS[TIME_STATUS.COOKIE_TIME=172800]="COOKIE_TIME"}(TIME_STATUS||(TIME_STATUS={}));const btnSizeClasses={[SIZE.SMALL]:"w-btn-sm",[SIZE.MEDIUM]:"lg:w-btn-md w-btn-sm",[SIZE.LARGE]:"w-full"},btnTypeClasses={[TYPE.PRIMARY]:"bg-primary text-white",[TYPE.SECOND]:"bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent",[TYPE.THIRD]:"bg-transparent text-primary hover:underline"},iconTypeClasses={[TYPE.PRIMARY]:"",[TYPE.SECOND]:"bg-gray-200 p-2 rounded-full",[TYPE.THIRD]:"bg-white p-2 rounded-full"},inputTypeClasses={[TYPE.PRIMARY]:"border border-dark rounded-md focus:ring-1 focus:ring-dark h-14",[TYPE.SECOND]:"border-b border-gray-300 focus:border-dark h-12",[TYPE.THIRD]:"bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12"},avatarSizeClasses={[SIZE.SMALL]:"w-avatar-sm h-avatar-sm",[SIZE.MEDIUM]:"w-avatar-md h-avatar-md",[SIZE.LARGE]:"w-avatar-lg h-avatar-lg"};var target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_=(__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"roboto"}'),__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"inter"}')),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_);const END_POINT={HOME:"/",ABOUT_US:"/about",CONTACT:"/contact",SIGN_IN:"/signIn",SIGN_UP:"/signUp",WISHLIST:"/wishlist",PRODUCTS:"/products",CATEGORY:"/category",USERS:"/users",PROFILE:"/profiles",CART:"/cart",CHECKOUT:"/checkout"},QUERY={CART:"cart",USER:"users",WISHLIST:"wishlist",PRODUCTS:"products"},navItems=[{name:"Home",url:END_POINT.HOME},{name:"Contact",url:END_POINT.CONTACT},{name:"About",url:END_POINT.ABOUT_US}],listAbout=[{name:"My Account",url:END_POINT.PROFILE},{name:"Login / Register",url:END_POINT.SIGN_IN},{name:"Cart",url:END_POINT.CART},{name:"Wishlist",url:END_POINT.WISHLIST}],listQuick=[{name:"Privacy Policy",url:""},{name:"Terms Of Use",url:""},{name:"FAQ",url:""},{name:"Contact",url:END_POINT.CONTACT}],slideHero=[{id:"hero-1",image:"/hero_iphone.png",content:"Up to 10% off Voucher",title:"IPhone 14 Series",icon:"/icon-iphone.svg"},{id:"hero-2",image:"/hero-canon.png",content:"Capture stunning photos every time.",title:"Canon camera"},{id:"hero-3",image:"/hero-shoes.png",content:"Durable, stylish, all-day comfort",title:"Adidas Sneakers"},{id:"hero-4",image:"/hero-cooler.png",content:"Max Cooling Power - Liquid Cooling for Your PC!",title:"Advanced Liquid Cooling System"},{id:"hero-5",image:"/hero-ps5.png",content:"Level Up with PS5 - Buy Now",title:"PS5",icon:"/logo-sony.svg"}],MESSAGE_VALID={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Invalid email format",EMAIL_EXIST:"Email already exists",PASSWORD_ERROR:"Password must be at least 6 characters",CONFIRM_ERROR:"Passwords do not match",UPLOAD:"Only file .png, .jpg, .jpeg, .svg allowed"}},"./src/ui/components/common/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react_62ht4np6dwxllv75cec5frkuai/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/constants/index.ts");const Input=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({label,isRequired,variant=_constants__WEBPACK_IMPORTED_MODULE_3__.ZE.PRIMARY,className,icon,message,onClick,value="",onChange,type=_constants__WEBPACK_IMPORTED_MODULE_3__.Ih.TEXT,placeholder,disabled,name,id,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-2",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:id,className:"text-sm font-medium text-gray-600 capitalize",children:[label,isRequired&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-primary ml-1",children:"*"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{ref,id,name,type,value,onChange,placeholder,disabled,required:isRequired,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("w-full p-2 text-gray-700 outline-none",_constants__WEBPACK_IMPORTED_MODULE_3__.vr[variant],message&&"border-primary focus:ring-primary",icon&&"pr-10",className),...props}),icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{src:icon,alt:"icon",width:20,height:20,className:"absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer",onClick})]}),message&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-xs text-primary",children:message})]}))),__WEBPACK_DEFAULT_EXPORT__=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD",elements:[{name:"TYPE.PRIMARY"},{name:"TYPE.SECOND"},{name:"TYPE.THIRD"}]},description:"",defaultValue:{value:"TYPE.PRIMARY",computed:!0}},icon:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},value:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"INPUT_TYPE.TEXT",computed:!0},required:!1}},composes:["InputHTMLAttributes"]}}}]);