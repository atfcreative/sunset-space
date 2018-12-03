import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './pic01.jpg';
import pic2 from './pic02.jpg';

class SectionOne extends Component {
    
    render() { 
        return (
            <section id="one" className="wrapper style2 special">
                <div className="inner">
                    <header className="major">
                        <h3>Ocean Beach, San Francisco</h3>
                        <p>Convenient, freindly, positive vibed work and event space in the outer sunset.</p>
                    </header>
                <section className="spotlights">
                    <section>
                        <span className="image"><img src={pic1} alt="" /></span>
                        <h4>Puppy Dogs</h4>
                        <p>These are the cutest little things arent they? Look at those eyes! Watch out though until you can get them trained, they'll pee all over the back seat of the car.</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </section>
                    <section>
                        <span className="image"><img src={pic2} alt="" /></span>
                        <h4>Kitty Kats!</h4>
                        <p>Who cant resist a fluffy little kitty kat? Nothing cuter in the whole wide world!!! Dont forget to clean the litter box! HEHEHE Watch out for the claws on the new leather couch.</p>
                        <ul className="actions">
                            <li><Link to="#" className="button">Learn More</Link></li>
                        </ul>
                    </section>
                </section>
                </div>
            </section>
          );
    }
}
 
export default SectionOne;