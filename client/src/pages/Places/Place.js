import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PlaceAPI from '../../util/placeAPI';
import { Container } from '../../components/Grid';
import { Input, FormBtn } from "../../components/Form";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Search.css'

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

            PlaceAPI.getNewPlaces(title)
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
                        src='https://s3.amazonaws.com/mentoring.redesign/s3fs-public/styles/aspect_ratio__2_1/public/los-angeles.jpg?itok=83iI8Iqk'
                        alt="First slide"
                        fluid='true'
                        />
                        <Carousel.Caption>
                        <h1>Find A Job!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/1200px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg'
                        alt="Third slide"
                        fluid='true'
                        />
                        <Carousel.Caption>
                        <h1>Find Things to Do!</h1>
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
                            <h1>Find Things to See!</h1>
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
                                    placeholder='Search Jobs (Required)'
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