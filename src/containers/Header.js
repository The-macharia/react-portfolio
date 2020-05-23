import React from 'react'
import Nav from '../components/Navigation/Nav'


const Header = (props) => {
    return (
        <section id="home">
            <div className="container">
                <Nav links={props.links} />
            </div>
        </section>
    )
}

export default Header