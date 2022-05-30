import mongoose from "mongoose";

const Schema = mongoose.Schema;

const headingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	detail: {
		type: String,
		required: true,
	},
	route: {
		type: String,
		required: false,
	},
});

export default mongoose.model("Project", headingSchema);
