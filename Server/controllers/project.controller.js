import ProjectModel from "../models/project.model.js";
import UserModel from "../models/user.model.js";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, 
        secure :true
    });
    


var imagesArr = [] ; 
export async function uploadProjectImage(req, res) {
  try {
    imagesArr = [] ; 
    
    const image= req.files ; 
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false
    };

    for (let i = 0; i < image?.length; i++) {
      const img  = await cloudinary.uploader.upload(
        image[i].path , 
        options , 
        function(error  , result ){
          imagesArr.push(result.secure_url) ; 
          fs.unlinkSync(`uploads/${req.files[i].filename}`)
        }
      )
    }

    return res.status(200).json({
        images: imagesArr
    })

  

   
  } catch (error) {
    
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
  }
}

export async function createProject(req , res){
    try {
        
        let project = new ProjectModel({
            title : req.body.title,
            description : req.body.description,
            images : imagesArr,
            tags : req.body.tags,
            githubUrl : req.body.githubUrl,
            liveDemoUrl : req.body.liveDemoUrl,
            visibility : req.body.visibility,
            
        })

        if(!project){
            return res.status(500).json({
        message: "Project not created",
        success: false,
        error: true
            });
        }
        project = await project.save() ;
        imagesArr = [] ; 

         return res.status(200).json({
        message: "Project created",
        success: true,
        error: false, 
        project : project

            });

        
    } catch (error) {
        return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true
    });
    }
}
export async function getAllProjects(req, res) {
  try {
    const projects = await ProjectModel.find({ isActive: true, visibility: 'PUBLIC' }).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    
    res.status(500).json({
         message: 'Failed to fetch projects', error: error.message, 
         success : false , 
         error :  true

    });
  }
}


export async function getProjectById(req, res) {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findById(id);

    if (!project || !project.isActive) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Failed to fetch project', error: error.message });
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id);
    if (!project || !project.isActive) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updatedFields = {
      ...req.body,
      updatedBy: req.user?._id
    };

    const updatedProject = await ProjectModel.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ message: 'Project updated successfully', updatedProject });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Failed to update project', error: error.message });
  }
}


export async function deleteProject(req, res) {
  try {
    const { id } = req.params;

    const deleted = await ProjectModel.findByIdAndUpdate(
      id,
      { isActive: false, updatedBy: req.user?._id },
      { new: true }
    );

    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully', deleted });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Failed to delete project', error: error.message });
  }
}