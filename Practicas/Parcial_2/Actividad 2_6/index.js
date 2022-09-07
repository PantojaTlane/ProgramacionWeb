const txtTitle =  document.querySelector('#txtTitle');


const btnMicrosoft = document.querySelector('.btn-microsoft');
const btnAmd = document.querySelector('.btn-amd');
const btnGoogle = document.querySelector('.btn-google');
const containerMic = document.querySelector('#microsoft');
const containerAmd = document.querySelector('#amd');
const containerGoogle = document.querySelector('#google');

var titulo1 = "Curriculum vitae";
var i = 0;
var mnsg = ""; 


setInterval(() => {
    
    if(i==titulo1.length){
        i = 0;
        mnsg = "";
    }

    mnsg += titulo1.charAt(i);

    txtTitle.textContent = "";
    txtTitle.textContent = mnsg;

    i++;

}, 300);


btnMicrosoft.addEventListener('click',()=>{
    containerMic.classList.toggle('hide-job');
});
btnAmd.addEventListener('click',()=>{
    containerAmd.classList.toggle('hide-job');
});
btnGoogle.addEventListener('click',()=>{
    containerGoogle.classList.toggle('hide-job');
});