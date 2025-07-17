import { Router } from "express";

const projectRouter = Router() ; 


import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject, uploadProjectImage } from "../controllers/project.controller.js";

projectRouter.put('/post-project-image',auth,upload.array('images'), uploadProjectImage);
projectRouter.post('/create-project',auth, createProject);
projectRouter.get('/get-all-project',auth , getAllProjects);
projectRouter.get('/:id',auth , getProjectById);
projectRouter.put('/:id',auth , updateProject);
projectRouter.delete("/:id", auth, deleteProject);
export default  projectRouter  ;