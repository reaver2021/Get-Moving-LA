import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PlaceAPI from '../../util/placeAPI';
import { Container } from '../../components/Grid';
import { Input, FormBtn } from "../../components/Form";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Place extends Component {
    state = {
        title: '',
        toResults: false,
        results: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.title) {
            const title = this.state.title.trim();

            PlaceAPI.getNewJobs(title)
                .then(res => {
                    console.log(res.items);

                    this.setState({
                        toResults: true,
                        results: res.data.items
                    });
                    
                })
                .catch(err => console.log(err));
                
        }
    };

    render() {
        if (this.state.toResults) {
            return <Redirect to= {{
                pathname: '/placeresults',
                data: { results: this.state.results}
                
            }} />
        }
        return (
            <div>
            
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src='https://i.pinimg.com/originals/a2/d0/4b/a2d04bba1836caa11b80774321ca276b.png'
                        alt="First slide"
                        fluid='true'
                        />
                        <Carousel.Caption>
                        <h1>Find Food to Eat!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src='https://travel.usnews.com/dims4/USNEWS/27d0a1f/2147483647/resize/1280x350%5E%3E/crop/1280x350/quality/85/?url=travel.usnews.com/static-travel/images/destinations/18/hero_Los_Angeles_18_1280x350.jpg'
                        alt="Third slide"
                        fluid='true'
                        />
                        <Carousel.Caption>
                        <h1>Visit Historical LA Stops!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src="https://www.fashionfurniture.com/blog/wp-content/uploads/2019/03/LA-1030x463.jpg"
                        alt="Third slide"
                        fluid='true'
                        />
                         <Carousel.Caption>
                            <h1>Find Places to See!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <Row>
                        <Col>
                            <form style={formStyle}>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name='title'
                                    placeholder='Search Places (Required)'
                                />
                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                    className='btn btn-info'
                                    aligncontent='right'
                                >
                                    Search
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }
}

const formStyle = {
    alignContent: 'center',
    width: '100%',
    paddingLeft: '120px',
    paddingRight: '150px',
}

export default Place;