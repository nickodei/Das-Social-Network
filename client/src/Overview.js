import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapComp from './components/MapComp';
import { Container, Row, Col } from 'react-bootstrap';
import RestaurantListComp from './components/RestaurantListComp';

function Overview() {
  return (
    <div id='overview'>
      <header className="App-header">
        <Container>
          <Row xs={4} md={8}>
            <Col></Col>
            <Col md={{ span: 7}} ><MapComp /></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Overview;
