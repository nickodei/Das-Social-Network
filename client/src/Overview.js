import './Overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapComp from './components/MapComp';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import RestaurantListComp from './components/RestaurantListComp';

function Overview() {
  return (
    <div>
      <header className="App-header" id='overview'>
        <Navbar />
        <div className='hide-col'>s</div>
        <Container fluid >
          <Row xs={4} md={8}>
            <Col className="col1" xs={{ span: 4, offset: -5 }} >
              <RestaurantListComp /></Col>
            <Col md={{ span: 8 }} className="col2"><MapComp /></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Overview;
