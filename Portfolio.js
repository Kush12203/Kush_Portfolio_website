let tablinks = document.getElementsByClassName("active-link");
let tabcontents = document.getElementsByClassName("active-tab");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

let sidemeu =document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
} 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwhR5z8trokJ8NgI7zQZpPwyZ3FyzETIsJneWs3SnxnTw5ad9DcZATXIM8SBLvsFcQV5Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML ="Message Sent Succesfully"
        setTimeout( function(){
            msg.innerHTML=""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
