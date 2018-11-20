  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsyLK9rO486kX1_Skb4MxvDd0jEjJ2VhE",
    authDomain: "danppo-marioplan.firebaseapp.com",
    databaseURL: "https://danppo-marioplan.firebaseio.com",
    projectId: "danppo-marioplan",
    storageBucket: "danppo-marioplan.appspot.com",
    messagingSenderId: "676700959245"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true })

  export default firebase;