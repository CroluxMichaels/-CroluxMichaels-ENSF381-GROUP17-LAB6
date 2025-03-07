import react from 'react';

function About(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            {/* <p>About Us</p> */}
            <p>{props.description}</p>
        </div>
    );
}

export default About;