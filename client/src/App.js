import "./App.css";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
    return (
        <>
            {/* <Route path="/" component={Nav} /> */}
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route patch="/home" exact component={Home}></Route>
            </Switch>
        </>
    );
}

export default App;
