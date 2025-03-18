const express = require('express')



const RepositoriesController = {
    getRepositories : async (req,res) => {
        res.status(200).json({message:'ESTOS SON LOS PROYECTOs'})
    },
    addProject : async(req,res) => {
        res.status(201).json({message:'USER CREATE SUCCESSFULLY'})
    },
    updateProject : async (req,res) => {
        res.status(200).json({message:'User update successfully'})
    },
    deleteProject : async (req,res) => {
        res.status(200).json({message:'User delete successfully'})
    }
}


module.exports = RepositoriesController