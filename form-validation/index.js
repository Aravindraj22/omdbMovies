function validate() {
    let user = document.getElementById('user')
    let msg = document.getElementById('msg')
    let username = user.value
    if(!username){
        msg.style.display="block";
        msg.innerText="username required"
        return false;
    }
}
