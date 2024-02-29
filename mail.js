const firebaseConfig = {
    apiKey: "AIzaSyDWgBc6Weu16BIQ-mfpP8CQxT0JDOsPgOI",
    authDomain: "fyp1-2a3ca.firebaseapp.com",
    projectId: "fyp1-2a3ca",
    storageBucket: "fyp1-2a3ca.appspot.com",
    messagingSenderId: "803301279305",
    appId: "1:803301279305:web:7315a45773868fe761e198",
    measurementId: "G-KDDWC3E1DZ"
  }
  firebase.initializeApp(firebaseConfig);
  var loginFormDB=firebase.database().ref("loginForm")
  document.getElementById("loginForm").addEventListener("submit", submitForm)

  function submitForm(e) {
    e.preventDefault();

    var Fullname = getElementVal("Fullname")
    var Emailid = getElementVal("Emailid")
    var Passkey = getElementVal("Passkey")

    saveMessages(Fullname, Emailid, Passkey);
  }
  

  const saveMessages = (Fullname, Emailid, Passkey) => {
    var newloginForm = loginFormDB.push();
    newloginForm.set({
        Fullname: Fullname,
        Emailid: Emailid,
        Passkey: Passkey,

    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };