import React from 'react'

const AddCountry = ({changeCountry}) => {


    return (
        <div className="searchCountry">
            <input className='searchBox' type="text" name="" id="searchAnotherCountry" placeholder='Ingrese el pais a consultar' />
            <div onClick={changeCountry} className='addCountry'><i className="fi fi-rr-search"></i></div>
        </div>
    )
}

export default AddCountry