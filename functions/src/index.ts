import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp(functions.config().firebase);

/// Organized cloud functions
import * as createUser from './create-user'
import * as createProject from './create-project'
import * as projectUser from './project-user'
import * as deleteUser from './delete-user'
import * as deleteProject from './delete-project'

/// Export functions for deployment
export const newUser = createUser.newUser
export const newProject = createProject.newProject
export const addProjectToUser = projectUser.addProjectToUser
export const removeUser = deleteUser.removeUser
export const removeProject = deleteProject.removeProject
