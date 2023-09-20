// https://www.youtube.com/live/3OmhDLMoq-0?si=C2QhaNFtyDsFWvnq
// above link is an video link of webapp


let movie =[
    {
        name: "The Court",
        poster:"https://m.media-amazon.com/images/M/MV5BMzkzOTQzZDgtZTgwOC00YjFjLTgxMTMtZjlhOWVjOGMyYjBlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        rating: "IMDB: "+ 9.7
    },
    {
        name : "Baaplyok",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baaplyok-et00366114-1691477615.jpg",
        rating: "IMDB: "+7.8
    },
    {
        name : "Lagaan",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        rating: "IMDB: "+8.4
    },
    {
        name : "Dangal",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
        rating: "IMDB: "+8.9
    },
    {
        name : "DORA",
        poster: "https://www.syfy.com/sites/syfy/files/styles/scale_640_no_scale/public/doradomonlineteaser1-sheet.jpg",
        rating: "IMDB: "+7.8
    },
    {
        name : "Harry Poter",
        poster: "https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-order-of-phoenix-vintage-movie-poster-original-1-sheet-27x41_600x.jpg?v=1613768542",
        rating: "IMDB: "+9.8
    },
    {
        name : "ANT-MAN",
        poster: "https://i2.wp.com/raisingwhasians.com/wp-content/uploads/2015/06/Ant-Man-Avengers-movie-poster.jpg",
        rating: "IMDB: "+7.8
    },
    {
        name : "The Joker",
        poster: "https://rukminim1.flixcart.com/image/850/1000/k0h12fk0/poster/g/3/t/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg?q=20",
        rating: "IMDB: "+9.6 
    },
    {
        name : "Pathaan",
        poster: "https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster_ce29dea2-91e6-43b6-81cc-1e2e0a1c1ae0.jpg?v=1675251704",
        rating: "IMDB: "+8.7
    },
    {
        name : "Dark",
        poster: "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
        rating: "IMDB: "+9.8
    },
    {
        name : "The Search",
        poster: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mystery-movie-poster-template-design-e5e45559f268e4d20bafd48643b6f8ef_screen.jpg?ts=1637000114",
        rating: "IMDB: "+8.9
    },
    {
        name: "Sairat",
        poster: "https://64.media.tumblr.com/6765d3c6829ae58df513658994febf3d/tumblr_ohp459TnwK1r9esjeo1_500.jpg",
        rating: "IMDB: "+"IMDB: "+9.2
    }

]

function searchMovie(){ // 1:56         (***IMP****)
   let movieName = document.getElementById("search").value;
//    console.log(movieName);

    if(movieName!==""){
       let result = movie.filter(function(movies)
                    {
                        return movies.name.toUpperCase().includes(movieName.toUpperCase());
                    })


        displayMovies(result);
    }
    else{
        displayMovies(movie);
    }
    
}


// 1:24 of LetsUpGrade
// Generating an Element (Generating an Movie section in html using javascript)
/*function displayMovies(){
    let movieDIV = document.createElement("div");
    movieDIV.classList.add("movie");

    let overlayDIV = document.createElement("div");
    overlayDIV.classList.add("overlay");

    movieDIV.appendChild(overlayDIV);

    console.log(movieDIV);
}
displayMovies();*/





// simple technique it is innerHTML
function displayMovies(data){

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for(let i = 0;i<data.length;i++){
        htmlString = htmlString + `
        <div class="movie">
            <div class="overlay">
                <div class="video">

                </div>

                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>${data[i].rating}</h2>
                    <p>Cast </p>
                </div>


            </div>
            <img class="poster"
                src="${data[i].poster}"
                alt="1st Movie">
        </div>
        `;
    }
    console.log(htmlString);

    // creating a section for movies as id = "movies"
    document.getElementById("movies").innerHTML = htmlString;
}
displayMovies(movie);