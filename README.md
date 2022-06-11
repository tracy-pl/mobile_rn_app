# Tracy - Mobile app

## Development

### How to run locally
Install Node v16.14.0 (This repo uses a .nvm config, so if you're using [nvm](https://github.com/nvm-sh/nvm), 
you can run `nvm install` and/or `nvm use` to install the latest long-term support version of node).

``` bash
1. yarn install
2. cp .env.example .env
3. yarn start
```
The demo app will run on [http://localhost:19002](http://localhost:19002/)

### Directory Structure
        .
        ├── ...
        ├───assets/
        │   ├───fonts
        │   ├───images
        ├───src/
        │   ├───components
        │   ├───constants/
        |   │   ├───theme/
        |   │   │   ├───colors.ts
        |   │   │   ├───fontSizes.ts
        |   │   │   ├───fonts.ts
        |   │   │   ├───images.ts
        |   │   │   ├───index.ts
        |   │   │   └───sizes.ts
        │   ├───redux/
        │   │   ├───hooks/
        │   │   ├───slices/
        │   │   └───store.ts
        │   ├───routes/
        │   │   ├───navigation/
        │   │   ├───stacks/
        │   │   ├───Routes.tsx
        │   │   └───index.js
        │   ├───screens
        │   ├───services
        │   ├───types/
        │   │   └───models/
        │   ├───utils/
        |   │   ├───hooks
        │   ├───index.ts
        │   └───App.tsx
        ├───App.tsx
        .
        .                               # .env, app.config.js, metro.config.js, babel.config.js, package.json, .nvmrc,
        .                               # .eslintrc, .eslintignore, tsconfig.json, .gitignore, .watchmanconfig, etc...
        .
        └── README.md

