import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
    render() {

        const filmNodes = this.props.films.map(film => {
            return <Film name={film.name} url={film.url} key={film.id}></Film>
        })

        return (
            <div className="film-list">
                {filmNodes}
            </div>
        )
    }
}

export default FilmList;