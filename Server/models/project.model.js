import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
  },
  images: {
    type: [String],
    required: [true, 'Project image URL is required'],
  },
  tags: {
    type: [String],
    default: [],
  },
  githubUrl: {
    type: String,
    default: '',
  },
  liveDemoUrl: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  
  
  visibility:{
    type : String , 
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

const ProjectModel = mongoose.model('Project', projectSchema);
export default ProjectModel;
