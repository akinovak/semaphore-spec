"use strict";(self.webpackChunksemaphore_spec=self.webpackChunksemaphore_spec||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Usage",c={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"The Semaphore contract forms a base layer for other contracts to create",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/semaphore-spec/usage",editUrl:"https://github.com/akinovak/semaphore-spec/edit/main/docs/usage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/semaphore-spec/quickstart"},next:{title:"Contract API",permalink:"/semaphore-spec/contract-api"}},p=[{value:"Add, deactivate, or reactivate external nullifiiers",id:"add-deactivate-or-reactivate-external-nullifiiers",children:[]},{value:"Set broadcast permissioning",id:"set-broadcast-permissioning",children:[]},{value:"Insert identities",id:"insert-identities",children:[]},{value:"Broadcast signals",id:"broadcast-signals",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The Semaphore contract forms a base layer for other contracts to create\napplications that rely on anonymous signaling."),(0,i.kt)("p",null,"First, you should ensure that the proving key, verification key, and circuit\nfile, which are static, be easily available to your users. These may be hosted\nin a CDN or bundled with your application code."),(0,i.kt)("p",null,"The Semaphore team has not performed a trusted setup yet, so trustworthy\nversions of these files are not available yet."),(0,i.kt)("p",null,"Untrusted versions of these files, however, may be obtained via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"circuits/scripts/download_snarks.sh")," script."),(0,i.kt)("p",null,"Next, to have full flexibility over Semaphore's mechanisms, write a Client\ncontract and set the owner of the Semaphore contract as the address of the\nClient contract. You may also write a Client contract which deploys a Semaphore\ncontract in its constructor, or on the fly. "),(0,i.kt)("p",null,"With the Client contract as the owner of the Semaphore contract, the Client\ncontract may call owner-only Semaphore functions such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"addExternalNullifier()"),"."),(0,i.kt)("h2",{id:"add-deactivate-or-reactivate-external-nullifiiers"},"Add, deactivate, or reactivate external nullifiiers"),(0,i.kt)("p",null,"These functions add, deactivate, and reactivate an external nullifier respectively.\nAs each identity can only signal once to an external nullifier, and as a signal\ncan only be successfully broadcasted to an active external nullifier, these\nfunctions enable use cases where it is necessary to have multiple external\nnullifiers or to activate and/or deactivate them."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/to-mixers-and-beyond-presenting-semaphore-a-privacy-gadget-built-on-ethereum-4c8b00857c9b"},"high-level explanation of\nSemaphore"),"\nfor more details."),(0,i.kt)("h2",{id:"set-broadcast-permissioning"},"Set broadcast permissioning"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Semaphore.broadcastSignal()")," is permissioned by default, so if you\nwish for anyone to be able to broadcast a signal, the owner of the Semaphore\ncontract (either a Client contract or externally owned account) must first\ninvoke ",(0,i.kt)("inlineCode",{parentName:"p"},"setPermissioning(false)"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore/blob/master/contracts/sol/SemaphoreClient.sol"},"SemaphoreClient.sol")," for an example."),(0,i.kt)("h2",{id:"insert-identities"},"Insert identities"),(0,i.kt)("p",null,"To generate an identity commitment, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"libsemaphore")," functions\n",(0,i.kt)("inlineCode",{parentName:"p"},"genIdentity()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"genIdentityCommitment()")," Typescript (or Javascript)\nfunctions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const identity: Identity = genIdentity()\nconst identityCommitment = genIdentityCommitment(identity)\n")),(0,i.kt)("p",null,"Be sure to store ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," somewhere safe. The ",(0,i.kt)("inlineCode",{parentName:"p"},"serialiseIdentity()")," function\ncan help with this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"const serialisedId: string = serialiseIdentity(identity: Identity)")),(0,i.kt)("p",null,"It converts an ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," into a JSON string which looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'["e82cc2b8654705e427df423c6300307a873a2e637028fab3163cf95b18bb172e","a02e517dfb3a4184adaa951d02bfe0fe092d1ee34438721d798db75b8db083","15c6540bf7bddb0616984fccda7e954a0fb5ea4679ac686509dc4bd7ba9c3b"]\n')),(0,i.kt)("p",null,"To convert this string back into an ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"unSerialiseIdentity()"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"const id: Identity = unSerialiseIdentity(serialisedId)")),(0,i.kt)("h2",{id:"broadcast-signals"},"Broadcast signals"),(0,i.kt)("p",null,"First obtain the leaves of the identity tree (in sequence, up to the user's\nidentity commitment, or more)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const leaves = <list of leaves>\n")),(0,i.kt)("p",null,"Next, load the circuit from disk (or from a remote source):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const circuitPath = path.join(__dirname, '/path/to/circuit.json')\nconst cirDef = JSON.parse(fs.readFileSync(circuitPath).toString())\nconst circuit = genCircuit(cirDef)\n")),(0,i.kt)("p",null,"Next, use ",(0,i.kt)("inlineCode",{parentName:"p"},"libsemaphore"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"genWitness()")," helper function as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const result = await genWitness(\n    signal,\n    circuit,\n    identity,\n    leaves,\n    num_levels,\n    external_nullifier,\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signal"),": a string which is the signal to broadcast."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"circuit"),": the output of ",(0,i.kt)("inlineCode",{parentName:"li"},"genCircuit()")," (see above)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identity"),": the user's identity as an ",(0,i.kt)("inlineCode",{parentName:"li"},"Identity")," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"leaves")," the list of leaves in the tree (see above)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_levels"),": the depth of the Merkle tree."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"external_nullifier"),": the external nullifier at which to broadcast.")),(0,i.kt)("p",null,"Load the proving key from disk (or from a remote source):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const provingKeyPath = path.join(__dirname, '/path/to/proving_key.bin')\nconst provingKey: SnarkProvingKey = fs.readFileSync(provingKeyPath)\n")),(0,i.kt)("p",null,"Generate the proof (this takes about 30-45 seconds on a modern laptop):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const proof = await genProof(result.witness, provingKey)\n")),(0,i.kt)("p",null,"Generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastSignal()")," parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const publicSignals = genPublicSignals(result.witness, circuit)\nconst params = genBroadcastSignalParams(result, proof, publicSignals)\n")),(0,i.kt)("p",null,"Finally, invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastSignal()")," with the parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const tx = await semaphoreClientContract.broadcastSignal(\n    ethers.utils.toUtf8Bytes(signal),\n    params.proof,\n    params.root,\n    params.nullifiersHash,\n    external_nullifier,\n    { gasLimit: 500000 },\n)\n")))}d.isMDXComponent=!0}}]);