import Project from "../models/project";
import { IProject } from "../types";
export default {
	createProject: async ({ projectInput }: { projectInput: IProject }) => {
		const project = new Project({
			title: projectInput.title,
			description: projectInput.description,
			source: projectInput.source,
			demo: projectInput.demo,
		});
		const result = await project.save();
		return result;
	},

	projects: async () => {
		const projects = await Project.find({});
		return projects.map((product) => {
			return {
				...product._doc,
				_id: product._id.toString(),
			};
		});
	},

	project: async ({ id }: { id: string }) => {
		const project = await Project.findById(id);
		if (!project) {
			throw new Error("Project not found");
		}
		return {
			...project._doc,
			_id: project._id.toString(),
		};
	},

	deleteProject: async ({ id }: { id: string }) => {
		const project = await Project.findById(id);
		if (!project) {
			throw new Error("Project not found with id " + id);
		}

		await Project.findByIdAndRemove(id);
		return {
			...project._doc,
			id: project._id.toString(),
		};
	},
};
