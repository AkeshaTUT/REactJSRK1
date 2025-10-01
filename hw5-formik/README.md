# Course Application Form

A fully functional course registration form built with React and Formik (without Yup).

## Features

- ✅ Complete form validation using Formik
- ✅ Required field validation (Full Name, Email, Password, Course, Gender, Date of Birth, City, Country)
- ✅ Optional fields (Phone, Education, Address, State, Zip Code)
- ✅ Email format validation
- ✅ Password length validation (minimum 6 characters)
- ✅ Real-time error messages displayed below each field
- ✅ Success alert with JSON-formatted data on valid submission
- ✅ Responsive design for mobile devices
- ✅ Clean, modern UI with bordered inputs and green submit button

## Form Fields

### Required Fields (*)
- **Full Name** - String, not empty - Error: "Full name is required"
- **Email** - Valid email format - Error: "Email is required" or "Invalid email address"
- **Password** - Minimum 6 characters - Error: "Password must be at least 6 characters"
- **Course** - Radio buttons (Course A / Course B / Course C) - Error: "Please select a course"
- **Gender** - Radio buttons (Male / Female) - Error: "Please select gender"
- **Date of Birth** - Date input - Error: "Date of birth is required"
- **City** - String, not empty - Error: "City is required"
- **Country** - Select dropdown with multiple countries - Error: "Country is required"

### Optional Fields
- **Phone** - Can be left empty
- **Education** - Select dropdown (School, College, University)
- **Address** - Textarea, optional
- **State** - Text input, optional
- **Zip Code** - Text input, optional

## Technologies Used

- React 18+
- Formik 2.4+
- React Scripts 5.0+
- CSS3 for styling

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
