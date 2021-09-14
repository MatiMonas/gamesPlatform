import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "../../App";

describe("<Home/>", () => {
    const component = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/home"]}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    it("Should render NavBar component", () => {
        component.container.querySelector("NavBar");
    });

    it("Should render SideBar component", () => {
        component.container.querySelector("Sidebar");
    });
    it("Should render Pagination component", () => {
        component.container.querySelector("Pagination");
    });
    it("Should render CustomScrollDiv component", () => {
        component.container.querySelector("CustomScrollDiv");
    });
    it("Should render Loading component", () => {
        component.container.querySelector("Loading");
    });
    it("Should render Cards component", () => {
        component.container.querySelector("Cards");
    });
});
