import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class SectionFour extends Component {
    render() { 
        return (
            <section id="four" className="wrapper style2 special-alt">
                <div className="inner split">
                    <section>
                        <header className="major">
                        <h2>Amet lorem</h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, lorem in pretium aliquet, lacus dui tristique lacus, vel convallis justo lectus in augue. Tempus pellentesque iaculis imperdiet et elementum lorem sed ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet, lorem pretium aliquet lacus.</p>
                    </section>
                    <form method="post" action="#">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <ul className="actions">
                        <li><Link to="#" className="button">Get started</Link></li>
                        </ul>
                    </form>
                </div>
            </section>
          );
    }
}
 
export default SectionFour;