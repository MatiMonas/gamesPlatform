import "./App.css";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";

function App() {
    return (
        <>
            {/* <Route path="/" component={Nav} /> */}
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route patch="/home" exact component={Home}></Route>
            </Switch>
        </>
    );
}

export default App;
