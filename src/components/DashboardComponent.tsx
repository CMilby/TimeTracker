import React, { Component } from "react";
import lodash from "lodash";

import "../css/Dashboard.css";
import "../css/theme/DashboardTheme.css";

interface IDashboardComponentProps {
	theme: string;
}

interface IDashboardComponentState {
	items: {
		id: number;
		title: string;
		project_id: number;
		elapsed_time: number;
		start_time: number;
		start_day: number;
	}[];
}

export default class DashboardComponent extends Component<
	IDashboardComponentProps,
	IDashboardComponentState
> {
	constructor(props: any) {
		super(props);

		this.state = {
			items: [
				{
					id: 0,
					title: "test 1",
					project_id: 1,
					elapsed_time: 20,
					start_time: Date.now(),
					start_day: 1
				},
				{
					id: 1,
					title: "test 3",
					project_id: 1,
					elapsed_time: 20,
					start_time: 1580923920000,
					start_day: 0
				},
				{
					id: 2,
					title: "test 4",
					project_id: 1,
					elapsed_time: 20,
					start_time: 1580927520000,
					start_day: 0
				}
			]
		};
	}

	render() {
		const groupedItems = lodash.groupBy(this.state.items, "start_day");
		console.log(groupedItems);

		return (
			<div
				className={`dashboard-root dashboard-root-${this.props.theme}`}
			>
				<div className={`task-input task-input-${this.props.theme}`}>
					<input />
				</div>
				<div>today</div>
				<div>yesterday</div>
			</div>
		);
	}
}
