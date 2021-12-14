"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_1 = __importDefault(require("../models/project"));
exports.default = {
    createProject: ({ projectInput }) => __awaiter(void 0, void 0, void 0, function* () {
        const project = new project_1.default({
            title: projectInput.title,
            description: projectInput.description,
            source: projectInput.source,
            demo: projectInput.demo,
        });
        const result = yield project.save();
        return result;
    }),
    projects: () => __awaiter(void 0, void 0, void 0, function* () {
        const projects = yield project_1.default.find({});
        return projects.map((product) => {
            return Object.assign(Object.assign({}, product._doc), { _id: product._id.toString() });
        });
    }),
    project: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        const project = yield project_1.default.findById(id);
        if (!project) {
            throw new Error("Project not found");
        }
        return Object.assign(Object.assign({}, project._doc), { _id: project._id.toString() });
    }),
    deleteProject: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        const project = yield project_1.default.findById(id);
        if (!project) {
            throw new Error("Project not found with id " + id);
        }
        yield project_1.default.findByIdAndRemove(id);
        return Object.assign(Object.assign({}, project._doc), { id: project._id.toString() });
    }),
};
