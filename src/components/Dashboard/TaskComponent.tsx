import React, { Component } from "react";

interface ITaskComponentProps {
	theme: string;
	items: {
		id: number;
		title: string;
		project_name: string;
		elapsed_time: number;
		start_time: number;
		start_day: number;
	}[];
}

interface ITaskComponentState {}

export default class TaskComponent extends Component<
	ITaskComponentProps,
	ITaskComponentState
> {
	render() {
		let tasks = this.props.items.map((item: any, index: number) => {
			return (
				<TaskComponentItem
					key={item.id}
					theme={this.props.theme}
					title={item.title}
					project={item.project_name}
				/>
			);
		});

		return (
			<div
				className={`task-component-root task-component-root-${this.props.theme}`}
			>
				<TaskComponentHeader theme={this.props.theme} />
				{tasks}
			</div>
		);
	}
}

type TaskComponentHeaderProps = {
	theme: string;
};

const TaskComponentHeader = ({ theme }: TaskComponentHeaderProps) => (
	<div className={`task-component-header task-component-header-${theme}`}>
		Test
	</div>
);

type TaskComponentItemProps = {
	theme: string;

	title: string;
	project: string;
};

const TaskComponentItem = ({
	theme,
	title,
	project
}: TaskComponentItemProps) => (
	<div className={`task-component-item task-component-item-${theme}`}>
		<span>{title}</span>
		<span>{project}</span>
	</div>
);
