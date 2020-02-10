import React, { Component } from "react";
import lodash from "lodash";

import TaskComponent from "./Dashboard/TaskComponent";

import { MSToHourMinSec } from "../util/MathUtil";

import "../css/Dashboard.css";
import "../css/theme/DashboardTheme.css";

interface IDashboardComponentProps {
	theme: string;
}

interface IDashboardComponentState {
	items: {
		id: number;
		title: string;
		project_name: string;
		elapsed_time: number;
		start_time: number;
		start_day: number;
	}[];

	is_timer_running: boolean;
	start_time: number;
	running_time: number;
}

export default class DashboardComponent extends Component<
	IDashboardComponentProps,
	IDashboardComponentState
> {
	private timer: number;
	constructor(props: any) {
		super(props);

		this.state = {
			is_timer_running: false,
			start_time: 0,
			running_time: 0,
			items: [
				{
					id: 0,
					title: "test 1",
					project_name: "label 0",
					elapsed_time: 20,
					start_time: Date.now(),
					start_day: 1
				},
				{
					id: 1,
					title: "test 3",
					project_name: "label 1",
					elapsed_time: 20,
					start_time: 1580923920000,
					start_day: 0
				},
				{
					id: 2,
					title: "test 4",
					project_name: "label 2",
					elapsed_time: 20,
					start_time: 1580927520000,
					start_day: 0
				}
			]
		};

		this.timer = 0;
		this.handleStartStopButtonClicked = this.handleStartStopButtonClicked.bind(
			this
		);
	}

	handleStartStopButtonClicked() {
		if (this.state.is_timer_running) {
			clearInterval(this.timer);
			this.setState({
				is_timer_running: false,
				start_time: 0,
				running_time: 0
			});
		} else {
			let startTime = Date.now() - this.state.running_time;
			this.setState({ is_timer_running: true, start_time: startTime });
			this.timer = setInterval(() => {
				this.setState({ running_time: Date.now() - startTime });
			});
		}
	}

	render() {
		const groupedItems = lodash.groupBy(this.state.items, "start_day");
		const tasks = lodash.map(groupedItems, (value: any, key: any) => {
			return (
				<TaskComponent
					key={value}
					theme={this.props.theme}
					items={value}
				/>
			);
		});

		return (
			<div
				className={`dashboard-root dashboard-root-${this.props.theme}`}
			>
				<div className={`task-input task-input-${this.props.theme}`}>
					<span>
						<input
							className={`task-input-input task-input-input-${this.props.theme}`}
							placeholder="Enter a task..."
						/>
						<button
							className={`task-input-button task-input-button-${this.props.theme}`}
							onClick={this.handleStartStopButtonClicked}
						>
							{this.state.is_timer_running ? "Stop" : "Start"}
						</button>
						<span
							className={`task-input-elapsed-time task-input-elapsed-time-${this.props.theme}`}
						>
							{MSToHourMinSec(this.state.running_time)}
						</span>
					</span>
				</div>
				{tasks}
			</div>
		);
	}
}
