


import Carousel from 'react-bootstrap/Carousel';
import ImageCarousel from './carouselmages';

function UncontrolledExample() {

   
 
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <ImageCarousel text={"https://i.ytimg.com/vi/RHYZIy24x3A/maxresdefault.jpg"}/>
        <Carousel.Caption>
          <h3>Thalapathy vijay</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageCarousel text={"https://static.tnn.in/thumb/msid-99033268,thumbsize-1587720,width-1280,height-720,resizemode-75/99033268.jpg"}/>
        <Carousel.Caption>
          <h3>Ram charan</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < ImageCarousel text={"https://i.ytimg.com/vi/oLGrc4vj_OA/maxresdefault.jpg"}/>
        <Carousel.Caption>
          <h3>Dhanush</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  );
}

export default UncontrolledExample;