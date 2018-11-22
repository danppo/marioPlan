export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid; 
    console.log (profile.firstName);
    console.log (profile.lastName);
    console.log (authorId);
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch ({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
    
  }
};