import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionThree extends Component {
    state = {  }
    render() { 
        return (
            <section id="three" className="wrapper style1 special">
                <div className="inner">
                    <header className="major alt style2">
                        <h2>Spa Treatments</h2>
                        <p>Teh packsges we offer</p>
                    </header>
                    <section className="features">
                        <section>
                            <span className="far fa-lightbulb fa-3x style3"></span>
                            <h4>The Runaround</h4>
                            <p>Basically this is the lowest level treatment. we dont really do anything with you r animal we just put them on a leash and run them around until htey are tired.</p>
                        </section>
                            <section>
                            <span className="far fa-sun fa-3x style4"></span>
                                <h4>White Ice</h4>
                                <p>Nulla imperdiet, lorem in pretium sed aliquet, lacus dui magna tristique lacus, vel convallis justo lectus in augue. Tempus pellentesque imperdiet et elementum.</p>
                            </section>
                            <section>
                                <span className="fas fa-feather-alt fa-3x style2"></span>
                                <h4>Lacus pretium</h4>
                                <p>Nulla imperdiet, lorem in pretium sed aliquet, lacus dui magna tristique lacus, vel convallis justo lectus in augue. Tempus pellentesque imperdiet et elementum.</p>
                            </section>
                            <section>
                                <span className="fas fa-map-marker-alt fa-3x style3"></span>
                                <h4>Dui volutpat</h4>
                                <p>Nulla imperdiet, lorem in pretium sed aliquet, lacus dui magna tristique lacus, vel convallis justo lectus in augue. Tempus pellentesque imperdiet et elementum.</p>
                            </section>
                    </section>
                    <footer className="major">
                        <ul className="actions">
                        <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </footer>
                </div>
            </section>
          );
    }
}
 
export default SectionThree;