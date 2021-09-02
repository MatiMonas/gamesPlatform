import "./App.css";
import Home from "./Containers/Home";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "./redux/actions/index";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);
    return (
        <>
            {/* <Route path="/" component={Nav} /> */}

            <Route path="/" exact component={Landing} />
            <Route path="/home" component={NavBar} />
            <Route exact path="/home" component={Home} />
            <Route path="/search/:name" exact component={Home}></Route>
        </>
    );
}

export default App;
