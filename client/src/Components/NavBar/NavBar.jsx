import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
    const [state, setState] = useState({
        search: "",
    });

    function handleChange(e) {
        //creacion de nuevo estado
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className={style.mainContainer}>
                <nav>
                    <div>
                        <Link to="/home">
                            <h1>LOGO</h1>
                        </Link>
                    </div>
                    <div className={style.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="search"
                                value={state.search}
                                placeholder="Search game..."
                            />
                            {!state.search ? (
                                <button type="submit" disabled>
                                    Lets Play
                                </button>
                            ) : (
                                <Link to={`/search/${state.search}`}>
                                    <button type="submit">Lets Play</button>
                                </Link>
                            )}
                        </form>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { searchByName } from "../../redux/actions/index";
// import { Link } from "react-router-dom";

// import style from "./NavBar.module.css";

// function NavBar() {
//     const dispatch = useDispatch();

//     const [state, setState] = useState({
//         search: "",
//     });

//     function handleChange(e) {
//         setState((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         return await dispatch(searchByName(state.search));
//     }
//     return (
//         <>
//             <div className={style.formContainer}>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         onChange={handleChange}
//                         name="search"
//                         value={state.search}
//                     />
//                     <Link to={`/search/${state.search}`}>
//                         <button type="submit">Lets Play</button>
//                     </Link>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default NavBar;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { searchByName } from "../../redux/actions/index";
// import { Link } from "react-router-dom";

// import style from "./NavBar.module.css";

// function NavBar() {
//     const dispatch = useDispatch();

//     const [state, setState] = useState({
//         search: "",
//     });

//     function handleChange(e) {
//         setState((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         return await dispatch(searchByName(state.search));
//     }
//     return (
//         <>
//             <div className={style.formContainer}>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         onChange={handleChange}
//                         name="search"
//                         value={state.search}
//                     />
//                     <Link to={`/search/${state.search}`}>
//                         <button type="submit">Lets Play</button>
//                     </Link>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default NavBar;
