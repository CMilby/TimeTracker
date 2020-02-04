import React, { Component } from "react";

interface IProjectComponentProps {}

interface IProjectComponentState {}

export default class ProjectComponent extends Component<
	IProjectComponentProps,
	IProjectComponentState
> {
	render() {
		return <div>Project</div>;
	}
}
