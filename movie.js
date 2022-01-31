const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=dd1e1e7e";
const API_URL_SEARCH = "http://www.omdbapi.com/?apikey=dd1e1e7e&s=";

 var card = document.getElementsByClassName("movie-cards")[0];

function myFunction() {
	var search_input = document.getElementById("search-input");
	document.getElementById("search").addEventListener("click",function(){
		console.log("hey")
     console.log(search_input.value);
     const query = search_input.value;
     if(query){
        getMovies(API_URL_SEARCH+query);
     }
 });	
}
 function getMovies(url){
     fetch(url).then((response) => response.json()).then((data) => showMovies(data.Search));
 }

 function showMovies(movies){     
     card.innerHTML="'";
     movies.forEach(function(movie){
     	console.log(movie.imdbID);
         fetch("http://www.omdbapi.com/?apikey=dd1e1e7e&i="+movie.imdbID).then((movieData) => movieData.json()).then((movieDataobj) => movie_display(movieDataobj));
     } );
 }

 function movie_display(imovie){
 	console.log(imovie)
     const movieElm = document.createElement("div");
     movieElm.classList.add("movie-card");
     movieElm.innerHTML=`
     <div class="card">
         <img src = "${imovie.Poster}" alt = "Poster" width = "270px" height = "300px"/>
      
      <div class="movie-description">
         <span class="movie-title"><b>Title</b><span class="Value">${imovie.Title}</span></span>
         <span class="movie-title"><b>Rating</b><span class="Value">${imovie.Ratings[0].Value}</span></span>
         <span class="movie-title"><b>Director</b><span class="Value">${imovie.Director}</span></span>
         <span class="movie-title"><b>Release Date</b><span class="Value">${imovie.Released}</span></span>
         <span class="movie-title"><b>Genre</b><span class="Value">${imovie.Genre}</span></span>
          </div>     
     </div>
     `;
     
     card.appendChild(movieElm);
 }