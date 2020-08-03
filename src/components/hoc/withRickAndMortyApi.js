import React from 'react';
import {RickAndMortyApiConsumer} from '../RickAndMortyApiContext/RickAndMortyApiContext';
const withRickAndMortyApi = () => (Wrapped)=>{


    return (props)=>{
        return(
            <RickAndMortyApiConsumer>
                {
                    ( rickAndMortyApi ) =>{
                      return  <Wrapped {...props} rickAndMortyApi={rickAndMortyApi}/>
                    }
                }

            </RickAndMortyApiConsumer>
        )
    }
};

export default withRickAndMortyApi;