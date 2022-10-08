async function omdbMovies() {
    let searchvalue=document.getElementById('searchvalue');
    searchvalue=searchvalue.value;

    let movies=await fetch(`https://www.omdbapi.com/?s=${searchvalue}&apikey=2129205d`);
    movies=await movies.json();
    movies=movies.Search
    console.log(movies);

    let mymovies = document.getElementById('mymovies');

    for (let movie of movies) {
        let {Poster,Title,Year}=movie
        mymovies.innerHTML +=
       `
       <div class="user-card">
            <img src="${Poster}" alt="">
            <h3>${Title}</h3>
            <p>${Year}</p>
        </div>
       `
    }
}
