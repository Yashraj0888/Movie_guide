 const APIKey='379678d6cd0b9aa62c79075d797934b3';
 let movieNameRef = document.getElementById("movie-name");
 let searchBtn = document.getElementById("search-btn");
 let result = document.getElementById("result");
 
 
 //function to fetch data from api
 
 let getMovie = () => {
     let movieName = movieNameRef.value;
  
     //if input field is empty
 
     if (movieName.length <= 0) {
         result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
     }
 
     //if input isn't empty
     else {
         fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${APIKey}`).then((resp) => resp.json()).then((data) => {
             //if movie exist in database
           
                console.log("jisdi");
                 result.innerHTML = `
                     <div class="info">
                         <img src="https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}" class="poster">
                         <div>
                             <h2>${data.results[0].title}</h2>
                             <div class="rating">
                                 <img src="star.png">
                                 <h4>${data.results[0].vote_average}</h4>
                             </div>
                             <div class="details">
                                 <span>${data.results[0].release_date}</span>
                                 <span>${data.results[0].popularity}</span>
                             </div>
                             
                         </div>
                     </div>
                     <h3>Plot:</h3>
                     <p>${data.results[0].overview}</p>
                     
                 `;
             
 
             //if movie doesn't exist in database
            //  else {
            //      result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            //  }
         })
             //if error occurs
             .catch(() => {
                 result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
             });
     }
 };

 searchBtn.addEventListener("click", getMovie);
 window.addEventListener("load", getMovie);

