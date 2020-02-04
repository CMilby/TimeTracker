import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faChartBar,
	faClone,
	faHdd
} from "@fortawesome/free-regular-svg-icons";

import "../css/Sidebar.css";
import "../css/theme/SidebarTheme.css";

interface ISidebarProps {
	theme: string;
}

interface ISidebarState {
	selected: string;
}

export default class Sidebar extends Component<ISidebarProps, ISidebarState> {
	constructor(props: any) {
		super(props);

		this.state = {
			selected: "Dashboard"
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick(src: string) {
		this.setState({ selected: src });
	}

	render() {
		let selectedDashboard =
			this.state.selected === "Dashboard"
				? `selected selected-${this.props.theme}`
				: "";
		let selectedProjects =
			this.state.selected === "Projects"
				? `selected selected-${this.props.theme}`
				: "";
		let selectedTimeTracker =
			this.state.selected === "TimeTracker"
				? `selected selected-${this.props.theme}`
				: "";
		let selectedReporting =
			this.state.selected === "Reporting"
				? `selected selected-${this.props.theme}`
				: "";

		return (
			<div className="noselect">
				<div className={`sidebar-title`}>
					<h1>Tracker</h1>
				</div>
				<div
					className={`sidebar-entry sidebar-entry-${this.props.theme} ${selectedDashboard}`}
					onClick={() => this.onClick("Dashboard")}
				>
					<FontAwesomeIcon fixedWidth icon={faClone} />
					<span> Dashboard</span>
				</div>
				<div
					className={`sidebar-entry sidebar-entry-${this.props.theme} ${selectedProjects}`}
					onClick={() => this.onClick("Projects")}
				>
					<FontAwesomeIcon fixedWidth icon={faHdd} />
					<span> Projects</span>
				</div>
				<div
					className={`sidebar-entry sidebar-entry-${this.props.theme} ${selectedTimeTracker}`}
					onClick={() => this.onClick("TimeTracker")}
				>
					<FontAwesomeIcon fixedWidth icon={faClock} />
					<span> Time Tracker</span>
				</div>
				<div
					className={`sidebar-entry sidebar-entry-${this.props.theme} ${selectedReporting}`}
					onClick={() => this.onClick("Reporting")}
				>
					<FontAwesomeIcon fixedWidth icon={faChartBar} />
					<span> Reports</span>
				</div>
			</div>
		);
	}
}
