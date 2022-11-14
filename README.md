# POC reac-pdf com typescript

Lib está dando erro no worker.
````
Error: Module.issuerThere was no ModuleGraph assigned to the Module for backward-compat (Use the new API)
    at /Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/compiled/webpack/bundle5.js:46163:12
    at deprecated (node:internal/util:124:12)
    at Function.getModuleGraphForModule (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/compiled/webpack/bundle5.js:46154:18)
    at NormalModule.get issuer [as issuer] (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/compiled/webpack/bundle5.js:43935:22)
    at findEntryModule (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/dev/hot-reloader.js:108:16)
    at erroredPages (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/dev/hot-reloader.js:119:29)
    at HotReloader.getCompilationErrors (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/dev/hot-reloader.js:637:33)
    at DevServer.getCompilationError (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/dev/next-dev-server.js:708:47)
    at DevServer.findPageComponents (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/dev/next-dev-server.js:665:43)
    at async DevServer.renderErrorToResponse (/Users/anaclaracampbell/Documents/poc-typescript/node_modules/next/dist/server/base-server.js:1147:26)
````
