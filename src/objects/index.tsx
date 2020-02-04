export type Project = {
	id: number;
	title: string;
};

export type Entry = {
	project_id: number;
	title: string;
	desc: string;
	start_time: Date;
	end_time: Date;
};
