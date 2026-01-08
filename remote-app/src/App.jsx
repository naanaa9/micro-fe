import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Remote App</h2>

      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="detail">Detail</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h3>Remote Home</h3>} />
        <Route path="detail" element={<h3>Remote Detail</h3>} />
      </Routes>
    </div>
  );
};

export default App;
