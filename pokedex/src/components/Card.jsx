import React from 'react'

function Card({ myName, url, pic }) {
    { console.log(url) }
    return (
        <div>
            <h2>{myName}</h2>
            < img src={pic} alt="" />
            < h2 > {url}</h2>
        </div >
    )
}

export default Card
