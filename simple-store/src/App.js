import { useSelector } from "react-redux";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
