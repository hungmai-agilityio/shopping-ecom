"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[666],{"./src/ui/components/common/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,basicButton:()=>basicButton,default:()=>__WEBPACK_DEFAULT_EXPORT__,outLinedButton:()=>outLinedButton,sizeButton:()=>sizeButton,textButton:()=>textButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_ui_components_common_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/common/Button/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components_common_Button__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{description:"Name of the button or Content inside"},variant:{description:"Set type optional for Button",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.ZE)},size:{description:"Set size optional for Button",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.SK)},onClick:{description:"Handle the event when clicking on the button"},disabled:{description:"Set disabled button",control:"boolean"},styles:{description:"Set styles for buttons"}}},basicButton={args:{children:"Submit",variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.PRIMARY,onClick:()=>alert("submit"),styles:"w-[156px]"}},outLinedButton={args:{children:"Submit",variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.SECOND,onClick:()=>alert("submit"),styles:"w-[156px]"}},textButton={args:{children:"Forgot password",variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.THIRD,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SK.SMALL}},sizeButton={parameters:{layout:"left"},render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.PRIMARY,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SK.SMALL,styles:"w-[143px]",children:"Submit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.PRIMARY,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SK.MEDIUM,styles:"w-[240px]",children:"Submit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:_constants__WEBPACK_IMPORTED_MODULE_2__.ZE.PRIMARY,size:_constants__WEBPACK_IMPORTED_MODULE_2__.SK.LARGE,children:"Submit"})]})},Disabled={args:{children:"Send",disabled:!0,styles:"w-[156px]"}},__namedExportsOrder=["basicButton","outLinedButton","textButton","sizeButton","Disabled"];basicButton.parameters={...basicButton.parameters,docs:{...basicButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Submit',\n    variant: TYPE.PRIMARY,\n    onClick: () => alert('submit'),\n    styles: 'w-[156px]'\n  }\n}",...basicButton.parameters?.docs?.source}}},outLinedButton.parameters={...outLinedButton.parameters,docs:{...outLinedButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Submit',\n    variant: TYPE.SECOND,\n    onClick: () => alert('submit'),\n    styles: 'w-[156px]'\n  }\n}",...outLinedButton.parameters?.docs?.source}}},textButton.parameters={...textButton.parameters,docs:{...textButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Forgot password',\n    variant: TYPE.THIRD,\n    size: SIZE.SMALL\n  }\n}",...textButton.parameters?.docs?.source}}},sizeButton.parameters={...sizeButton.parameters,docs:{...sizeButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    layout: \'left\'\n  },\n  render: () => <div className="flex flex-col gap-5">\r\n      <Button variant={TYPE.PRIMARY} size={SIZE.SMALL} styles="w-[143px]">\r\n        Submit\r\n      </Button>\r\n      <Button variant={TYPE.PRIMARY} size={SIZE.MEDIUM} styles="w-[240px]">\r\n        Submit\r\n      </Button>\r\n      <Button variant={TYPE.PRIMARY} size={SIZE.LARGE}>\r\n        Submit\r\n      </Button>\r\n    </div>\n}',...sizeButton.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Send',\n    disabled: true,\n    styles: 'w-[156px]'\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TYPE,INPUT_TYPE,SIZE,CELL,KEY,TIME_STATUS,POSITION,STATUS,TAB;__webpack_require__.d(__webpack_exports__,{JA:()=>CELL,hv:()=>END_POINT,Ih:()=>INPUT_TYPE,fY:()=>MESSAGE_API,XH:()=>MESSAGE_VALID,II:()=>POSITION,Jj:()=>QUERY,SK:()=>SIZE,XQ:()=>STATUS,wn:()=>TAB,ZE:()=>TYPE,vS:()=>avatarSizeClasses,eT:()=>btnSizeClasses,HX:()=>btnTypeClasses,yB:()=>categoryLabels,eS:()=>iconTypeClasses,vr:()=>inputTypeClasses,Tv:()=>target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default(),ij:()=>listAbout,sr:()=>listQuick,Cn:()=>navItems,Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default(),sG:()=>slideHero,I2:()=>toastStyles}),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={})),function(INPUT_TYPE){INPUT_TYPE.FILE="file",INPUT_TYPE.TEXT="text",INPUT_TYPE.PASSWORD="password",INPUT_TYPE.EMAIL="email"}(INPUT_TYPE||(INPUT_TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(CELL){CELL.TD="td",CELL.TH="th"}(CELL||(CELL={})),function(KEY){KEY.USER="user"}(KEY||(KEY={})),function(TIME_STATUS){TIME_STATUS[TIME_STATUS.STALE_TIME=36e5]="STALE_TIME",TIME_STATUS[TIME_STATUS.COOKIE_TIME=172800]="COOKIE_TIME"}(TIME_STATUS||(TIME_STATUS={})),function(POSITION){POSITION.TOP_RIGHT="top-right",POSITION.TOP_LEFT="top-left",POSITION.BOT_RIGHT="bottom-right",POSITION.BOT_LEFT="bottom-left"}(POSITION||(POSITION={})),function(STATUS){STATUS.SUCCESS="success",STATUS.ERROR="error",STATUS.WARNING="warning"}(STATUS||(STATUS={})),function(TAB){TAB.PROFILE="profile",TAB.ADDRESS="address"}(TAB||(TAB={}));const btnSizeClasses={[SIZE.SMALL]:"w-btn-sm",[SIZE.MEDIUM]:"lg:w-btn-md w-btn-sm",[SIZE.LARGE]:"w-full"},btnTypeClasses={[TYPE.PRIMARY]:"h-14 bg-primary text-white",[TYPE.SECOND]:"h-14 bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent",[TYPE.THIRD]:"bg-transparent text-primary hover:underline"},iconTypeClasses={[TYPE.PRIMARY]:"",[TYPE.SECOND]:"bg-gray-200 p-2 rounded-full",[TYPE.THIRD]:"bg-white p-2 rounded-full"},inputTypeClasses={[TYPE.PRIMARY]:"border border-dark rounded-md focus:ring-1 focus:ring-dark h-14",[TYPE.SECOND]:"border-b border-gray-300 focus:border-dark h-12",[TYPE.THIRD]:"bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12"},avatarSizeClasses={[SIZE.SMALL]:"w-avatar-sm h-avatar-sm",[SIZE.MEDIUM]:"w-avatar-md h-avatar-md",[SIZE.LARGE]:"w-avatar-lg h-avatar-lg"},toastStyles={[STATUS.SUCCESS]:"bg-green-500",[STATUS.ERROR]:"bg-red-500",[STATUS.WARNING]:"bg-yellow-500"};var target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_=(__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"roboto"}'),__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"inter"}')),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_);const END_POINT={HOME:"/",ABOUT_US:"/about",CONTACT:"/contact",SIGN_IN:"/sign-in",SIGN_UP:"/sign-up",WISHLIST:"/wishlist",PRODUCTS:"/products",PRODUCT:"/product",CATEGORY:"/category",USERS:"/users",PROFILE:"/profiles",CART:"/cart",CHECKOUT:"/checkout"},QUERY={CART:"cart",USER:"users",WISHLIST:"wishlist",PRODUCTS:"products"},navItems=[{name:"Home",url:END_POINT.HOME},{name:"Contact",url:END_POINT.CONTACT},{name:"About",url:END_POINT.ABOUT_US}],listAbout=[{name:"My Account",url:END_POINT.PROFILE},{name:"Login / Register",url:END_POINT.SIGN_IN},{name:"Cart",url:END_POINT.CART},{name:"Wishlist",url:END_POINT.WISHLIST}],listQuick=[{name:"Privacy Policy",url:""},{name:"Terms Of Use",url:""},{name:"FAQ",url:""},{name:"Contact",url:END_POINT.CONTACT}],slideHero=[{id:"hero-1",image:"/hero_iphone.png",content:"Up to 10% off Voucher",title:"IPhone 14 Series",icon:"/icon-iphone.svg"},{id:"hero-2",image:"/hero-canon.png",content:"Capture stunning photos every time.",title:"Canon camera"},{id:"hero-3",image:"/hero-shoes.png",content:"Durable, stylish, all-day comfort",title:"Adidas Sneakers"},{id:"hero-4",image:"/hero-cooler.png",content:"Max Cooling Power - Liquid Cooling for Your PC!",title:"Advanced Liquid Cooling System"},{id:"hero-5",image:"/hero-ps5.png",content:"Level Up with PS5 - Buy Now",title:"PS5",icon:"/logo-sony.svg"}],categoryLabels={phone:"Phones",computer:"Computers",smartWatch:"SmartWatch",headphone:"HeadPhones",camera:"Camera",gaming:"Gaming",shirt:"Shirt"},MESSAGE_VALID={INPUT_REQUIRED:"{field} is required",EMAIL_ERROR:"Invalid email format",EMAIL_EXIST:"Email already exists",PASSWORD_ERROR:"Password must be at least 6 characters",CONFIRM_ERROR:"Passwords do not match",NEW_PASS_ERROR:"Password cannot be the same as the old password",UPLOAD:"Only file .png, .jpg, .jpeg, .svg allowed"},MESSAGE_API={SIGN_UP_ERROR:"An error occurred. Please try again",SIGN_UP_SUCCESS:"You have successfully registered",SIGN_IN_ERROR:"email or password is incorrect",ADD_PRODUCT_SUCCESS:"Add product success",UPDATE_PROFILE_SUCCESS:"Update profile success",UPDATE_PROFILE_ERROR:"Update profile error",DELETE_ADDRESS_SUCCESS:"Delete address success",DELETE_ADDRESS_ERROR:"Delete address error",UPDATE_CART_ERROR:"Update cart error",UPDATE_CART_SUCCESS:"Update cart success",UPDATE_QUANTITY:"Add quantity +1 to existing products"}},"./src/ui/components/common/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts");const Button=({children,variant=_constants__WEBPACK_IMPORTED_MODULE_1__.ZE.PRIMARY,size=_constants__WEBPACK_IMPORTED_MODULE_1__.SK.MEDIUM,disabled,onClick,styles,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)(`rounded font-medium md:text-base text-xs ${_constants__WEBPACK_IMPORTED_MODULE_1__.Q9.className}`,_constants__WEBPACK_IMPORTED_MODULE_1__.eT[size],_constants__WEBPACK_IMPORTED_MODULE_1__.HX[variant],styles,disabled&&"cursor-not-allowed opacity-50"),disabled,onClick,...props,children}),__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD",elements:[{name:"TYPE.PRIMARY"},{name:"TYPE.SECOND"},{name:"TYPE.THIRD"}]},description:"",defaultValue:{value:"TYPE.PRIMARY",computed:!0}},children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE",elements:[{name:"SIZE.SMALL"},{name:"SIZE.MEDIUM"},{name:"SIZE.LARGE"}]},description:"",defaultValue:{value:"SIZE.MEDIUM",computed:!0}},styles:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]}}}]);