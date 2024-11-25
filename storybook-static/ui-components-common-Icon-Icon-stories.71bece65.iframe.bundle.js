"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[812],{"./src/ui/components/common/Icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,disable:()=>disable,hasBorder:()=>hasBorder,notAction:()=>notAction});var _ui_components_common_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/ui/components/common/Icon/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components_common_Icon__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{src:{description:"Image to render"},alt:{description:"Describes the image and shows if the image is corrupted"},width:{description:"Width for images"},height:{description:"Height for images"},variant:{description:"Set type optional for icon",control:"radio",options:Object.values(_constants__WEBPACK_IMPORTED_MODULE_1__.ZE)},onClick:{description:"Handle the event when clicking on the button"},isDisabled:{description:"Set disabled icon"},styles:{description:"Set styles for icon"}}},basic={args:{src:"/cart.svg",alt:"Cart Icon",width:24,height:24,onClick:()=>{alert(123)}}},hasBorder={args:{src:"/cart.svg",alt:"Cart Icon",width:24,height:24,onClick:()=>{alert(123)},variant:_constants__WEBPACK_IMPORTED_MODULE_1__.ZE.SECOND}},notAction={args:{src:"/heart.svg",alt:"Cart Icon",width:30,height:30}},disable={args:{src:"/heart.svg",alt:"Cart Icon",width:30,height:30,isDisabled:!0}},__namedExportsOrder=["basic","hasBorder","notAction","disable"];basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '/cart.svg',\n    alt: 'Cart Icon',\n    width: 24,\n    height: 24,\n    onClick: () => {\n      alert(123);\n    }\n  }\n}",...basic.parameters?.docs?.source}}},hasBorder.parameters={...hasBorder.parameters,docs:{...hasBorder.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '/cart.svg',\n    alt: 'Cart Icon',\n    width: 24,\n    height: 24,\n    onClick: () => {\n      alert(123);\n    },\n    variant: TYPE.SECOND\n  }\n}",...hasBorder.parameters?.docs?.source}}},notAction.parameters={...notAction.parameters,docs:{...notAction.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '/heart.svg',\n    alt: 'Cart Icon',\n    width: 30,\n    height: 30\n  }\n}",...notAction.parameters?.docs?.source}}},disable.parameters={...disable.parameters,docs:{...disable.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '/heart.svg',\n    alt: 'Cart Icon',\n    width: 30,\n    height: 30,\n    isDisabled: true\n  }\n}",...disable.parameters?.docs?.source}}}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var TYPE,INPUT_TYPE,SIZE;__webpack_require__.d(__webpack_exports__,{SK:()=>SIZE,ZE:()=>TYPE,eT:()=>btnSizeClasses,HX:()=>btnTypeClasses,eS:()=>iconTypeClasses,Tv:()=>target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default(),Q9:()=>target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default()}),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={})),function(INPUT_TYPE){INPUT_TYPE.FILE="file",INPUT_TYPE.TEXT="text",INPUT_TYPE.PASSWORD="password",INPUT_TYPE.EMAIL="email"}(INPUT_TYPE||(INPUT_TYPE={})),function(SIZE){SIZE.SMALL="small",SIZE.MEDIUM="medium",SIZE.LARGE="large"}(SIZE||(SIZE={}));const btnSizeClasses={[SIZE.SMALL]:"max-w-btn-sm",[SIZE.MEDIUM]:"max-w-btn-md",[SIZE.LARGE]:"w-full"},btnTypeClasses={[TYPE.PRIMARY]:"bg-primary text-white",[TYPE.SECOND]:"bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent",[TYPE.THIRD]:"bg-transparent text-primary hover:underline"},iconTypeClasses={[TYPE.PRIMARY]:"",[TYPE.SECOND]:"bg-gray-200 p-2 rounded-full",[TYPE.THIRD]:"bg-white p-2 rounded-full"};var target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_=__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"popping"}'),target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Poppins_arguments_subsets_latin_weight_400_500_700_variableName_popping_),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_=(__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"roboto"}'),__webpack_require__('./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Inter","arguments":[{"subsets":["latin"],"weight":["400","500","700"]}],"variableName":"inter"}')),target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_default=__webpack_require__.n(target_path_src_constants_fonts_ts_import_Inter_arguments_subsets_latin_weight_400_500_700_variableName_inter_)},"./src/ui/components/common/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react_62ht4np6dwxllv75cec5frkuai/node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Icon=({src,alt,width,height,onClick,isDisabled,variant=_constants__WEBPACK_IMPORTED_MODULE_1__.ZE.PRIMARY,styles,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.$)("flex",_constants__WEBPACK_IMPORTED_MODULE_1__.eS[variant],styles,{"opacity-20 cursor-not-allowed":isDisabled,"cursor-pointer":onClick}),onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{src,alt,width,height,...props})}),__WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"TYPE.PRIMARY | TYPE.SECOND",elements:[{name:"TYPE.PRIMARY"},{name:"TYPE.SECOND"}]},description:"",defaultValue:{value:"TYPE.PRIMARY",computed:!0}},styles:{required:!1,tsType:{name:"string"},description:""}},composes:["ImageProps"]}}}]);