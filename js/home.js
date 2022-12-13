function getDataForSignIn(){

    let userData = JSON.parse(localStorage.getItem("signInData"));

    return userData;
}
 
function showHideContent(){

    let userData = getDataForSignIn();
    console.log(userData);
    if (userData.user_name!='') {
        document.getElementById('roll').innerHTML='Sign<br>Out'
        
    } else {
        
    }
}
showHideContent();