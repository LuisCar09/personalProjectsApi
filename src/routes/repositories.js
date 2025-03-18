const express = require('express')

const RepositoriesController = require('../controllers/repositories')
const router = express.Router()


router.get('/',RepositoriesController.getRepositories)
router.post('/',RepositoriesController.addProject)
router.put('/',RepositoriesController.updateProject)
router.delete('/',RepositoriesController.deleteProject)




module.exports =  router