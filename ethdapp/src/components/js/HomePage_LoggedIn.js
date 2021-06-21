import React from "react";
import { Switch } from "react-router-dom";

import { Common_SideNavbar } from "./Common_SideNavbar.js";
import { Common_TopNavbar } from "./Common_TopNavbar.js";
import { HomePage_DashboardComp } from "./HomePage_DashboardComp.js";
import { Homepage_InitiateSwapComp } from "./Homepage_InitiateSwapComp.js";
import { HomePage_ReceiveSwapComp } from "./HomePage_ReceiveSwapComp.js";
import { ProtectedRoute } from "../support/ProtectedRoute.js";
import "../css/HomePage_LoggedIn.css";

export const HomePage_LoggedIn = props => {
    return (
        <div>
            <div className="flex w-screen h-screen">
                <Common_SideNavbar />
                <div className="w-screen ">
                    <Common_TopNavbar />
                    <Switch>
                        <ProtectedRoute exact path="/dashboard" component={HomePage_DashboardComp} />
                        <ProtectedRoute exact path="/dashboard/initiate-swap" component={Homepage_InitiateSwapComp} />
                        <ProtectedRoute exact path="/dashboard/receive-swap" component={HomePage_ReceiveSwapComp} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};
