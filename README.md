# mern-ReactApp

This is a aplication to manage a list of users. The app is built with React and Vite.
The app is connected to a backend server coded in Node.js and Express.

## Installation

Before running these commands, ensure you have `yarn` installed on your system. If not, you can install it by running `npm install --global yarn` (if you have NPM installed) or you can download Yarn from the official website.

1. **Install the dependencies**:
```bash
yarn install
```

2. **Run the app**:
```bash
yarn dev
```

3. **Run unit tests**:

To run the unit tests, you can run the following command:
```bash
yarn test
```
To run the tests and update the snapshots, you can run the following command:
```bash
yarn test -u
```

## Usage

The app will be running on `http://localhost:5173`. You can access it by opening your browser and typing this URL.

## Environment Variables

The app uses environment variables to configure the API URL and the API key. You can create a `.env` file in the root of the project and add the following variables:

```env
  [VITE_API_URL] - The URL of the backend server
  [VITE_API_KEY] - The API key to access the backend server
  [VITE_APP_NAME] - Passphrase to encrypt the JWT token
```

## Dependencies

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://www.npmjs.com/package/react-router-dom)
- [Testing Library](https://testing-library.com/)