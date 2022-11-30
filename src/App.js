import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductContext from "./context/ProductContext";
import routes from "./routes/routes";
// import Counter from './Counter';
// import LongForm from './LongForm';

function App() {
  return (
    <ProductContext className='App'>
      {/* <Counter/> */}
      {/* <LongForm /> */}
      <RouterProvider router={routes} />
    </ProductContext>
  );
}

export default App;
