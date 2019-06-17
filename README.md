# LateRooms - Tech Task - Sam Fullen
The technical task for LateRooms, by Sam Fullen.

## Getting Started
### Prerequisites
- You must have a recent version of Node JS installed on your machine [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- You must also have npm installed on your machine [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
- You must have git installed on your machine to clone the repository
### Clone the repository [https://github.com/Sfullen96/laterooms-tech-task](https://github.com/Sfullen96/laterooms-tech-task)
`git clone https://github.com/Sfullen96/laterooms-tech-task.git`
### Navigate into the folder
```
cd laterooms-tech-task
```
### Install the node modules
```
npm install
```
### Run the start script
```
npm run start
```
---
## Built With
- [React JS](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- HTML/CSS/Jsx
- [SASS](https://sass-lang.com/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) (with react-bootstrap [node module](https://react-bootstrap.netlify.com/))
- [Jest](https://jestjs.io/)
- [Enzyme](https://github.com/airbnb/enzyme) - For shallow render testing and snapshot tests
- [ESLint](https://eslint.org/) - Using the prettier and AirBnb configs
- [Prettier](https://prettier.io/)
- [Prop Types](https://www.npmjs.com/package/prop-types)
- [Chai](https://www.chaijs.com/)
---
## Directory Structure
- All source code can be found in the /src directory
- The /src/components holds all components
- `/src/__tests__` contains all tests
- `/src/index.js` - The applications entry point
- `/src/App.js` - The main component

## Running tests
- `npm run test` - Tests may cache and it therefore might tell you there are no tests to run, if you see this message just press 'a'
- `npm run lint` to check there's no ESlint issues