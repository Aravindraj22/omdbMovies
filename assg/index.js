let btn = document.getElementById('btn');

function button(){
    if(btn.innerText === 'dark'){
        btn.innerText = 'light';
        document.body.style.backgroundColor = 'red';
    }
    else {
        btn.innerText = 'dark';
        document.body.style.backgroundColor = 'black';
    }
}