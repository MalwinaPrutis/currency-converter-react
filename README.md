# # CURRENCY CONVERTER

This project was bootstrapped with Create React App.

![Currency Calculator](./images/opengraph.png)

## Demo

https://malwinaprutis.github.io/currency-converter-react/

## Description

![Animacja](./images/Currency%20Converter%20Animation.gif)

Welcome 😊 This currency converter will allow you to easily and quickly convert 162 current currencies. You can select the language Polish or English by clicking on the flag.
The calculator is always up to date.

## Developer Details:

Styled-Components: All components are styled using the styled-components library from NPM.

ThemeProvider: The entire app is wrapped in a ThemeProvider with themes for colors, box-shadows, and breakpoints for max-width.

Themes: The theme has elements that differ for dark and light modes. Shared elements are placed in a baseTheme object, which is extended by both lightTheme and darkTheme.

Global Styles: An alternative box model is defined in GlobalStyle.

Hooks Used:

useState

useEffect

Custom Hooks:

useCurrentDate

useThemeSelector

useGetDataFromAPI

useResultUpdate

Time Setting: By combining useEffect, setInterval, and clearInterval, an interval is created to update the date and clock every second if the Clock component exists. If not, the interval is immediately cleared, optimizing efficiency.

API for Currencies and Rates: Data is fetched from an API (free version up to 1,500 requests). Before the data is fetched, a loading screen appears (with a 2-second timeout to ensure it doesn't disappear immediately). If there's any error, a custom user-friendly error screen is displayed.

Language Support: Libraries i18next and react-i18next are used to change the website's language.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
