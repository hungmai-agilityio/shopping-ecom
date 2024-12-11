"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[650],{"./src/ui/components/common/ToastMessage/ToastMessage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,position:()=>position,success:()=>success,warning:()=>warning});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/common/ToastMessage/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{status:{description:"Set status for Toast message, it will show UI with corresponding styles",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.XQ)},message:{description:"Message to show"},duration:{description:"Set the amount of time for Toast to be invisible"},position:{description:"Set the position for Toast to display",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.II)}}},success={args:{status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.SUCCESS,message:"show message success",position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT,duration:1e5},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-[500px] h-[200px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args})})},error={args:{status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.ERROR,message:"show message error",position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT,duration:1e5},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-[500px] h-[200px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args})})},warning={args:{status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.WARNING,message:"show message warning",position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT,duration:1e5},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-[500px] h-[200px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args})})},position={args:{status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.ERROR,message:"show message error",position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_LEFT,duration:1e5},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-[500px] h-[200px]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.BOT_LEFT,status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.SUCCESS}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.BOT_RIGHT,status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.ERROR}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,position:_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT,status:_constants__WEBPACK_IMPORTED_MODULE_2__.XQ.WARNING})]})},__namedExportsOrder=["success","error","warning","position"];success.parameters={...success.parameters,docs:{...success.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: STATUS.SUCCESS,\n    message: 'show message success',\n    position: POSITION.TOP_RIGHT,\n    duration: 100000\n  },\n  render: args => <div className=\"w-[500px] h-[200px]\">\r\n      <ToastMessage {...args} />\r\n    </div>\n}",...success.parameters?.docs?.source}}},error.parameters={...error.parameters,docs:{...error.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: STATUS.ERROR,\n    message: 'show message error',\n    position: POSITION.TOP_RIGHT,\n    duration: 100000\n  },\n  render: args => <div className=\"w-[500px] h-[200px]\">\r\n      <ToastMessage {...args} />\r\n    </div>\n}",...error.parameters?.docs?.source}}},warning.parameters={...warning.parameters,docs:{...warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: STATUS.WARNING,\n    message: 'show message warning',\n    position: POSITION.TOP_RIGHT,\n    duration: 100000\n  },\n  render: args => <div className=\"w-[500px] h-[200px]\">\r\n      <ToastMessage {...args} />\r\n    </div>\n}",...warning.parameters?.docs?.source}}},position.parameters={...position.parameters,docs:{...position.parameters?.docs,source:{originalSource:"{\n  args: {\n    status: STATUS.ERROR,\n    message: 'show message error',\n    position: POSITION.TOP_LEFT,\n    duration: 100000\n  },\n  render: args => <div className=\"w-[500px] h-[200px]\">\r\n      <ToastMessage {...args} />\r\n      <ToastMessage {...args} position={POSITION.BOT_LEFT} status={STATUS.SUCCESS} />\r\n      <ToastMessage {...args} position={POSITION.BOT_RIGHT} status={STATUS.ERROR} />\r\n      <ToastMessage {...args} position={POSITION.TOP_RIGHT} status={STATUS.WARNING} />\r\n    </div>\n}",...position.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TYPE,INPUT_TYPE,SIZE,CELL,KEY,TIME_STATUS,POSITION,STATUS;__webpack_require__.d(__webpack_exports__,{JA:()=>CELL,hv:()=>END_POINT,Ih:()=>INPUT_TYPE,fY:()=>MESSAGE_API,XH:()=>MESSAGE_VALID,II:()=>POSITION,Jj:()=>QUERY,SK:()=>SIZE,XQ:()=>STATUS,ZE:()=>TYPE,vS:()=>avatarSizeClasses,eT:()=>btnSizeClasses,HX:()=>btnTypeClasses,yB:()=>categoryLabels,eS:()=>iconTypeClasses,vr:()=>inputTypeClasses,Tv:()=>target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default(),ij:()=>listAbout,sr:()=>listQuick,Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default(),sG:()=>slideHero,I2:()=>toastStyles}),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={})),function(INPUT_TYPE){INPUT_TYPE.FILE="file",INPUT_TYPE.TEXT="text",INPUT_TYPE.PASSWORD="password",INPUT_TYPE.EMAIL="email"}(INPUT_TYPE||(INPUT_TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(CELL){CELL.TD="td",CELL.TH="th"}(CELL||(CELL={})),function(KEY){KEY.USER="user"}(KEY||(KEY={})),function(TIME_STATUS){TIME_STATUS[TIME_STATUS.STALE_TIME=36e5]="STALE_TIME",TIME_STATUS[TIME_STATUS.COOKIE_TIME=172800]="COOKIE_TIME"}(TIME_STATUS||(TIME_STATUS={})),function(POSITION){POSITION.TOP_RIGHT="top-right",POSITION.TOP_LEFT="top-left",POSITION.BOT_RIGHT="bottom-right",POSITION.BOT_LEFT="bottom-left"}(POSITION||(POSITION={})),function(STATUS){STATUS.SUCCESS="success",STATUS.ERROR="error",STATUS.WARNING="warning"}(STATUS||(STATUS={}));const btnSizeClasses={[SIZE.SMALL]:"w-btn-sm",[SIZE.MEDIUM]:"lg:w-btn-md w-btn-sm",[SIZE.LARGE]:"w-full"},btnTypeClasses={[TYPE.PRIMARY]:"h-14 bg-primary text-white",[TYPE.SECOND]:"h-14 bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent",[TYPE.THIRD]:"bg-transparent text-primary hover:underline"},iconTypeClasses={[TYPE.PRIMARY]:"",[TYPE.SECOND]:"bg-gray-200 p-2 rounded-full",[TYPE.THIRD]:"bg-white p-2 rounded-full"},inputTypeClasses={[TYPE.PRIMARY]:"border border-dark rounded-md focus:ring-1 focus:ring-dark h-14",[TYPE.SECOND]:"border-b border-gray-300 focus:border-dark h-12",[TYPE.THIRD]:"bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12"},avatarSizeClasses={[SIZE.SMALL]:"w-avatar-sm h-avatar-sm",[SIZE.MEDIUM]:"w-avatar-md h-avatar-md",[SIZE.LARGE]:"w-avatar-lg h-avatar-lg"},toastStyles={[STATUS.SUCCESS]:"bg-green-500",[STATUS.ERROR]:"bg-red-500",[STATUS.WARNING]:"bg-yellow-500"};var target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_=(__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"roboto"}'),__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"inter"}')),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_);const END_POINT={HOME:"/",ABOUT_US:"/about",CONTACT:"/contact",SIGN_IN:"/sign-in",SIGN_UP:"/sign-up",WISHLIST:"/wishlist",PRODUCTS:"/products",PRODUCT:"/product",CATEGORY:"/category",USERS:"/users",PROFILE:"/profiles",CART:"/cart",CHECKOUT:"/checkout"},QUERY={CART:"cart",USER:"users",WISHLIST:"wishlist",PRODUCTS:"products"},navItems=[{name:"Home",url:END_POINT.HOME},{name:"Contact",url:END_POINT.CONTACT},{name:"About",url:END_POINT.ABOUT_US}],listAbout=[{name:"My Account",url:END_POINT.PROFILE},{name:"Login / Register",url:END_POINT.SIGN_IN},{name:"Cart",url:END_POINT.CART},{name:"Wishlist",url:END_POINT.WISHLIST}],listQuick=[{name:"Privacy Policy",url:""},{name:"Terms Of Use",url:""},{name:"FAQ",url:""},{name:"Contact",url:END_POINT.CONTACT}],slideHero=[{id:"hero-1",image:"/hero_iphone.png",content:"Up to 10% off Voucher",title:"IPhone 14 Series",icon:"/icon-iphone.svg"},{id:"hero-2",image:"/hero-canon.png",content:"Capture stunning photos every time.",title:"Canon camera"},{id:"hero-3",image:"/hero-shoes.png",content:"Durable, stylish, all-day comfort",title:"Adidas Sneakers"},{id:"hero-4",image:"/hero-cooler.png",content:"Max Cooling Power - Liquid Cooling for Your PC!",title:"Advanced Liquid Cooling System"},{id:"hero-5",image:"/hero-ps5.png",content:"Level Up with PS5 - Buy Now",title:"PS5",icon:"/logo-sony.svg"}],categoryLabels={phone:"Phones",computer:"Computers",smartWatch:"SmartWatch",headphone:"HeadPhones",camera:"Camera",gaming:"Gaming",shirt:"Shirt"},MESSAGE_VALID={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Invalid email format",EMAIL_EXIST:"Email already exists",PASSWORD_ERROR:"Password must be at least 6 characters",CONFIRM_ERROR:"Passwords do not match",NEW_PASS_ERROR:"Password cannot be the same as the old password",UPLOAD:"Only file .png, .jpg, .jpeg, .svg allowed"},MESSAGE_API={SIGN_UP_ERROR:"An error occurred. Please try again",SIGN_UP_SUCCESS:"You have successfully registered",SIGN_IN_ERROR:"email or password is incorrect",ADD_PRODUCT_SUCCESS:"Add product success",UPDATE_PROFILE_SUCCESS:"Update profile success",UPDATE_PROFILE_ERROR:"Update profile error",DELETE_ADDRESS_SUCCESS:"Delete address success",DELETE_ADDRESS_ERROR:"Delete address error",UPDATE_CART_ERROR:"Update cart error",UPDATE_CART_SUCCESS:"Update cart success"}},"./src/ui/components/common/ToastMessage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts");const ToastMessage=({status,message,duration=3e3,position})=>{const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),setPosition={[_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT]:"top-4 right-4",[_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_LEFT]:"top-4 left-4",[_constants__WEBPACK_IMPORTED_MODULE_2__.II.BOT_RIGHT]:"bottom-4 right-4",[_constants__WEBPACK_IMPORTED_MODULE_2__.II.BOT_LEFT]:"bottom-4 left-4"}[position||_constants__WEBPACK_IMPORTED_MODULE_2__.II.TOP_RIGHT];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const timer=setTimeout((()=>{setVisible(!1)}),duration);return()=>clearTimeout(timer)}),[]),visible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.$)("text-white font-semibold fixed py-2 px-4 rounded shadow-lg transition-opacity ease-in-out max-w-lg truncate",_constants__WEBPACK_IMPORTED_MODULE_2__.I2[status],setPosition),children:message}):null},__WEBPACK_DEFAULT_EXPORT__=ToastMessage;ToastMessage.__docgenInfo={description:"",methods:[],displayName:"ToastMessage",props:{status:{required:!0,tsType:{name:"union",raw:"STATUS.SUCCESS | STATUS.ERROR | STATUS.WARNING",elements:[{name:"STATUS.SUCCESS"},{name:"STATUS.ERROR"},{name:"STATUS.WARNING"}]},description:""},message:{required:!0,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"| POSITION.TOP_LEFT\r\n| POSITION.TOP_RIGHT\r\n| POSITION.BOT_LEFT\r\n| POSITION.BOT_RIGHT",elements:[{name:"POSITION.TOP_LEFT"},{name:"POSITION.TOP_RIGHT"},{name:"POSITION.BOT_LEFT"},{name:"POSITION.BOT_RIGHT"}]},description:""}}}}}]);