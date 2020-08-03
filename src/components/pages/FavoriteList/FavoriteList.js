import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const FavoriteList = ({favoriteItems}) => {
    const charactersStyle = {
        padding: '5px',
        marginBottom: '5px',
        display: 'block'
    };

    return (
        <div>
            {favoriteItems.map((character) => {
                return (
                    <Link key={character.id}
                          style={charactersStyle}
                          to={`/hero-details/${character.id}`}
                    >
                        - {character.name}
                    </Link>
                )
            })}
        </div>
    );
};
FavoriteList.propTypes = {
    favoriteItems: PropTypes.array.isRequired,
};


const mapStateToProps = ({favoriteItems}) => {
    return {
        favoriteItems
    }
};

export default connect(mapStateToProps)(FavoriteList);