import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data";
console.log(data);
function App() {
  const cardElement = data.map((e) => {
    return <Card key={e.id} item={e} />;
  });

  return (
    <div>
      <Navbar />
      <Main />
      <div className="card-conteiner">{cardElement}</div>
    </div>
  );
}

export default App;
