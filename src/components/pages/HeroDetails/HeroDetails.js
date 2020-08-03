import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {showHero, addToFavorite} from '../../../redux/actions';
import {Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const HeroDetails = ({item, showHero, addToFavorite}) => {
    const heroDetailsWrapStyle = {
        display: 'flex',
    };
    const heroDetailsStyle = {
        padding: '30px',
    };

    const id = parseInt(useParams().id);
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        showHero(id);
    }, []);

    const onClickHandler = () => {
        addToFavorite(id);
        setFavorite(true);
    };

    if (item === undefined) {
        return <Redirect to='/'/>
    }
    return (
        <div style={heroDetailsWrapStyle}>
            <div style={heroDetailsStyle}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div style={heroDetailsStyle}>
                <h1>{item.name}</h1>
                <div><strong>ID: </strong>{item.id}</div>
                <div><strong>Gender: </strong>{item.gender}</div>
                <div><strong>Species: </strong>{item.species}</div>
                <button onClick={onClickHandler}
                        disabled={item.isFavorite}>
                    {item.isFavorite ? 'Added to favorite' : 'Add To Favorite'}
                </button>

            </div>


        </div>
    );
};

HeroDetails.propTypes = {
    item: PropTypes.object.isRequired,
    showHero: PropTypes.func.isRequired,
    addToFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = ({item}) => {
    return {
        item,
    }
};
const mapDispatchToProps = {
    showHero,
    addToFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);