import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames, getGenres } from "./redux/actions/index";
import GamesByName from "./Containers/GamesByName/GamesByName";
import GameDetails from "./Containers/GameDetails/GameDetails";
import { Error404 } from "./Components/Error404/Error404";
import CreateGame from "./Containers/CreateGame/CreateGame";
import MainView from "./Containers/MainView/MainView";

function App() {
    const dispatch = useDispatch();

    //cuando se monta el componente app
    useEffect(() => {
        dispatch(getGames());
        dispatch(getGenres());
    }, [dispatch]);
    return (
        <>
            <Switch>
                <Route path="/" exact component={Landing} />

                <Route exact path="/home" component={MainView} />
                <Route path="/search/" exact component={MainView}></Route>
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
