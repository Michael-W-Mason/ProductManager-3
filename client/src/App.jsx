import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductForm from "./components/ProductsForm";
import Product from "./components/Product"
import ProductList from "./components/ProductList";
import EditProductForm from "./components/EditProductForm";

function App() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/:id/edit">
            <EditProductForm submitted={submitted} setSubmitted={setSubmitted}/>
          </Route>
          <Route path="/:id">
            <Product submitted={submitted} setSubmitted={setSubmitted}/>
          </Route>
          <Route path="/">
            <ProductForm submitted={submitted} setSubmitted={setSubmitted} />
            <ProductList submitted={submitted} setSubmitted={setSubmitted} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
