const mongoose = require('mongoose')

const OwnerProjects = new mongoose.Schema({
    ownername:{
        type:String,
        required: true,
        trim:true
    },
    projectname:{
        type:String,
        required: true,
        trim:true
    },
    project_url :{
        type:String,
        required: true,
        trim:true
    },
    project_img:{
        type:String,
        required: true,
        trim:true,
        validate:{
            validator: function(v) {
                const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i 
                const imagenPatternTwo = /^https:\/\/api\.dicebear\.com\/9\.x\/initials\/svg\?seed=[a-zA-Z0-9-_]+$/;
                return imagePattern.test(v) || imagenPatternTwo.test(v)
            },
            message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
        }
    },
    owner_email:{
        type:String,
        required:true,
        trim:true
    },
    project_technologies : {
            type:[String],
            required:true,
            trim:true
    }
    
    

},{timestamps:true})

const Projects = mongoose.model('ProjectDB',OwnerProjects)

module.exports = Projects