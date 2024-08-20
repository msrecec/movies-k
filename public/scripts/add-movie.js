window.addMovie = async () => {
    const movieTitle = document.getElementById('movie-title')
    const movieDirector = document.getElementById('movie-director')

    const title = movieTitle.value
    const director = movieDirector.value
    await addMovie({name: title, author: director})

    // jedan nacin
    const moviesBack = document.getElementById('movies-back')
    moviesBack.click()
    // drugi nacin -> routanje
}

async function addMovie(movie) {
    return (await fetch(`http://localhost:3000/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })).json();
}
