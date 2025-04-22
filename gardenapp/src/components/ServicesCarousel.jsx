import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function ServicesCarousel() {
  return (
    <Carousel data-bs-theme="dark" className="carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/yourgarden.jpg"
        alt=""
      />
      <Carousel.Caption>
        <h5>Garden planning</h5>
        <p>Let us plan your dream garden.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/apron.jpg"
        alt=""
      />
      <Carousel.Caption>
        <h5>Gardening apparel</h5>
        <p>Shop for custom gardening apparel for you ad your family.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/towers.jpg"
        alt=""
      />
      <Carousel.Caption>
        <h5>Aeroponic towers</h5>
        <p>Save space and grow vertically.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default ServicesCarousel


    