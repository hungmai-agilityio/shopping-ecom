"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[243],{"./src/ui/components/common/Modal/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,confirm:()=>confirm,default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_ui_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components__WEBPACK_IMPORTED_MODULE_1__.aF,tags:["autodocs"],argTypes:{btnSecond:{description:"name of Button confirm",control:"text"},children:{description:"Content in modal"},isOpen:{description:"Open modal",control:"boolean"},onClose:{description:"Handle to close modal"},onClick:{description:"Handle the action for the confirm button"},title:{description:"Title for modal"}}},primary={args:{onClose:()=>alert("Close modal"),children:"This is content",isOpen:!0,title:"Modal Title"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-[500px] h-[500px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__.aF,{...args})})},confirm={args:{onClose:()=>alert("Close modal"),children:"This is content",isOpen:!0,title:"Modal Title",btnSecond:"Confirm",onClick:()=>alert("Confirm")},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-[500px] h-[500px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__.aF,{...args})})},__namedExportsOrder=["primary","confirm"];primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: () => alert('Close modal'),\n    children: 'This is content',\n    isOpen: true,\n    title: 'Modal Title'\n  },\n  render: args => <div className=\"w-[500px] h-[500px]\">\r\n      <Modal {...args} />\r\n    </div>\n}",...primary.parameters?.docs?.source}}},confirm.parameters={...confirm.parameters,docs:{...confirm.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: () => alert('Close modal'),\n    children: 'This is content',\n    isOpen: true,\n    title: 'Modal Title',\n    btnSecond: 'Confirm',\n    onClick: () => alert('Confirm')\n  },\n  render: args => <div className=\"w-[500px] h-[500px]\">\r\n      <Modal {...args} />\r\n    </div>\n}",...confirm.parameters?.docs?.source}}}}}]);