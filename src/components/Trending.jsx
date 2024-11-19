import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import movies from '../Utils/utils';
import MovieDetails from './MovieDetails';

const Trending = ({ className }) => {
    const scrollRef = useRef(null);

    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const updateButtonVisibility = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;

        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    // Scrolls to the right by 100px
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        updateButtonVisibility();
        const handleScroll = () => updateButtonVisibility();

        const currentScrollRef = scrollRef.current;
        currentScrollRef.addEventListener('scroll', handleScroll);

        return () => {
            currentScrollRef.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeDialog = () => {
        setSelectedMovie(null);
        setIsDialogOpen(false);
    };


    return (
        <div className={`${className} flex flex-col justify-between`}>
            <div className='text-4xl text-white font-bold cursor-default'>
                <h2>
                    Trending Now
                </h2>
            </div>

            <div className='flex flex-row'>
                <div onClick={scrollLeft} className={`scrollBtn previousBtn p-2 ${showLeftButton ? `show` : `hide`}`}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div ref={scrollRef} className="movie-list mt-5">
                    {movies.map((movie, index) => (
                        <img src={movie.Poster} alt={movie.Title} key={index} className="movie-image" onClick={() => {
                            console.log("movie click");
                            setIsDialogOpen(true);
                            setSelectedMovie(movie);
                        }} />
                    ))}
                </div>

                <div onClick={scrollRight} className={`scrollBtn nextBtn p-2 ${showRightButton ? 'show' : 'hide'}`} >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

            {isDialogOpen &&
                <MovieDetails movie={selectedMovie} onClose={closeDialog} />
            }
        </div>
    )
}

export default Trending
