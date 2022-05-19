import React  from "react";

function Pokemon({id, name, image, type}) {

    const style = `thum-container ${type}`
    return(
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default Pokemon