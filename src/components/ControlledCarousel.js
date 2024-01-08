// ControlledCarousel.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSwipeable } from 'react-swipeable';

// ControlledCarousel.js

// ... (previous imports)

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  });

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      handlePrev();
    } else if (direction === 'right') {
      handleNext();
    }
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app-container" {...handlers}>
      <div className="sidebar">
        <ul>
          <li> + New Flow </li>
          <li> Coffee </li>
          <li> Feedback </li>
          <li> Post-Grad-Plans </li>
          <li> Launch Plan </li>
          <li> Victoria Wang </li>
          <li> Advait Kalakkad </li>
          <li> Danny Trinh </li>
        </ul>
      </div>
      <div className="main-content">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {[1, 2, 3].map((slideNumber) => (
            <Carousel.Item key={slideNumber}>
              <div className="card">
                <Carousel.Caption>
                  {slideNumber === 1 && (
                    <>
                      <h2>Maria Sa Lu</h2>
                      <p>Email Content...</p>
                      <h2>Coffee?</h2>
                      <p>Was wondering if you'd be interested in meeting my team at Philz coffee at 11 today.</p>
                      <p>Marisa</p>
                    </>
                  )}
                  <h3>{`Slide ${slideNumber} label`}</h3>
                  <p>
                    {`Nulla vitae elit libero, a pharetra augue mollis interdum. Praesent commodo cursus magna,
                    vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.`}
                  </p>
                </Carousel.Caption>
                <div className="card-body">
                  <div className="button-group mt-2">
                    <button className="btn btn-primary">Reply</button>
                    <button className="btn btn-success">Forward</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                  <button className="btn btn-outline-secondary mt-2">More Actions</button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="controls">
          <button className="btn btn-outline-primary" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn btn-outline-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlledCarousel;
