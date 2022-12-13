function toggle_on(){
    document.getElementById('open').style.animation='scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    document.getElementById('close').style.display='block'
    document.getElementById('close').style.animation='scale-in-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    document.getElementById('header2').style.display='block'
    document.getElementById('header2').style.animation=' slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
}

function toggle_off(){
    document.getElementById('close').style.animation='scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    document.getElementById('open').style.display='block'
    document.getElementById('open').style.animation='scale-in-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    // document.getElementById('header2').style.display='none'
    document.getElementById('header2').style.animation=' slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
}

// if(document.getElementById('header').style.display=='block'){
//     document.getElementById('open').style.display='none'
//     document.getElementById('close').style.display='none'
//     document.getElementById('header').style.display='none'
// }