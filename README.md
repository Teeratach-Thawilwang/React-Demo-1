#### 1. Create Project

```sh
    // node v21.1.0, npm v10.2.3
    npm create vite@latest <ProjectName> -- --template react-ts
```

#### 2. Install Package

```sh
    npm install
    npm install styled-components @types/styled-components
    npm install @reduxjs/toolkit
    npm install redux-persist
    npm install react-redux @types/react-redux
    npm install react-router-dom
    npm install --save-dev prettier @trivago/prettier-plugin-sort-imports
    npm install swiper
    npm install axios
```

#### 3. Install Dev tool on browser

    - Redux DevTools

#### 4. Install VScode Extension

    - Typescript React code snippets
    - vscode-styled-components

#### 5. Config Alias Path

```sh
    # tsconfig.json
    "types": ["node"]

    ## inside compilerOptions of tsconfig.json
    "baseUrl": "./src",
    "paths": {
      "@store/*": ["store/*"],
      ...
    }

    # vite.config.ts
    import path from "path";

    resolve: {
        alias: {
        "@store": path.resolve(__dirname, "./src/store"),
        ...
        },
    },

    # Example Usage
    import store from "@store/store";
```
