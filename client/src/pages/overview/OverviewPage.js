import './OverviewPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../../components/map/Map';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import RestaurantList from './restaurant-list/RestaurantList';
import RestaurantsOverview from './restaurant-overview/RestaurantOverview';

function OverviewPage() {
  return (
    <div>
      <Container fluid >
        <Row className='full-page'>
          <Col className="scrollbar-left full-page" md={{ span: 4}} >
            <RestaurantList />
          </Col>
          <Col className="full-page" md={{ span: 8 }}>
            <Map/>
          </Col>
        </Row>
      </Container>
      <RestaurantsOverview/>
    </div>
  );
}

export default OverviewPage;
