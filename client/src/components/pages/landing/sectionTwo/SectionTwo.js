import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SectionTwo extends Component {
    state = {  }
    render() { 
        return (
            <section id="two" className="wrapper style1 special">
                <div className="inner">
                    <header className="major">
                        <h2>Our Services</h2>
                        <p>We offer a lifestyle inspired work environment, creating a collaborative space in the Outer Sunset of San Francisco. <span>Join</span> a community of businesses and individuals focused on creating solutions <em>for a better tomorrow.</em></p>
                    </header>
                <section className="split">
                    <article>
                        <h4>Features:</h4>
                        <p>Printers, 3 private offices, Andytown coffee available, Coffee and restaurants on same block, Surf lockers,Bike racks, Hot outdoor showers, Telephone booths for privacy, Lounge area</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                        </article>
                        <article>
                        <h4>Events:</h4>
                        <p>Sunset Space x Surfrider holiday fundraising party. DIY workshops - creating household items in bulk to eliminate single use plastics (toothpaste, shampoo, soap, sunscreen). Wine and wreath-making night</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </article>
                </section>
                </div>
            </section>
          );
    }
}
 
export default SectionTwo;