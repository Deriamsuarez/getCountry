import React from 'react'

const CountryCard = ({data}) => {

    return (
        <div className="card">
            <div className="headerCard">
                <img src={`${data[0]?.flag}`} alt="" />
            </div>
            <div className="dataContainer">
                <h3>{data[0]?.name}</h3>
                <ul>
                    <li><span>Ciudad:</span><strong>{data[0]?.capital}</strong></li>
                    <li><span>Time zone:</span><strong>{data[0]?.timezones}</strong></li>
                    <li><span>Poblacion:</span><strong>{data[0]?.population}</strong></li>
                    <li><span>Lenguaje:</span><strong>{data[0]?.languages[0].name}</strong></li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard