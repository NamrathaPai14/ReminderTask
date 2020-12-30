import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header.component";
import AddMenu from "./AddMenu";
import AddReminder from "./AddReminder";
import Menu from "./Menu/Menu.container";
import Reminder from "./Reminder";

/**
 * @class AppRouter
 */
export class AppRouter extends Component{
    
    render = ()=> {
        return(
            <div>
                <Header />
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={ Menu }/>
                            <Route path="/addmenu" exact component={ AddMenu}/>
                            <Route path="/reminder" exact component={ Reminder }/>
                            <Route path="/addreminder" exact component={ AddReminder }/>
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        )
    }
}
export default AppRouter;