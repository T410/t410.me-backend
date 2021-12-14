import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: false,
	},
	demo: {
		type: String,
		required: false,
	},
});

export default mongoose.model("Project", projectSchema);
