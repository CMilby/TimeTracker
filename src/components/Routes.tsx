import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardComponent from "./DashboardComponent";
import ProjectComponent from "./ProjectComponent";
import TimeTrackerComponent from "./TimeTrackerComponent";
import ReportingComponent from "./ReportingComponent";

export const Routes = ({}) => (
	<Switch>
		<Route exact path="/">
			<DashboardComponent />
		</Route>
		<Route path="/projects">
			<ProjectComponent />
		</Route>
		<Route path="/time">
			<TimeTrackerComponent />
		</Route>
		<Route path="/reporting">
			<ReportingComponent />
		</Route>
	</Switch>
);
