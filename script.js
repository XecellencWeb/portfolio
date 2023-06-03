 
let x = 0;

let lastY=0;

window.onscroll = ()=>{
if(window.scrollY > 0){
document.querySelector('.head').className+= ' black';

}else{
    document.querySelector('.head').className = 'head';
}
    let newY = window.scrollY - lastY;
lastY = window.scrollY;
if(newY > 0){
x+=.25;
}else{
    x-=.25;
}
if(x<=1 && x>=0){
document.querySelector('.social').style.opacity = x+' ';
}

if(window.scrollY > 200){
document.querySelector('.service').className += ' serve';
document.querySelector('#space').className = 'space';
}else{
document.querySelector('.service').className = 'service';
document.querySelector('#space').className = ' ';
}


}