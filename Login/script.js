$(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB7ehi_PeuufYQqIga8ToG4YjzKReRZqb0",
        authDomain: "login-e1b37.firebaseapp.com",
        databaseURL: "https://login-e1b37.firebaseio.com",
        projectId: "login-e1b37",
        storageBucket: "login-e1b37.appspot.com",
        messagingSenderId: "400756226398"
    };
    firebase.initializeApp(config);

    const auth = firebase.auth();


    const textEmail = document.getElementById('textEmail');
    const textPassword = document.getElementById('textPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    $('#btnLogin').click(function () {
        const email = textEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    })

    $('#btnSignUp').click(function () {
        const email = textEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .then(user => console.log(user))
            .catch(e => console.log(e.message));
    })

    $('#btnLogout').click(function () {
        firebase.auth().signOut();
        $('#textEmail').val('')
        $("input[type='password']").val('');
    })
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');

        } else {
            btnLogout.classList.add('hide');
            console.log('not logged in');
        }
    })

  
});