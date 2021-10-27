import React, { useState } from 'react'

export const LinkForm = ({ addOrEdit }) => {

    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    };

    const [ formData, setFormData ] = useState( initialStateValues );

    const { url, name, description } = formData;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        addOrEdit( formData );
        setFormData( initialStateValues );
    }

    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        // console.log( name, value );
        setFormData({
            ...formData,
            [ name ] : value
        })
    }

    return (
        <form className='card card-body' onSubmit={ handleSubmit } >
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                    <i className="material-icons">insert_link</i>
                </div>
                <input name='url' type="text" className='form-control' placeholder='https://someurl.com' onChange={ handleInputChange } value={ url } />
            </div>
            <div className='form-group input-group mt-2'>
                <div className='input-group-text bg-light'>
                    <i className="material-icons">create</i>
                </div>
                <input name='name' type="text" className='form-control' placeholder='Website name' onChange={ handleInputChange } value={ name }/>
            </div>
            <div className='form-group mt-2'>
                <textarea name='description' rows='3' className='form-control' placeholder='Write a description...' onChange={ handleInputChange } value={ description }/>
            </div>
            <button className='btn btn-primary btn-block mt-2'>
                Save
            </button>
        </form>
    )
}
