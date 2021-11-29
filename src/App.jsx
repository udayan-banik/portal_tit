// import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
// import Hello from "./Hello";

//HOC
import DefaultHoc from "./HOC/DefaultHoc";
//pages
import DefaultPage from "./Pages/DefaultPage";

function App() {
  return (
    <div className="App">
      <DefaultHoc path="/" exact component={DefaultPage} />
      {/* <h1>Chagol App</h1> */}
    </div>
  );
}

export default App;
