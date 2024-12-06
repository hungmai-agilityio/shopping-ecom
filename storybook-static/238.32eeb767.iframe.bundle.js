"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[238],{"./src/ui/sections/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wi:()=>sections_Footer,Y9:()=>sections_Header});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),constants=__webpack_require__("./src/constants/index.ts"),components=__webpack_require__("./src/ui/components/index.ts");const Header=()=>(0,jsx_runtime.jsx)("header",{className:" py-8 border-b h-24 border-dark",children:(0,jsx_runtime.jsxs)("div",{className:"w-full flex items-center bg-white shadow-header container",children:[(0,jsx_runtime.jsx)(components.gu,{}),(0,jsx_runtime.jsx)("div",{className:"w-full lg:flex lg:justify-center hidden gap-10 items-start",children:(0,jsx_runtime.jsx)(components.Fp,{items:constants.Cn,styles:"flex gap-12"})})]})}),sections_Header=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react_62ht4np6dwxllv75cec5frkuai/node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Footer=()=>(0,jsx_runtime.jsxs)("footer",{className:`${constants.Q9.className} mt-20 bg-black text-white py-12 text-base`,children:[(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,jsx_runtime.jsx)(components.gu,{color:"text-white"}),(0,jsx_runtime.jsx)("h3",{className:"text-xl font-medium",children:"Subscribe"}),(0,jsx_runtime.jsx)("p",{className:"mt-2 text-sm",children:"Get 10% off your first order"}),(0,jsx_runtime.jsx)(components.Rc,{})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,jsx_runtime.jsx)("h3",{className:"text-xl font-semibold",children:"Support"}),(0,jsx_runtime.jsx)("p",{children:"111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."}),(0,jsx_runtime.jsx)("a",{href:"mailto:exclusive@gmail.com",children:"exclusive@gmail.com"}),(0,jsx_runtime.jsx)("a",{href:"tel:015-88888-9999",children:"+88015-88888-9999"})]}),(0,jsx_runtime.jsx)(components.B8,{heading:"About",items:constants.ij,color:"text-white"}),(0,jsx_runtime.jsx)(components.B8,{heading:"Quick Link",items:constants.sr,color:"text-white"}),(0,jsx_runtime.jsxs)("div",{className:"md:flex md:flex-col flex-row justify-between gap-4 font-medium",children:[(0,jsx_runtime.jsx)("h3",{className:"text-xl",children:"Download App"}),(0,jsx_runtime.jsx)("p",{className:"text-xs text-gray-400",children:"Save $3 with App New User Only"}),(0,jsx_runtime.jsxs)("div",{className:"mt-4 flex space-x-4",children:[(0,jsx_runtime.jsx)(next_image.A,{src:"/qr-code.webp",alt:"qr code",width:76,height:76}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,jsx_runtime.jsx)(next_image.A,{src:"/store.webp",alt:"Google Play",width:110,height:40}),(0,jsx_runtime.jsx)(next_image.A,{src:"/app-store.webp",alt:"App Store",width:110,height:40})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-5 mt-4",children:[(0,jsx_runtime.jsx)(components.Gz,{src:"/facebook.svg",alt:"facebook"}),(0,jsx_runtime.jsx)(components.Gz,{src:"/twitter.svg",alt:"twitter"}),(0,jsx_runtime.jsx)(components.Gz,{src:"/instagram.svg",alt:"instagram"}),(0,jsx_runtime.jsx)(components.Gz,{src:"/linkedin.svg",alt:"linkedin"})]})]})]})}),(0,jsx_runtime.jsx)("div",{className:"border-t border-gray-800 pt-8 mt-8 text-center text-sm",children:(0,jsx_runtime.jsx)("p",{className:"text-gray-300",children:"© Copyright Rimel 2022. All rights reserved."})})]}),sections_Footer=Footer;Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var libs=__webpack_require__("./src/libs/index.ts");const BestSelling=async()=>{const{data,error}=await(0,libs.dI)("bestSelling=true",0,4);return(0,jsx_runtime.jsxs)("div",{className:"container my-20",children:[(0,jsx_runtime.jsx)(components.vw,{label:"This Month"}),(0,jsx_runtime.jsx)("div",{className:"my-12",children:(0,jsx_runtime.jsx)(components.DZ,{children:"Best Selling Products"})}),error?(0,jsx_runtime.jsx)("p",{className:"text-center text-5xl text-primary",children:"Unable to load products! Try later"}):(0,jsx_runtime.jsx)(components.EL,{products:data,query:"bestSelling=true",isShowMore:!0})]})};BestSelling.__docgenInfo={description:"",methods:[],displayName:"BestSelling"};const FlashSale=async()=>{const{data,error}=await(0,libs.dI)("isFlashSale=true",0,4);return(0,jsx_runtime.jsxs)("div",{className:"container my-20",children:[(0,jsx_runtime.jsx)(components.vw,{label:"Today's"}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between flex-wrap items-end mb-12",children:[(0,jsx_runtime.jsxs)("div",{className:"md:flex mt-7 lg:gap-28 gap-9 items-end",children:[(0,jsx_runtime.jsx)(components.DZ,{children:"Flash sales"}),(0,jsx_runtime.jsx)(components.Gi,{days:3,hours:1,minutes:25,seconds:5})]}),(0,jsx_runtime.jsx)(components.CQ,{queryPage:"flash-sale-page",start:0})]}),error?(0,jsx_runtime.jsx)("p",{className:"text-center text-5xl text-primary",children:"Unable to load products! Try later"}):(0,jsx_runtime.jsx)(components.EL,{products:data,isDiscount:!0,isShowMore:!0,query:"isFlashSale=true"})]})};FlashSale.__docgenInfo={description:"",methods:[],displayName:"FlashSale"};const ContactSection=()=>(0,jsx_runtime.jsxs)("div",{className:"w-full lg:h-card-lg h-full bg-white p-10 shadow-contact",children:[(0,jsx_runtime.jsxs)("div",{className:"lg:flex justify-between gap-7",children:[(0,jsx_runtime.jsx)("div",{className:"w-full mb-5",children:(0,jsx_runtime.jsx)(components.pd,{variant:constants.ZE.THIRD,placeholder:"Your Name *"})}),(0,jsx_runtime.jsx)("div",{className:"w-full mb-5",children:(0,jsx_runtime.jsx)(components.pd,{variant:constants.ZE.THIRD,placeholder:"Your Email *"})}),(0,jsx_runtime.jsx)("div",{className:"w-full mb-5",children:(0,jsx_runtime.jsx)(components.pd,{variant:constants.ZE.THIRD,placeholder:"Your Phone *"})})]}),(0,jsx_runtime.jsx)("div",{className:"mb-5",children:(0,jsx_runtime.jsx)("textarea",{className:"bg-gray-200 p-2 w-full resize-none outline-none text-dark",rows:8,placeholder:"Your Message"})}),(0,jsx_runtime.jsx)("div",{className:"flex justify-end",children:(0,jsx_runtime.jsx)(components.$n,{children:"Send Message"})})]});ContactSection.__docgenInfo={description:"",methods:[],displayName:"ContactSection"};const CardContact=()=>(0,jsx_runtime.jsxs)("div",{className:"w-96 bg-white shadow-contact py-10 px-9 mb-10",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-5",children:[(0,jsx_runtime.jsx)(components.In,{src:"/icons-phone.svg",alt:"icon phone",width:40,height:40}),(0,jsx_runtime.jsx)("p",{className:"text-base font-medium",children:"Call To Us"})]}),(0,jsx_runtime.jsx)("p",{className:"my-6 text-sm",children:"We are available 24/7, 7 days a week."}),(0,jsx_runtime.jsx)("p",{className:"my-6 text-sm",children:(0,jsx_runtime.jsx)("a",{href:"tel:+8801611112222",children:"Phone: +8801611112222"})}),(0,jsx_runtime.jsx)("span",{className:"w-full h-px bg-gray-300 block"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-5 my-6",children:[(0,jsx_runtime.jsx)(components.In,{src:"/icons-mail.svg",alt:"icon mail",width:40,height:40}),(0,jsx_runtime.jsx)("p",{className:"text-base font-medium",children:"Write To US"})]}),(0,jsx_runtime.jsx)("p",{className:"my-6 text-sm",children:"Fill out our form and we will contact you within 24 hours."}),(0,jsx_runtime.jsx)("p",{className:"my-6 text-sm",children:(0,jsx_runtime.jsx)("a",{href:"mailto:customer@exclusive.com",children:"Emails: customer@exclusive.com"})}),(0,jsx_runtime.jsx)("p",{className:"my-6 text-sm",children:(0,jsx_runtime.jsx)("a",{href:"mailto:support@exclusive.com",children:"Emails: support@exclusive.com"})})]});CardContact.__docgenInfo={description:"",methods:[],displayName:"CardContact"};const ProductSection=async({query,isShowMore,visibleCount=4})=>{const param=query||"",{data:products,error}=await(0,libs.d$)(param),data=products.slice(0,visibleCount);return(0,jsx_runtime.jsx)("div",{className:"container my-20",children:error?(0,jsx_runtime.jsx)("p",{className:"text-center text-5xl text-primary",children:"Unable to load products! Try later"}):(0,jsx_runtime.jsx)(components.EL,{products:data,isShowMore,query:param,isDiscount:!0,isNewProduct:!0})})};ProductSection.__docgenInfo={description:"",methods:[],displayName:"ProductSection",props:{query:{required:!1,tsType:{name:"string"},description:""},isShowMore:{required:!1,tsType:{name:"boolean"},description:""},visibleCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};var clsx=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const ProductDetail=({product})=>{var _product_imageDetail,_product_sizes;const[color,setColor]=(0,react.useState)(product.colors[0]),[size,setSize]=(0,react.useState)(product.sizes?product.sizes[0]:"");return(0,jsx_runtime.jsxs)("section",{className:(0,clsx.$)("md:flex flex-wrap justify-center gap-10 container",constants.Q9.className),children:[(0,jsx_runtime.jsx)("div",{className:"lg:block hidden my-4 gap-6",children:null===(_product_imageDetail=product.imageDetail)||void 0===_product_imageDetail?void 0:_product_imageDetail.map(((item,index)=>(0,jsx_runtime.jsx)("div",{className:"bg-gray-light w-44 h-36 mb-5 flex justify-center items-center",children:(0,jsx_runtime.jsx)(next_image.A,{src:item,alt:"detail-img",width:120,height:120,objectFit:"contain",priority:!0})},index)))}),(0,jsx_runtime.jsx)("div",{className:"lg:w-card-detail lg:h-card-detail w-full h-[250px] bg-gray-light rounded-md flex justify-center items-center",children:(0,jsx_runtime.jsx)(next_image.A,{src:product.image,alt:product.name,width:446,height:315,objectFit:"contain",className:"lg:w-[446px] lg:h-[315px] w-[200px] h-[200px]",priority:!0})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"border-b border-dark",children:[(0,jsx_runtime.jsx)("h1",{className:(0,clsx.$)("font-semibold md:text-2xl text-base",constants.Tv.className),children:product.name}),(0,jsx_runtime.jsxs)("div",{className:"mt-4 flex items-center md:gap-5 gap-2",children:[(0,jsx_runtime.jsx)(components.GW,{count:product.ratings}),(0,jsx_runtime.jsxs)("p",{className:"text-gray-400 md:text-base text-xs",children:["(",product.reviewCount," Reviews)"]}),(0,jsx_runtime.jsx)("p",{className:"border-l border-gray-600 px-6 md:text-base text-xs text-success",children:"In Stock"})]}),(0,jsx_runtime.jsxs)("p",{className:(0,clsx.$)("md:text-2xl text-base my-5 text-gray-600",constants.Tv.className),children:["$",product.price]}),(0,jsx_runtime.jsx)("p",{className:"my-5 md:text-base text-xs",children:product.description})]}),(0,jsx_runtime.jsxs)("div",{className:"my-5",children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap-7 items-center",children:[(0,jsx_runtime.jsx)("p",{className:(0,clsx.$)("lg:text-2xl text-base my-5 text-gray-600",constants.Tv.className),children:"Colours:"}),(0,jsx_runtime.jsx)(components.sk,{colors:product.colors,onClick:()=>{},selectedColor:color})]}),product.sizes&&(0,jsx_runtime.jsxs)("div",{className:"my-5 flex gap-7 items-center",children:[(0,jsx_runtime.jsx)("p",{className:(0,clsx.$)("lg:text-2xl text-base my-5 text-gray-600",constants.Tv.className),children:"Size:"}),null===(_product_sizes=product.sizes)||void 0===_product_sizes?void 0:_product_sizes.map(((item,index)=>(0,jsx_runtime.jsx)(components.AC,{size:item,onClick:()=>{},selected:size},index)))]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap my-5 gap-5 items-center",children:[(0,jsx_runtime.jsx)(components.K2,{value:1,onChange:()=>{},max:product.stock}),(0,jsx_runtime.jsx)(components.$n,{size:constants.SK.MEDIUM,children:"Buy Now"}),(0,jsx_runtime.jsx)("div",{className:"w-10 h-10 border border-dark rounded-lg flex justify-center items-center",children:(0,jsx_runtime.jsx)(components.In,{src:"/heart.svg",alt:"heart-icon",width:32,height:32,onClick:()=>{}})})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-10 max-w-card-md h-full border border-dark rounded-md",children:[(0,jsx_runtime.jsxs)("div",{className:"border-b border-dark p-5 flex gap-5",children:[(0,jsx_runtime.jsx)(components.In,{src:"/ship-dark.svg",alt:"ship icon",width:40,height:40}),(0,jsx_runtime.jsxs)("div",{className:"flex-col gap-3",children:[(0,jsx_runtime.jsx)("p",{className:"font-medium text-xl",children:"Free Delivery"}),(0,jsx_runtime.jsx)("span",{className:"underline text-sm",children:"Enter your postal code for Delivery Availability"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"p-5 flex gap-5",children:[(0,jsx_runtime.jsx)(components.In,{src:"/return.svg",alt:"return icon",width:40,height:40}),(0,jsx_runtime.jsxs)("div",{className:"flex-col gap-3",children:[(0,jsx_runtime.jsx)("p",{className:"font-medium text-xl",children:"Return Delivery"}),(0,jsx_runtime.jsx)("span",{className:"underline text-sm",children:"Free 30 Days Delivery Returns. Details"})]})]})]})]})]})]})};ProductDetail.__docgenInfo={description:"",methods:[],displayName:"ProductDetail",props:{product:{required:!0,tsType:{name:"IProduct"},description:""}}};const AdvertisementSale=()=>(0,jsx_runtime.jsxs)("section",{className:"my-32 container flex justify-center gap-10",children:[(0,jsx_runtime.jsx)(components.MJ,{src:"/icon_shop.svg",alt:"icon shop",isBorder:!0,title:"10.5k",desc:"Sallers active our site"}),(0,jsx_runtime.jsx)(components.MJ,{src:"/icon-dola.svg",alt:"icon dola",isBorder:!0,title:"33k",desc:"Mopnthly Produduct Sale"}),(0,jsx_runtime.jsx)(components.MJ,{src:"/icon_bag.svg",alt:"icon bag",isBorder:!0,title:"45.5k",desc:"Customer active in our site"}),(0,jsx_runtime.jsx)(components.MJ,{src:"/icon_money.svg",alt:"icon money",isBorder:!0,title:"25k",desc:"Anual gross sale in our site"})]});AdvertisementSale.__docgenInfo={description:"",methods:[],displayName:"AdvertisementSale"};const ServiceSection=()=>(0,jsx_runtime.jsxs)("section",{className:"my-32 container flex justify-center gap-20",children:[(0,jsx_runtime.jsx)(components.MJ,{src:"/ship.svg",alt:"icon shop",title:"FREE AND FAST DELIVERY",desc:"Free delivery for all orders over $140"}),(0,jsx_runtime.jsx)(components.MJ,{src:"/services.svg",alt:"icon services",title:"24/7 CUSTOMER SERVICE",desc:"Friendly 24/7 customer support"}),(0,jsx_runtime.jsx)(components.MJ,{src:"/icon_secure.svg",alt:"icon secure",title:"MONEY BACK GUARANTEE",desc:"We reurn money within 30 days"})]});ServiceSection.__docgenInfo={description:"",methods:[],displayName:"ServiceSection"};const StorySection=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between gap-10",children:[(0,jsx_runtime.jsxs)("div",{className:"w-card-about",children:[(0,jsx_runtime.jsx)(components.DZ,{children:"Our Story"}),(0,jsx_runtime.jsx)("p",{className:"text-base mt-16",children:"Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region."}),(0,jsx_runtime.jsx)("p",{className:"text-base mt-10",children:"Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer."})]}),(0,jsx_runtime.jsx)(next_image.A,{src:"/about.png",alt:"about-image",width:705,height:609})]});StorySection.__docgenInfo={description:"",methods:[],displayName:"StorySection"};const CarouselStaff=({slides})=>{const[currentIndex,setCurrentIndex]=(0,react.useState)(0),totalSlides=Math.ceil(slides.length/3),currentSlides=slides.slice(3*currentIndex,3*currentIndex+3);return(0,jsx_runtime.jsxs)("section",{className:"overflow-hidden container",children:[(0,jsx_runtime.jsx)("div",{className:"flex gap-6 justify-center",children:currentSlides.map((staff=>(0,jsx_runtime.jsx)(components.tL,{image:staff.image,name:staff.name,desc:staff.desc},staff.id)))}),(0,jsx_runtime.jsx)("div",{className:"mt-4 flex justify-center gap-2",children:Array.from({length:totalSlides}).map(((_,index)=>(0,jsx_runtime.jsx)("button",{onClick:()=>setCurrentIndex(index),className:"w-3 h-3 rounded-full "+(index===currentIndex?"bg-gray-800":"bg-gray-300")},index)))})]})};CarouselStaff.__docgenInfo={description:"",methods:[],displayName:"CarouselStaff",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"CarouselInfoItem"}],raw:"CarouselInfoItem[]"},description:""}}};var navigation=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.3.4_esbuild@0.23.1_next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react_62ht4np6dwxllv75cec5frkuai/node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),next_link=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.53.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs");const s=(e,s,o)=>{if(e&&"reportValidity"in e){const r=(0,index_esm.Jt)(o,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},resolvers_o=(t,e)=>{for(const o in e.fields){const r=e.fields[o];r&&r.ref&&"reportValidity"in r.ref?s(r.ref,o,t):r.refs&&r.refs.forEach((e=>s(e,o,t)))}},resolvers_r=(s,r)=>{r.shouldUseNativeValidation&&resolvers_o(s,r);const f={};for(const o in s){const n=(0,index_esm.Jt)(r.fields,o),a=Object.assign(s[o]||{},{ref:n&&n.ref});if(i(r.names||Object.keys(s),o)){const s=Object.assign({},(0,index_esm.Jt)(f,o));(0,index_esm.hZ)(s,"root",a),(0,index_esm.hZ)(f,o,s)}else(0,index_esm.hZ)(f,o,a)}return f},i=(t,e)=>t.some((t=>t.startsWith(e+".")));var n=function(r,e){for(var n={};r.length;){var t=r[0],s=t.code,i=t.message,a=t.path.join(".");if(!n[a])if("unionErrors"in t){var u=t.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:s};if("unionErrors"in t&&t.unionErrors.forEach((function(e){return e.errors.forEach((function(e){return r.push(e)}))})),e){var c=n[a].types,f=c&&c[t.code];n[a]=(0,index_esm.Gb)(a,e,n,s,f?[].concat(f,t.message):t.message)}r.shift()}return n},t=function(o,t,s){return void 0===s&&(s={}),function(i,a,u){try{return Promise.resolve(function(e,n){try{var a=Promise.resolve(o["sync"===s.mode?"parse":"parseAsync"](i,t)).then((function(e){return u.shouldUseNativeValidation&&resolvers_o({},u),{errors:{},values:s.raw?i:e}}))}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,(function(r){if(function(r){return Array.isArray(null==r?void 0:r.errors)}(r))return{values:{},errors:resolvers_r(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)};throw r})))}catch(r){return Promise.reject(r)}}},bcrypt=__webpack_require__("./node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist/bcrypt.js"),bcrypt_default=__webpack_require__.n(bcrypt);const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}for(var byteToHex=[],stringify_i=0;stringify_i<256;++stringify_i)byteToHex.push((stringify_i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)},SignUpSection=()=>{const router=(0,navigation.useRouter)(),[formData,setFormData]=(0,react.useState)({id:"",firstName:"",lastName:"",email:"",password:"",avatar:"",address:"",phone:"",city:"",company:"",apartment:"",created_at:"",updated_at:""}),{control,handleSubmit,setError,formState:{isSubmitting}}=(0,index_esm.mN)({resolver:t(libs.Sd),defaultValues:formData});return(0,jsx_runtime.jsx)(components.T7,{title:"Create an account",subtitle:"Enter your details below",children:(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit((async data=>{if(await(0,libs.tz)(data.email))return void setError("email",{type:"manual",message:constants.XH.EMAIL_EXIST});const hashedPassword=await bcrypt_default().hash(data.password,10),newData={...data,id:esm_browser_v4(),password:hashedPassword,lastName:"",avatar:"",address:"",phone:"",city:"",company:"",apartment:"",create_at:new Date,update_at:new Date};setFormData(newData);(await(0,libs.nu)(newData)).data&&(setFormData(formData),setTimeout((()=>{router.push(constants.hv.HOME),router.refresh()}),2e3))})),children:[(0,jsx_runtime.jsx)("div",{className:"my-10",children:(0,jsx_runtime.jsx)(components.f,{name:"firstName",control,placeholder:"Name",variant:constants.ZE.SECOND})}),(0,jsx_runtime.jsx)("div",{className:"my-10",children:(0,jsx_runtime.jsx)(components.f,{name:"email",control,placeholder:"Email or Phone Number",variant:constants.ZE.SECOND})}),(0,jsx_runtime.jsx)("div",{className:"my-10",children:(0,jsx_runtime.jsx)(components.f,{name:"password",control,type:constants.Ih.PASSWORD,placeholder:"Password",variant:constants.ZE.SECOND})}),(0,jsx_runtime.jsx)(components.$n,{size:constants.SK.LARGE,disabled:isSubmitting,children:"Create Account"}),(0,jsx_runtime.jsx)("div",{className:"mt-5",children:(0,jsx_runtime.jsx)(components.$n,{size:constants.SK.LARGE,type:"submit",styles:"bg-white border border-dark",disabled:isSubmitting,children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center gap-5",children:[(0,jsx_runtime.jsx)(next_image.A,{src:"/icon-google.svg",alt:"icon google",width:24,height:24}),(0,jsx_runtime.jsx)("span",{className:"text-dark",children:"Sign up with Google"})]})})}),(0,jsx_runtime.jsx)("div",{className:"mt-10",children:(0,jsx_runtime.jsxs)("p",{className:"text-gray-600",children:["Already have account?",(0,jsx_runtime.jsx)(link_default(),{href:"/signIn",className:"border-b border-dark p-1 ml-2 text-dark",children:"Login"})]})})]})})};SignUpSection.__docgenInfo={description:"",methods:[],displayName:"SignUpSection"};const SignInSection=()=>{const router=(0,navigation.useRouter)(),{control,handleSubmit,formState:{isSubmitting}}=(0,index_esm.mN)({resolver:t(libs.aE),defaultValues:{email:"",password:""}});return(0,jsx_runtime.jsx)(components.T7,{title:"Log in to Exclusive",subtitle:"Enter your details below",children:(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit((async data=>{const{data:user,error}=await(0,libs.hk)(data.email,data.password);error||(router.push(constants.hv.HOME),router.refresh())})),children:[(0,jsx_runtime.jsx)("div",{className:"my-10",children:(0,jsx_runtime.jsx)(components.f,{name:"email",control,variant:constants.ZE.SECOND,type:constants.Ih.EMAIL,placeholder:"Email or Phone Number"})}),(0,jsx_runtime.jsx)("div",{className:"my-10",children:(0,jsx_runtime.jsx)(components.f,{name:"password",control,variant:constants.ZE.SECOND,placeholder:"Password"})}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center",children:[(0,jsx_runtime.jsx)(components.$n,{size:constants.SK.SMALL,children:"Login"}),(0,jsx_runtime.jsx)(link_default(),{href:"/signUp",className:"font-medium text-base text-primary",children:"Don't have an account?"})]})]})})};SignInSection.__docgenInfo={description:"",methods:[],displayName:"SignInSection"}}}]);