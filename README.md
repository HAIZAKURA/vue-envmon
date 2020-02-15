# Completed!!!
# vue-envmon
## Only front-end GUI

### Developed with (front-end)
```
Electron + Vue.js + Element UI
```

## back-end Server (will not to be presented)
```
.
├── MongoDB  //System's Database.
│   └── envmon
|       ├── users
|       ├── cards
|       ├── sign
|       ├── data
|       └── cardRcc
|
├── Node.js  //The tool to communicate with database.
|   ├── user
|   ├── card
|   ├── sign
|   ├── data
|   └── cardRcc
|
└── Python  // The tool to communicate with device.
    ├── serverRes  // The module to communicate by ModBus RTU.
    └── accCon // The door access control module.
```

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn run electron:serve
```

### Compiles and minifies for production
```
yarn run electron:build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
