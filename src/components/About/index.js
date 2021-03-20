import React from 'react'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={process.env.PUBLIC_URL + "/assets/cover/cover-image.jpg"} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About