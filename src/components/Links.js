import React, { useEffect, useState } from 'react';

import { LinkForm } from './LinkForm';

import { db } from '../database/firebase';

import { toast } from 'react-toastify';

export const Links = () => {

    const [ links, setLinks ] = useState( [] );
    const [ currentID, setcurrentID ] = useState('');

    const getLinks = () => {        
        db.collection('links').onSnapshot(querySnapshot => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });

            setLinks( docs );
        });
    };

    const addOrEditLink = async ( linkObject ) => {
        if ( currentID === '' ) {
            await db.collection('links').doc().set( linkObject );
            toast('New link added', { type: 'success' });
        } else {
            await db.collection('links').doc( currentID ).update( linkObject );
            toast('Link updated', { type: 'success' });
            setcurrentID('');
        }
    }

    const onDeleteLink = async ( id ) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this link?');
        
        if ( confirmDelete ) {
            await db.collection('links').doc( id ).delete();
            toast('Link deleted', { type: 'error', autoClose: 2000 });
            setcurrentID('');
        }
    }

    useEffect(() => {
        console.log('Obteniendo datos...');
        getLinks();
    }, [])

    return (
        <div>
            <div className='col-md-8 offset-md-2'>
                <LinkForm {...{ addOrEditLink, currentID, links }} />
            </div>
            <h1>Links</h1>
            { 
                links.map(link => (
                    <div key={ link.id } className='card mt-2 bg-light'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h2>{ link.name }</h2>
                                <div>
                                    <i style={{ cursor: 'pointer' }} className='material-icons text-danger' onClick={ () => onDeleteLink( link.id ) }>close</i>
                                    <i style={{ cursor: 'pointer' }} className='material-icons text-success ml-4' onClick={ () => setcurrentID( link.id ) }>create</i>
                                </div>
                            </div>
                            <h4>{ link.description }</h4>
                            <a href={ link.url } target='_blank' rel="noreferrer">Go to website</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
