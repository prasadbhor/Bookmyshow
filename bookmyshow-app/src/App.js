import "./App.css";
import Footer from "./Routes/Footer";
import Navbar from "./Routes/Navbar";
import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
       <button onClick={handleClick}>Click Me</button> {/* New feature */}
      <Footer />

    </div>
  );
}

export default App;
