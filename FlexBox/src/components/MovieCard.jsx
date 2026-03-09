function MovieCard({movie}) {

    return(
        <>
            <div style={{border: "1px solid black"}}>
                <h2>{movie.cim}</h2>
                <p>{movie.bemutatas}</p>
            </div>
        </>
    )
}
export default MovieCard;