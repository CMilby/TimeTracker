import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import { Routes } from "./components/Routes";
import { Project } from "./objects";

import "./css/App.css";
import "./css/theme/AppTheme.css";

interface IAppProps {}

interface IAppState {
	projects: Project[];

	theme: string;
}

export default class App extends Component<IAppProps, IAppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			projects: [
				{
					id: 0,
					title: "Project 1"
				},
				{
					id: 1,
					title: "Project 2"
				}
			],
			theme: "dark"
		};
	}

	render() {
		return (
			<div>
				<Router>
					<div
						className={`sidebar-root sidebar-root-${this.state.theme}`}
					>
						<Sidebar theme={this.state.theme} />
					</div>
					<div
						className={`main-area-root main-area-root-${this.state.theme}`}
					>
						<Routes />
					</div>
				</Router>
			</div>
		);
	}
}
