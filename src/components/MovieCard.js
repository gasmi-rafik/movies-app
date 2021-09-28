import React from 'react'
import Rating from './Rating/Rating'
// import 'material-icon'
import './MovieCard.css'
const MovieCard = ({ el }) => {
    return (
        <div>
            <div class="movie_card" id="bright">
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={el.url} />
                        <h1>{el.name}</h1>
                        <h4>2017, David Ayer</h4>
                        <span class="minutes"><Rating rate={el.rate} /></span>
                        <p class="type">Action, Crime, Fantasy</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">
                            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.
                        </p>
                    </div>
                    <div class="movie_social">
                        <ul>
                            <li><i >share</i></li>
                            <li><i ></i></li>
                            <li><i >chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <div class="blur_back bright_back"><img src={el.url} style={{height :"100%" , width:"100%"}}/></div>
            </div>

        </div>

    )
}

export default MovieCard
