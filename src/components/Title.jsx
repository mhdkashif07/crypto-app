import React from 'react'

const Title = (props) => {
    return (
        <div className="title__section">
            <div className="title">
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default Title
