import "./App.css";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "./redux/actions/index";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);
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
