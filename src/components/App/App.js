import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {ROUTE_CONSTANTS} from "../../lib/Routes";
import {Restaurant} from "../Resturant/Restaurant";
import AuthContainer from "../../containers/AuthContainer";
import Login from "../Login/Login";

function App() {
    return (
        <div>

            <AuthContainer/>

            <Switch>  
                <Route path={ROUTE_CONSTANTS.LOGIN} exact component={Login}/>
                <Route path={ROUTE_CONSTANTS.RESTAURANT} exact component={Restaurant}/>
                <Route
                    path="*"
                    component={() => {
                        return <div>Home Page</div>;
                    }}
                />
            </Switch>
        </div>
    )
}

export default App;
