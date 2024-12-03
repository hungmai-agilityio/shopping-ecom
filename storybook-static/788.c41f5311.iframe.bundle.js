"use strict";(self.webpackChunkshopping_ecom=self.webpackChunkshopping_ecom||[]).push([[788],{"./node_modules/.pnpm/@tanstack+react-query@5.62.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var Subscribable=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(listener){return this.listeners.add(listener),this.onSubscribe(),()=>{this.listeners.delete(listener),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},isServer="undefined"==typeof window||"Deno"in globalThis;function noop(){}function isValidTimeout(value){return"number"==typeof value&&value>=0&&value!==1/0}function timeUntilStale(updatedAt,staleTime){return Math.max(updatedAt+(staleTime||0)-Date.now(),0)}function resolveStaleTime(staleTime,query){return"function"==typeof staleTime?staleTime(query):staleTime}function resolveEnabled(enabled,query){return"function"==typeof enabled?enabled(query):enabled}function replaceEqualDeep(a,b){if(a===b)return a;const array=isPlainArray(a)&&isPlainArray(b);if(array||isPlainObject(a)&&isPlainObject(b)){const aItems=array?a:Object.keys(a),aSize=aItems.length,bItems=array?b:Object.keys(b),bSize=bItems.length,copy=array?[]:{};let equalItems=0;for(let i=0;i<bSize;i++){const key=array?i:bItems[i];(!array&&aItems.includes(key)||array)&&void 0===a[key]&&void 0===b[key]?(copy[key]=void 0,equalItems++):(copy[key]=replaceEqualDeep(a[key],b[key]),copy[key]===a[key]&&void 0!==a[key]&&equalItems++)}return aSize===bSize&&equalItems===aSize?a:copy}return b}function shallowEqualObjects(a,b){if(!b||Object.keys(a).length!==Object.keys(b).length)return!1;for(const key in a)if(a[key]!==b[key])return!1;return!0}function isPlainArray(value){return Array.isArray(value)&&value.length===Object.keys(value).length}function isPlainObject(o){if(!hasObjectPrototype(o))return!1;const ctor=o.constructor;if(void 0===ctor)return!0;const prot=ctor.prototype;return!!hasObjectPrototype(prot)&&(!!prot.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(o)===Object.prototype)}function hasObjectPrototype(o){return"[object Object]"===Object.prototype.toString.call(o)}function replaceData(prevData,data,options){return"function"==typeof options.structuralSharing?options.structuralSharing(prevData,data):!1!==options.structuralSharing?replaceEqualDeep(prevData,data):data}Symbol();var focusManager=new class extends Subscribable{#focused;#cleanup;#setup;constructor(){super(),this.#setup=onFocus=>{if(!isServer&&window.addEventListener){const listener=()=>onFocus();return window.addEventListener("visibilitychange",listener,!1),()=>{window.removeEventListener("visibilitychange",listener)}}}}onSubscribe(){this.#cleanup||this.setEventListener(this.#setup)}onUnsubscribe(){this.hasListeners()||(this.#cleanup?.(),this.#cleanup=void 0)}setEventListener(setup){this.#setup=setup,this.#cleanup?.(),this.#cleanup=setup((focused=>{"boolean"==typeof focused?this.setFocused(focused):this.onFocus()}))}setFocused(focused){this.#focused!==focused&&(this.#focused=focused,this.onFocus())}onFocus(){const isFocused=this.isFocused();this.listeners.forEach((listener=>{listener(isFocused)}))}isFocused(){return"boolean"==typeof this.#focused?this.#focused:"hidden"!==globalThis.document?.visibilityState}};var notifyManager=function createNotifyManager(){let queue=[],transactions=0,notifyFn=callback=>{callback()},batchNotifyFn=callback=>{callback()},scheduleFn=cb=>setTimeout(cb,0);const schedule=callback=>{transactions?queue.push(callback):scheduleFn((()=>{notifyFn(callback)}))};return{batch:callback=>{let result;transactions++;try{result=callback()}finally{transactions--,transactions||(()=>{const originalQueue=queue;queue=[],originalQueue.length&&scheduleFn((()=>{batchNotifyFn((()=>{originalQueue.forEach((callback=>{notifyFn(callback)}))}))}))})()}return result},batchCalls:callback=>(...args)=>{schedule((()=>{callback(...args)}))},schedule,setNotifyFunction:fn=>{notifyFn=fn},setBatchNotifyFunction:fn=>{batchNotifyFn=fn},setScheduler:fn=>{scheduleFn=fn}}}(),onlineManager=new class extends Subscribable{#online=!0;#cleanup;#setup;constructor(){super(),this.#setup=onOnline=>{if(!isServer&&window.addEventListener){const onlineListener=()=>onOnline(!0),offlineListener=()=>onOnline(!1);return window.addEventListener("online",onlineListener,!1),window.addEventListener("offline",offlineListener,!1),()=>{window.removeEventListener("online",onlineListener),window.removeEventListener("offline",offlineListener)}}}}onSubscribe(){this.#cleanup||this.setEventListener(this.#setup)}onUnsubscribe(){this.hasListeners()||(this.#cleanup?.(),this.#cleanup=void 0)}setEventListener(setup){this.#setup=setup,this.#cleanup?.(),this.#cleanup=setup(this.setOnline.bind(this))}setOnline(online){this.#online!==online&&(this.#online=online,this.listeners.forEach((listener=>{listener(online)})))}isOnline(){return this.#online}};function pendingThenable(){let resolve,reject;const thenable=new Promise(((_resolve,_reject)=>{resolve=_resolve,reject=_reject}));function finalize(data){Object.assign(thenable,data),delete thenable.resolve,delete thenable.reject}return thenable.status="pending",thenable.catch((()=>{})),thenable.resolve=value=>{finalize({status:"fulfilled",value}),resolve(value)},thenable.reject=reason=>{finalize({status:"rejected",reason}),reject(reason)},thenable}function canFetch(networkMode){return"online"!==(networkMode??"online")||onlineManager.isOnline()}Error;function fetchState(data,options){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:canFetch(options.networkMode)?"fetching":"paused",...void 0===data&&{error:null,status:"pending"}}}var QueryObserver=class extends Subscribable{constructor(client,options){super(),this.options=options,this.#client=client,this.#selectError=null,this.#currentThenable=pendingThenable(),this.options.experimental_prefetchInRender||this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(options)}#client;#currentQuery=void 0;#currentQueryInitialState=void 0;#currentResult=void 0;#currentResultState;#currentResultOptions;#currentThenable;#selectError;#selectFn;#selectResult;#lastQueryWithDefinedData;#staleTimeoutId;#refetchIntervalId;#currentRefetchInterval;#trackedProps=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#currentQuery.addObserver(this),shouldFetchOnMount(this.#currentQuery,this.options)?this.#executeFetch():this.updateResult(),this.#updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#clearStaleTimeout(),this.#clearRefetchInterval(),this.#currentQuery.removeObserver(this)}setOptions(options,notifyOptions){const prevOptions=this.options,prevQuery=this.#currentQuery;if(this.options=this.#client.defaultQueryOptions(options),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof resolveEnabled(this.options.enabled,this.#currentQuery))throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#updateQuery(),this.#currentQuery.setOptions(this.options),prevOptions._defaulted&&!shallowEqualObjects(this.options,prevOptions)&&this.#client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#currentQuery,observer:this});const mounted=this.hasListeners();mounted&&shouldFetchOptionally(this.#currentQuery,prevQuery,this.options,prevOptions)&&this.#executeFetch(),this.updateResult(notifyOptions),!mounted||this.#currentQuery===prevQuery&&resolveEnabled(this.options.enabled,this.#currentQuery)===resolveEnabled(prevOptions.enabled,this.#currentQuery)&&resolveStaleTime(this.options.staleTime,this.#currentQuery)===resolveStaleTime(prevOptions.staleTime,this.#currentQuery)||this.#updateStaleTimeout();const nextRefetchInterval=this.#computeRefetchInterval();!mounted||this.#currentQuery===prevQuery&&resolveEnabled(this.options.enabled,this.#currentQuery)===resolveEnabled(prevOptions.enabled,this.#currentQuery)&&nextRefetchInterval===this.#currentRefetchInterval||this.#updateRefetchInterval(nextRefetchInterval)}getOptimisticResult(options){const query=this.#client.getQueryCache().build(this.#client,options),result=this.createResult(query,options);return function shouldAssignObserverCurrentProperties(observer,optimisticResult){if(!shallowEqualObjects(observer.getCurrentResult(),optimisticResult))return!0;return!1}(this,result)&&(this.#currentResult=result,this.#currentResultOptions=this.options,this.#currentResultState=this.#currentQuery.state),result}getCurrentResult(){return this.#currentResult}trackResult(result,onPropTracked){const trackedResult={};return Object.keys(result).forEach((key=>{Object.defineProperty(trackedResult,key,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(key),onPropTracked?.(key),result[key])})})),trackedResult}trackProp(key){this.#trackedProps.add(key)}getCurrentQuery(){return this.#currentQuery}refetch({...options}={}){return this.fetch({...options})}fetchOptimistic(options){const defaultedOptions=this.#client.defaultQueryOptions(options),query=this.#client.getQueryCache().build(this.#client,defaultedOptions);return query.fetch().then((()=>this.createResult(query,defaultedOptions)))}fetch(fetchOptions){return this.#executeFetch({...fetchOptions,cancelRefetch:fetchOptions.cancelRefetch??!0}).then((()=>(this.updateResult(),this.#currentResult)))}#executeFetch(fetchOptions){this.#updateQuery();let promise=this.#currentQuery.fetch(this.options,fetchOptions);return fetchOptions?.throwOnError||(promise=promise.catch(noop)),promise}#updateStaleTimeout(){this.#clearStaleTimeout();const staleTime=resolveStaleTime(this.options.staleTime,this.#currentQuery);if(isServer||this.#currentResult.isStale||!isValidTimeout(staleTime))return;const timeout=timeUntilStale(this.#currentResult.dataUpdatedAt,staleTime)+1;this.#staleTimeoutId=setTimeout((()=>{this.#currentResult.isStale||this.updateResult()}),timeout)}#computeRefetchInterval(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#currentQuery):this.options.refetchInterval)??!1}#updateRefetchInterval(nextInterval){this.#clearRefetchInterval(),this.#currentRefetchInterval=nextInterval,!isServer&&!1!==resolveEnabled(this.options.enabled,this.#currentQuery)&&isValidTimeout(this.#currentRefetchInterval)&&0!==this.#currentRefetchInterval&&(this.#refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||focusManager.isFocused())&&this.#executeFetch()}),this.#currentRefetchInterval))}#updateTimers(){this.#updateStaleTimeout(),this.#updateRefetchInterval(this.#computeRefetchInterval())}#clearStaleTimeout(){this.#staleTimeoutId&&(clearTimeout(this.#staleTimeoutId),this.#staleTimeoutId=void 0)}#clearRefetchInterval(){this.#refetchIntervalId&&(clearInterval(this.#refetchIntervalId),this.#refetchIntervalId=void 0)}createResult(query,options){const prevQuery=this.#currentQuery,prevOptions=this.options,prevResult=this.#currentResult,prevResultState=this.#currentResultState,prevResultOptions=this.#currentResultOptions,queryInitialState=query!==prevQuery?query.state:this.#currentQueryInitialState,{state}=query;let data,newState={...state},isPlaceholderData=!1;if(options._optimisticResults){const mounted=this.hasListeners(),fetchOnMount=!mounted&&shouldFetchOnMount(query,options),fetchOptionally=mounted&&shouldFetchOptionally(query,prevQuery,options,prevOptions);(fetchOnMount||fetchOptionally)&&(newState={...newState,...fetchState(state.data,query.options)}),"isRestoring"===options._optimisticResults&&(newState.fetchStatus="idle")}let{error,errorUpdatedAt,status}=newState;if(options.select&&void 0!==newState.data)if(prevResult&&newState.data===prevResultState?.data&&options.select===this.#selectFn)data=this.#selectResult;else try{this.#selectFn=options.select,data=options.select(newState.data),data=replaceData(prevResult?.data,data,options),this.#selectResult=data,this.#selectError=null}catch(selectError){this.#selectError=selectError}else data=newState.data;if(void 0!==options.placeholderData&&void 0===data&&"pending"===status){let placeholderData;if(prevResult?.isPlaceholderData&&options.placeholderData===prevResultOptions?.placeholderData)placeholderData=prevResult.data;else if(placeholderData="function"==typeof options.placeholderData?options.placeholderData(this.#lastQueryWithDefinedData?.state.data,this.#lastQueryWithDefinedData):options.placeholderData,options.select&&void 0!==placeholderData)try{placeholderData=options.select(placeholderData),this.#selectError=null}catch(selectError){this.#selectError=selectError}void 0!==placeholderData&&(status="success",data=replaceData(prevResult?.data,placeholderData,options),isPlaceholderData=!0)}this.#selectError&&(error=this.#selectError,data=this.#selectResult,errorUpdatedAt=Date.now(),status="error");const isFetching="fetching"===newState.fetchStatus,isPending="pending"===status,isError="error"===status,isLoading=isPending&&isFetching,hasData=void 0!==data,nextResult={status,fetchStatus:newState.fetchStatus,isPending,isSuccess:"success"===status,isError,isInitialLoading:isLoading,isLoading,data,dataUpdatedAt:newState.dataUpdatedAt,error,errorUpdatedAt,failureCount:newState.fetchFailureCount,failureReason:newState.fetchFailureReason,errorUpdateCount:newState.errorUpdateCount,isFetched:newState.dataUpdateCount>0||newState.errorUpdateCount>0,isFetchedAfterMount:newState.dataUpdateCount>queryInitialState.dataUpdateCount||newState.errorUpdateCount>queryInitialState.errorUpdateCount,isFetching,isRefetching:isFetching&&!isPending,isLoadingError:isError&&!hasData,isPaused:"paused"===newState.fetchStatus,isPlaceholderData,isRefetchError:isError&&hasData,isStale:isStale(query,options),refetch:this.refetch,promise:this.#currentThenable};if(this.options.experimental_prefetchInRender){const finalizeThenableIfPossible=thenable=>{"error"===nextResult.status?thenable.reject(nextResult.error):void 0!==nextResult.data&&thenable.resolve(nextResult.data)},recreateThenable=()=>{const pending=this.#currentThenable=nextResult.promise=pendingThenable();finalizeThenableIfPossible(pending)},prevThenable=this.#currentThenable;switch(prevThenable.status){case"pending":query.queryHash===prevQuery.queryHash&&finalizeThenableIfPossible(prevThenable);break;case"fulfilled":"error"!==nextResult.status&&nextResult.data===prevThenable.value||recreateThenable();break;case"rejected":"error"===nextResult.status&&nextResult.error===prevThenable.reason||recreateThenable()}}return nextResult}updateResult(notifyOptions){const prevResult=this.#currentResult,nextResult=this.createResult(this.#currentQuery,this.options);if(this.#currentResultState=this.#currentQuery.state,this.#currentResultOptions=this.options,void 0!==this.#currentResultState.data&&(this.#lastQueryWithDefinedData=this.#currentQuery),shallowEqualObjects(nextResult,prevResult))return;this.#currentResult=nextResult;const defaultNotifyOptions={};!1!==notifyOptions?.listeners&&(()=>{if(!prevResult)return!0;const{notifyOnChangeProps}=this.options,notifyOnChangePropsValue="function"==typeof notifyOnChangeProps?notifyOnChangeProps():notifyOnChangeProps;if("all"===notifyOnChangePropsValue||!notifyOnChangePropsValue&&!this.#trackedProps.size)return!0;const includedProps=new Set(notifyOnChangePropsValue??this.#trackedProps);return this.options.throwOnError&&includedProps.add("error"),Object.keys(this.#currentResult).some((key=>{const typedKey=key;return this.#currentResult[typedKey]!==prevResult[typedKey]&&includedProps.has(typedKey)}))})()&&(defaultNotifyOptions.listeners=!0),this.#notify({...defaultNotifyOptions,...notifyOptions})}#updateQuery(){const query=this.#client.getQueryCache().build(this.#client,this.options);if(query===this.#currentQuery)return;const prevQuery=this.#currentQuery;this.#currentQuery=query,this.#currentQueryInitialState=query.state,this.hasListeners()&&(prevQuery?.removeObserver(this),query.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#updateTimers()}#notify(notifyOptions){notifyManager.batch((()=>{notifyOptions.listeners&&this.listeners.forEach((listener=>{listener(this.#currentResult)})),this.#client.getQueryCache().notify({query:this.#currentQuery,type:"observerResultsUpdated"})}))}};function shouldFetchOnMount(query,options){return function shouldLoadOnMount(query,options){return!1!==resolveEnabled(options.enabled,query)&&void 0===query.state.data&&!("error"===query.state.status&&!1===options.retryOnMount)}(query,options)||void 0!==query.state.data&&shouldFetchOn(query,options,options.refetchOnMount)}function shouldFetchOn(query,options,field){if(!1!==resolveEnabled(options.enabled,query)){const value="function"==typeof field?field(query):field;return"always"===value||!1!==value&&isStale(query,options)}return!1}function shouldFetchOptionally(query,prevQuery,options,prevOptions){return(query!==prevQuery||!1===resolveEnabled(prevOptions.enabled,query))&&(!options.suspense||"error"!==query.state.status)&&isStale(query,options)}function isStale(query,options){return!1!==resolveEnabled(options.enabled,query)&&query.isStaleByTime(resolveStaleTime(options.staleTime,query))}var react=__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),QueryClientContext=(__webpack_require__("./node_modules/.pnpm/next@14.2.13_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react.createContext(void 0)),useQueryClient=queryClient=>{const client=react.useContext(QueryClientContext);if(queryClient)return queryClient;if(!client)throw new Error("No QueryClient set, use QueryClientProvider to set one");return client};function createValue(){let isReset=!1;return{clearReset:()=>{isReset=!1},reset:()=>{isReset=!0},isReset:()=>isReset}}var QueryErrorResetBoundaryContext=react.createContext(createValue()),useQueryErrorResetBoundary=()=>react.useContext(QueryErrorResetBoundaryContext);function utils_noop(){}var ensurePreventErrorBoundaryRetry=(options,errorResetBoundary)=>{(options.suspense||options.throwOnError||options.experimental_prefetchInRender)&&(errorResetBoundary.isReset()||(options.retryOnMount=!1))},useClearResetErrorBoundary=errorResetBoundary=>{react.useEffect((()=>{errorResetBoundary.clearReset()}),[errorResetBoundary])},getHasError=({result,errorResetBoundary,throwOnError,query})=>result.isError&&!errorResetBoundary.isReset()&&!result.isFetching&&query&&function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}(throwOnError,[result.error,query]),IsRestoringContext=react.createContext(!1),useIsRestoring=()=>react.useContext(IsRestoringContext),ensureSuspenseTimers=(IsRestoringContext.Provider,defaultedOptions=>{defaultedOptions.suspense&&(void 0===defaultedOptions.staleTime&&(defaultedOptions.staleTime=1e3),"number"==typeof defaultedOptions.gcTime&&(defaultedOptions.gcTime=Math.max(defaultedOptions.gcTime,1e3)))}),willFetch=(result,isRestoring)=>result.isLoading&&result.isFetching&&!isRestoring,shouldSuspend=(defaultedOptions,result)=>defaultedOptions?.suspense&&result.isPending,fetchOptimistic=(defaultedOptions,observer,errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch((()=>{errorResetBoundary.clearReset()}));function useQuery(options,queryClient){return function useBaseQuery(options,Observer,queryClient){const client=useQueryClient(queryClient),isRestoring=useIsRestoring(),errorResetBoundary=useQueryErrorResetBoundary(),defaultedOptions=client.defaultQueryOptions(options);client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions),defaultedOptions._optimisticResults=isRestoring?"isRestoring":"optimistic",ensureSuspenseTimers(defaultedOptions),ensurePreventErrorBoundaryRetry(defaultedOptions,errorResetBoundary),useClearResetErrorBoundary(errorResetBoundary);const isNewCacheEntry=!client.getQueryCache().get(defaultedOptions.queryHash),[observer]=react.useState((()=>new Observer(client,defaultedOptions))),result=observer.getOptimisticResult(defaultedOptions);if(react.useSyncExternalStore(react.useCallback((onStoreChange=>{const unsubscribe=isRestoring?utils_noop:observer.subscribe(notifyManager.batchCalls(onStoreChange));return observer.updateResult(),unsubscribe}),[observer,isRestoring]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),react.useEffect((()=>{observer.setOptions(defaultedOptions,{listeners:!1})}),[defaultedOptions,observer]),shouldSuspend(defaultedOptions,result))throw fetchOptimistic(defaultedOptions,observer,errorResetBoundary);if(getHasError({result,errorResetBoundary,throwOnError:defaultedOptions.throwOnError,query:client.getQueryCache().get(defaultedOptions.queryHash)}))throw result.error;if(client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions,result),defaultedOptions.experimental_prefetchInRender&&!isServer&&willFetch(result,isRestoring)){const promise=isNewCacheEntry?fetchOptimistic(defaultedOptions,observer,errorResetBoundary):client.getQueryCache().get(defaultedOptions.queryHash)?.promise;promise?.catch(utils_noop).finally((()=>{observer.updateResult()}))}return defaultedOptions.notifyOnChangeProps?result:observer.trackResult(result)}(options,QueryObserver,queryClient)}}}]);