import React, {useEffect} from 'react';
import {charactersLoaded, charactersRequested, charactersError} from '../../../redux/actions';
import withRickAndMortyApi from "../../hoc";
import {connect} from 'react-redux';
import Spinner from "../../Spinner";
import PropTypes from "prop-types";
import ErrorIndicator from "../../ErrorIndicator";
import {Link} from "react-router-dom";


const PeopleList = ({characters}) => {
    const charactersStyle = {
        padding: '5px',
        marginBottom: '5px',
        display: 'block'
    };

    return (
        <div>
            {characters.map((character) => {
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
PeopleList.propTypes = {
    characters: PropTypes.array.isRequired,
};

const PeopleListContainer = ({characters, loading, error, rickAndMortyApi, charactersLoaded, charactersRequested, charactersError}) => {


    useEffect(() => {
        charactersRequested();
        rickAndMortyApi.getCharacters().then(res => charactersLoaded(res)).catch(error => charactersError(error));

    }, []);

    if (loading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;
    return <PeopleList characters={characters}/>
};

PeopleListContainer.propTypes = {
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    rickAndMortyApi: PropTypes.object.isRequired,
    charactersLoaded: PropTypes.func.isRequired,
    charactersRequested: PropTypes.func.isRequired,
    charactersError: PropTypes.func.isRequired,
};


const mapStateToProps = ({characters, loading, error}) => {
    return {
        characters,
        loading,
        error
    }
};
const mapDispatchToProps = {
    charactersLoaded,
    charactersRequested,
    charactersError,

};


export default withRickAndMortyApi()(connect(mapStateToProps, mapDispatchToProps)(PeopleListContainer));