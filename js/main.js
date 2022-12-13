function signUp(){
    const singUpData = {
        user_name:document.getElementById("user_name").value,
        user_email:document.getElementById("user_email").value,
        user_pass:document.getElementById("user_pass").value,
        full_name:document.getElementById("full_name").value
    }

    localStorage.setItem("singUpData", JSON.stringify(singUpData));
}

function getDataForSignUp(){

    let userData = JSON.parse(localStorage.getItem("singUpData"));

    return userData;
}

function signIn(){

    let userData  = getDataForSignUp();
    console.log(userData);
   let user =  document.getElementById("user_name").value ;
   let pass =  document.getElementById("user_pass").value ;

    const signInData = {
        user_name : user,
        user_pass: pass
    }

    if (userData.user_name == user &&  userData.user_pass == pass ) {

           
            // window.location.href = "index.html";
            localStorage.setItem("signInData", JSON.stringify(signInData));
            alert("Signed In succesfully!")


    } else {
            alert("Sorry! You are not authenticate user!")
    }
}

function getDataForSignIn(){

    let userData = JSON.parse(localStorage.getItem("signInData"));

    return userData;
}
 
function showHideContent(){

    let userData = getDataForSignIn();
    console.log(userData);
    if (userData.user_name!='') {
        
        document.getElementById('btn-log').style.display='block'
        document.getElementById('main').style.display='none'
        document.getElementById('myname').innerHTML=userData.user_name ;
        document.getElementById('main2').style.display='block'

    } else {
        document.getElementById('btn-log').style.display='none'
        document.getElementById('main').style.display='block'
        document.getElementById('main2').style.display='none'
    }
}
 


function logOut(){
    alert('Logged Out Succesfully')
    localStorage.removeItem("signInData");
    window.location.reload();
}
showHideContent();