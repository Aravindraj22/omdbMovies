let image=document.getElementById('image');

//!double buttons
// function hide() {
//     image.style.visibility="hidden";
// }
// function show() {
//     image.style.visibility="visible";
// }

let button=document.getElementById('btn');

//!single button
function toggleImage() {
    if(button.innerText==="hide") {
        image.style.visibility="hidden";
        button.innerText="show";
    }
    else {
        image.style.visibility="visible";
        button.innerText="hide";
    }
}

//!password
let password=document.getElementById('password');
let icon=document.getElementById('icon');
function togglepassword() {
    if(password.type==="password") {
        password.type="text";
        //?to change icon
        icon.className="fa fa-eye-slash";
    }
    else {
        password.type="password";
        icon.className="fa fa-eye";
    }
}