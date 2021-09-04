import "./App.css";
import Home from "./Containers/Home";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "./redux/actions/index";
import GamesByName from "./Containers/GamesByName/GamesByName";
import GameDetails from "./Containers/GameDetails/GameDetails";
import { Error404 } from "./Components/Error404/Error404";
import CreateGame from "./Containers/CreateGame/CreateGame";

function App() {
    const dispatch = useDispatch();

    //cuando se monta el componente app
    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);
    return (
        <>
            <Switch>
                <Route path="/" exact component={Landing} />

                <Route exact path="/home" component={Home} />
                <Route path="/search/" exact component={Home}></Route>
                <Route
                    path="/search/:name"
                    exact
                    component={GamesByName}
                ></Route>
                <Route
                    path="/details/:id"
                    exact
                    component={GameDetails}
                ></Route>
                <Route
                    path="/create_videogame"
                    exact
                    component={CreateGame}
                ></Route>
                <Route path="*" component={Error404}></Route>
            </Switch>
        </>
    );
}

export default App;
