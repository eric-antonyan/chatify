import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";

const RouterComponent = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="" element={<Home />} />
            <Route path="auth">
                <Route
                    path="login"
                    element={
                        <NextUIProvider>
                            <Login />
                        </NextUIProvider>
                    }
                />
            </Route>
        </Routes>
    );
};

const App = () => {
    return (
        <AnimatePresence mode="wait">
            <Router>
                <RouterComponent />
            </Router>
        </AnimatePresence>
    );
};

export default App;
