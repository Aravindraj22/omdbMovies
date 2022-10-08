let img = document.getElementById('img');

function home(){
    document.title = 'home';
    img.innerHTML =`
        <h1>Home</h1>
        <img src="https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035__340.jpg" alt="">
    `
}

function services(){
    document.title = 'services';
    img.innerHTML =`
        <h1>Services</h1>
        <img src="https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881__340.jpg" alt="">
    `
}
function about(){
    document.title = 'about';
    img.innerHTML =`
        <h1>About</h1>
        <img src="https://cdn.pixabay.com/photo/2016/01/15/16/48/winter-1142029__340.jpg" alt="">
    `
}
function contact(){
    document.title = 'Contact Us';
    img.innerHTML =`
        <h1>Services</h1>
        <img src="https://cdn.pixabay.com/photo/2015/12/13/09/42/gull-1090835__340.jpg" alt="">
    `
}
