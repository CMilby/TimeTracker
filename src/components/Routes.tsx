import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardComponent from "./DashboardComponent";
import ProjectComponent from "./ProjectComponent";
import TimeTrackerComponent from "./TimeTrackerComponent";
import ReportingComponent from "./ReportingComponent";

type RouteProps = {
	theme: string;
};

export const Routes = ({ theme }: RouteProps) => (
	<div className="routes-root">
		<Switch>
			<Route exact path="/">
				<DashboardComponent theme={theme} />
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
	</div>
);
