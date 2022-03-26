import "./App.css";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import Products from "./views/Products";
import { Switch, Route, Redirect } from "react-router-dom";
import Slider1 from "./views/Slider";
import Slider2 from "./views/Slider2";
import Mtable from "./views/Mtable";
import MuCore from "./views/MuCore";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/slider" component={Slider1} />
        <Route exact path="/slider2" component={Slider2} />

        <Route exact path="/mtable" component={Mtable} />
        <Route exact path="/mucore" component={MuCore} />
        {/* <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} /> */}
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
