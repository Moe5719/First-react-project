import { Carousel } from 'react-bootstrap';
import products from './SlideShowProducts';


function SlideShow() {
    
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Carousel>
          {products.map((product, index) => (
            <Carousel.Item key={index} style={{ height: '400px' }}> {/* Adjust the height as needed */}
              <img
                className="d-block w-100"
                src={product.img}
                alt={product.title}
                style={{ objectFit: 'cover', height: '100%' }} 
              />
              <Carousel.Caption style={{ color: 'red' }}> 
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      );
}

export default SlideShow;