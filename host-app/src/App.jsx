import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";

const RemoteApp = React.lazy(() => import("remote_app/App"));

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/remote">Remote</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Host Home</h2>} />

        <Route
          path="/remote/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RemoteApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
