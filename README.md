# Hosted

At: https://jc-crypto.herokuapp.com/

## How to use

- Click 'Add Coin Pair'
- Choose two coins to compare the price
- A widget that you can delete should now be on the front page

## Explaination

- Technical Exercise for JungleCreations
- Uses the CryptoCompare API to fetch a list of tradable coins and their prices

- State Management with Redux
- Tested Using Jest
- Added the chrome extension to look into redux (Would remove if in production)

## To Do
- Theres some error catching that needs to be done
   - I'd like to disallow the coins from being added if its not a tradable pair (something i've only seen a few times)
   - ...or at least show an error

- Don't allow the same pair to be added twice
- Add more information on the homescreen as this information is already in the store
   - If there is the pair BTC/LTC, on hover it would be nice to see more information like how many are in ciruclation and market cap etc. which is something that should already be the store from the initial grab of all the coins.

- Add a Dehyrate and Rehydrate from the local storage
   - Add a user system (Would require a backend, may do this later)

- Would be nice to be able to move the widgets order

- Maybe add how many API calls the users has left for that day as a small notice in the corner.

## Building and Running

Run dev with `npm dev`

Build with `npm start`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
