import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({ movie, onClose }) => {
    useEffect(() => {
        console.log(movie);
    }, [movie]);

    if (!movie) {
        return null;
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <img src={movie.Poster} alt={movie.Title} className="movie-poster-large" />
                <div className='dialog-overlay-in'>
                    <h2 className='font-bold text-2xl text-white'>{movie.Title} ({movie.Year})</h2>
                    <p className='text-white text-lg'><strong>Director:</strong> {movie.Director}</p>
                    <p className='text-xs text-white'>{movie.Plot}</p>
                </div>

                <div className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faClose} />
                </div>

            </div>
        </div>
    )
}

export default MovieDetails