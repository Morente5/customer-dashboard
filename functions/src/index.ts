import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp(functions.config().firebase);

/// Organized cloud functions
import * as createUser from './create-user'
import * as projectUser from './project-user'

/// Export functions for deployment
export const newUser = createUser.newUser
export const addProjectToUser = projectUser.addProjectToUser
