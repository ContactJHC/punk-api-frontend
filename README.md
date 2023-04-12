# Punk-api-frontend

- ![Author](<https://img.shields.io/badge/Author-Jules @contactJHC-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/ContactJHC/punk-api-frontend>)  
![GitHub top language](https://img.shields.io/github/languages/top/ContactJHC/punk-api-frontend)
![GitHub language count](https://img.shields.io/github/languages/count/ContactJHC/punk-api-frontend)

## Frontend

### General information

This repo contains all the source code of the front-end application that uses the punk API to display and filter the available beers.

### Prerequisites

- A text editor like `VSCode, Vim, IntelliJ...`
- [Node.js <= v.18.10.0](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Project setup

- Clone the repo on your computer.

````bash
git clone https://github.com/ContactJHC/punk-api-frontend.git
````

- Package installations after cloning.

```bash
# with NPM
npm install
# with Yarn
yarn
```

- Start the application

```bash
npm run start
# or
npm start
# with Yarn
yarn start
```

### Added dependencies

- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/ContactJHC/punk-api-frontend/react)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/ContactJHC/punk-api-frontend/prop-types)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/ContactJHC/punk-api-frontend/react-router-dom)

---
dev dependencies:

- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/ContactJHC/punk-api-frontend/dev/jsdoc)

To generate the documentation, open a terminal and type :

```bash
jsdoc -c jsdoc.json
```

To view it, go to `/docs` and open `global.html`.

## Backend

[API Documentation](https://punkapi.com/documentation/v2)