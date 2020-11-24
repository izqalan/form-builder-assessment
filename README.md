[![Live Demo](https://img.shields.io/badge/Live-Demo-orange)](https://form-builder-assessment.vercel.app/) 

## Technical Stack
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" height="20px" width="20px"> **JavaScript Web framework of choice**

<img src="https://avatars3.githubusercontent.com/u/67109815?s=200&v=4" height="20px" width="20px"> **TailwindCss - utility CSS framework**

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" height="20px" width="20px"> **State management of choice**

# Form Builder

### widescreen view
![full screen view](https://github.com/izqalan/form-builder-assessment/blob/master/designs/main_screen.png)

### mobile view
![main mobile screen](https://github.com/izqalan/form-builder-assessment/blob/master/designs/main_mobile.png)
![form mobile screen](https://github.com/izqalan/form-builder-assessment/blob/master/designs/form_mobile.png)

## Project Structure
```
├── craco.config.js
├── designs
│   ├── form_mobile.png
│   ├── main_mobile.png
│   └── main_screen.png
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Card
│   │   │   └── ListCard.js
│   │   ├── FormBuilder
│   │   │   └── index.js
│   │   └── FormView
│   │       └── index.js
│   ├── index.js
│   ├── redux
│   │   └── formBuilder
│   │       └── index.js
│   ├── store
│   │   └── store.js
│   └── styles
│       ├── app.css
│       └── tailwind.css
├── tailwind.config.js
└── yarn.lock
```
## Installation
`yarn install` to install project dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

