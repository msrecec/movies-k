const moviesMap = new Map()

async function getAllMovies() {
    return (await fetch('http://localhost:3000/movies')).json();
}

async function deleteMovieById(id) {
    return (await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
}

window.handleMoviesDelete = async (id) => {
    await deleteMovieById(id)
    await init()
}

async function init() {
    const tempMovies = await getAllMovies()
    for (let movie of tempMovies) {
        moviesMap.set(movie.name, movie)
    }
    const moviesContainer = document.getElementById('movies-container')
    let moviesHTML = ''
    for (let movie of tempMovies) {
        moviesHTML += createMovieHTML(movie)
    }
    moviesContainer.innerHTML = enrichMoviesHTML(moviesHTML);
}

function createMovieHTML(movie) {
    return `<div class="flex-element"> 
                                <h3>${movie.name}</h3>
                                <h4>${movie.author}</h4>
                                <button onclick="handleMoviesDelete('${movie.id}')">delete movie</button> 
                           </div>`;
}

function enrichMoviesHTML(moviesHTML) {
    return `<div class="flex-element">
                   <a href="/movies/ui/movies-add" ><button class="nav-btn">Add Movie</button></a>
                  </div>
                 ` + moviesHTML +
        `<div class="flex-element">
                       <a href="/" ><button class="nav-btn">Home</button></a>
                      </div>
                     `;
}

init().then(() => {
    console.log('Fetched movies')
}).catch((err) => {
    console.error(err)
})

