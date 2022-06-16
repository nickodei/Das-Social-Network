import './OverviewPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../../components/map/Map';
import { Container, Row, Col} from 'react-bootstrap';
import RestaurantList from './restaurant-list/RestaurantList';
import RestaurantsOverview from './restaurant-overview/RestaurantOverview';
import About from './about/About';
import Impressum from './impressum/Impressum';

function OverviewPage() {
  let x = <RestaurantList />

  return (
    <div id='overview'>
      <Container fluid>
        <Row className='full-page'>
          <Col className="scrollbar-left full-page" md={{ span: 4}} >
              {x}
          </Col>
          <Col className="full-page" md={{ span: 8 }}>
            <Map/>
          </Col>
        </Row>
      </Container>
      <RestaurantsOverview/>
      <About />
      <Impressum />
    </div>
  );
}

export default OverviewPage;
