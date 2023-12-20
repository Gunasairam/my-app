


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1808632153/photo/sea-wave-beats-on-the-rock-against-the-sunset-silhouettes-of-a-flock-of-flying-birds.jpg?s=2048x2048&w=is&k=20&c=_ZJK4OKPGNCCMklItAkAMZR4tf7pCRGL41T7PeeTi9o=" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
