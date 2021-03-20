import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

const Gallery = (props) => {
    const currentCatagory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects"
    }

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCatagory.name)}</h1>
            <p>{currentCatagory.description}</p>
            <div className="flex-row">
                <img src={photo} className="img-thumbnail mx-1" alt="Examples" />
            </div>
        </section>
    )
}

export default Gallery