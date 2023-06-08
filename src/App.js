import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Hodimlar from "./components/Hodimlar";
import Lavozim from "./components/Lavozimlar/Lavozim";
import Daraja from "./components/daraja/Daraja";

function App() {
  return (
    <div className="container my-3">
      <div className="">
        <Link to="/hodim">
          <button className="btn btn-outline-dark">Hodimlar</button>
        </Link>
        <Link to={"/lavozim"}>
          <button className="btn btn-outline-dark mx-2">Lavozim</button>
        </Link>
        <Link to={"/ilmiydaraja"}>
          <button className="btn btn-outline-dark ">Ilmiy Daraja</button>
        </Link>
        <Switch>
          <Route path="/hodim" component={Hodimlar} />
          <Route path="/lavozim" component={Lavozim} />
          <Route path="/ilmiydaraja" component={Daraja} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
