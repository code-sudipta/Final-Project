const car = [
    'Camping','Cycling','Kayaking','Photo Tour','Fishing','Yoga'
]

const pic =[
    'images/camping.webp','images/cycling.webp','images/kayaking.webp','images/photography.webp','images/fishing.webp','images/yoga.webp'
]

const guide_pic=[
    'images/mem5.webp','images/mem1.webp','images/mem3.webp','images/mem2.webp','images/mem4.webp','images/mem6.webp'
]

const guide_name=[
    'Helga Sommer','Jak Rooney','Kevin Birgof','Kelli Meloun','Sam Willson','Pol Stiwens'
]

const guide_work=[
    'Camping Guide','Cycling Guide','Kayaking Guide','Photo Tour Guide','Fishing Guide','Yoga Guide'
]

i=0

function changeNext(){
    if(i<5 && i>-1){
        i=i+1
        document.getElementById('maaro').innerHTML=car[i];
        document.getElementById('maaro2').src=pic[i];
        document.getElementById('guide').src=guide_pic[i];
        document.getElementById('name').innerHTML=guide_name[i];
        document.getElementById('work').innerHTML=guide_work[i];
    }
}


function changePrev(){
    if(i>0 && i<6){
        i=i-1
        document.getElementById('maaro').innerHTML=car[i];
        document.getElementById('maaro2').src=pic[i];
        document.getElementById('guide').src=guide_pic[i];
        document.getElementById('name').innerHTML=guide_name[i];
        document.getElementById('work').innerHTML=guide_work[i];
    }
}