import Carousel from 'react-bootstrap/Carousel';


const carouselImages = [
{src:"https://i.ibb.co/r4QrVKj/Event-Teasers-Cosplay.png", alt:"Cosplay"},
{src:"https://i.ibb.co/XDvZt0V/Event-Teasers-Quiz.png", alt:"Quiz competition"},
{src:"https://i.ibb.co/G7nxPKH/Event-Teasers-1.png", alt:"Drawing Competition"},
{src:"https://i.ibb.co/qx6YTPR/Event-Teasers-Meme.png", alt:"Meme making Competition"},
{src:"https://i.ibb.co/6rQZfLy/Event-Teasers-Karaoke.png", alt:"Karaoke Competition"},
]


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item style={{height: '400px', overflow: 'hidden '}} >
        <img
          className="d-block w-100"
          src={carouselImages[0].src}
          alt={carouselImages[0].alt}
          style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(50%)' }}
        />
        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{carouselImages[0].alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={carouselImages[1].src}
          alt={carouselImages[1].alt}
          style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(50%)' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{carouselImages[1].alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={carouselImages[2].src}
          alt={carouselImages[2].alt}
          style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(50%)' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{carouselImages[2].alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={carouselImages[3].src}
          alt={carouselImages[3].alt}
          style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(50%)' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{carouselImages[3].alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={carouselImages[4].src}
          alt={carouselImages[4].alt}
          style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(50%)' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{carouselImages[4].alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;