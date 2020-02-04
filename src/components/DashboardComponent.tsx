import React, { Component } from "react";

interface IDashboardComponentProps {}

interface IDashboardComponentState {}

export default class DashboardComponent extends Component<
	IDashboardComponentProps,
	IDashboardComponentState
> {
	render() {
		return <div>Dashboard</div>;
	}
}
