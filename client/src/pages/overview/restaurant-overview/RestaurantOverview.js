import './RestaurantOverview.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


const ColoredLine = ({ color, width }) => (
    <hr
        style={{
            backgroundColor: color,
            height: 5,
            width: width,
        }}

    />
);


function RestaurantsOverview() {
    let deutscheRestaurants = [];

    for (let cnt = 0; cnt < 20; cnt++) {
        deutscheRestaurants.push(<Row><center><a href="" className='linkstyle'>Deutsches Restaurant</a></center></Row>);
    }

    return (
        <div id='restaurants'>
            <div style={{ marginTop: 75 }}></div>
            <center>
                <ColoredLine color="white" width={"90%"} />
            </center>
            <h2 style={{ marginTop: 75 }}>Restaurants</h2>
            <Container>
                <center>
                    <Row style={{ marginTop: 50 }}>
                        <Col><img src='https://www.chefkoch.de/magazin/sites/default/files/styles/hero/public/media/image/2017-06/CK_0217_Menue_Aufmacher_Gruenkohl.jpg?itok=vU7XxOVi' height={180} className='picture-animation'></img></Col>
                        <Col><img src='https://www.chefkoch.de/magazin/sites/default/files/styles/slick_media/public/media/image/2020-07/eckis-italienischer-nudelsalat-mit-pesto.jpg?itok=swy-VpOD' height={180} className='picture-animation'></img></Col>
                        <Col><img src='https://www.rhein-wied-news.de/images/2018/10/asiatische-ku%CC%88che-pan-asia.jpg' height={180} className='picture-animation'></img></Col>
                        <Col><img src='https://media.istockphoto.com/photos/waiting-for-the-guesttable-elegance-set-picture-id1187685693?k=20&m=1187685693&s=612x612&w=0&h=CTR1tivjMz80K7dPqOWyvxHYN1uARTt8CzyX8xF9eGs=' height={180} className='picture-animation'></img></Col>
                    </Row>
                    <Row style={{ marginTop: 50 }}>
                        <Col className='picture-animation'><u>German cuisine:</u> </Col>
                        <Col className='picture-animation'><u>Italian cuisine:</u></Col>
                        <Col className='picture-animation'><u>Asian cuisine:</u></Col>
                        <Col className='picture-animation'><u>Other cuisines:</u></Col>
                    </Row>
                    <ColoredLine color="white" width={"50%"} />
                </center>
            </Container>
            <Container>
                <center>
                    <Row>
                        <Col>
                            {deutscheRestaurants}
                        </Col>
                        <Col>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Italienisches Restaurant</a></center></Row>
                        </Col>
                        <Col>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Asiatisches Restaurant</a></center></Row>
                        </Col>
                        <Col>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                            <Row><center><a href="" className='linkstyle'>Anderes Restaurant</a></center></Row>
                        </Col>
                    </Row>
                </center>
            </Container>
        </div>
    );
}

export default RestaurantsOverview;