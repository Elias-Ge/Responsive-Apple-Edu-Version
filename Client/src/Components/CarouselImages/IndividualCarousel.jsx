import Carousel from 'react-bootstrap/Carousel';

function IndividualCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.apple.com/v/home/ar/images/promos/apple-watch-se/promo_apple_watch_se_avail__e5unstfyokae_large_2x.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://applelatest-ec0f3.web.app/static/media/Fourth.f9edafdd894fe8074411.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://applelatest-ec0f3.web.app/static/media/twelve.7a7368249c0b15cd949f.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualCarousel;