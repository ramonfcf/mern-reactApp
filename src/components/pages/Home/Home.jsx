const Home = () => {
  return (
    <div className="container py-5">
      <div className="container mt-5">
        <h1 className="mb-4">mern-ReactApp</h1>
        <p>
          This is an application to manage a list of users. It was built using react and the Vite.js framework.
        </p>
        <p>
          The app is connected to a backend server coded in Node.js and Express.
        </p>

        <h2 className="mt-5">Installation</h2>
        <ol>
          <li>
            Install the dependencies:
            <pre>
              <code>yarn install</code>
            </pre>
          </li>
          <li>
            Run the app:
            <pre>
              <code>yarn dev</code>
            </pre>
          </li>
          <li>
            Run unit tests:
            <pre>
              <code>yarn test</code>
            </pre>
            <p>
              To run the tests and update the snapshots, you can run the
              following command:
            </p>
            <pre>
              <code>yarn test -u</code>
            </pre>
          </li>
        </ol>

        <h2 className="mt-5">Usage</h2>
        <p>
          The app will be running on <code>http://localhost:5173</code>. You can
          access it by opening your browser and typing this URL.
        </p>

        <h2 className="mt-5">Dependencies</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://nodejs.org/" target="_blank">
              Node.js
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://vitejs.dev/" target="_blank">
              Vite
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://axios-http.com/" target="_blank">
              Axios
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://jestjs.io/" target="_blank">
              Jest
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://getbootstrap.com/" target="_blank">
              Bootstrap
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://www.npmjs.com/package/react-router-dom"
              target="_blank"
            >
              React Router
            </a>
          </li>
          <li className="list-group-item">
            <a href="https://testing-library.com/" target="_blank">
              Testing Library
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;