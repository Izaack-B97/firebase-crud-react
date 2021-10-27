import React, { useEffect } from 'react';

import { LinkForm } from './LinkForm';

import { db } from '../database/firebase';

export const Links = () => {
    
    const getLinks = () => {
        // const querySnapshot = await db.collection('links').get();
        // querySnapshot.forEach(doc => {
        //     console.log( doc.data() );
        // });
        
        db.collection('links').onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log( doc.data() );
            });
        });
    };

    const addOrEditLink = async ( linkObject ) => {
        await db.collection('links').doc().set( linkObject );
        console.log('New link added');
    }

    useEffect(() => {
        console.log('Obteniendo datos...');
        getLinks();
    }, [])

    return (
        <div>
            <LinkForm addOrEdit={ addOrEditLink } />
            <h1>Link</h1>
        </div>
    )
}
