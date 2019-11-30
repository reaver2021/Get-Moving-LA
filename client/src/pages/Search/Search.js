import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import JobAPI from '../../util/jobAPI';
import { Container } from '../../components/Grid';
import { Input, FormBtn } from "../../components/Form";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Search.css'

class Search extends Component {
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

            JobAPI.getNewJobs(title)
                .then(res => {
                    console.log(res.data.items);

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
                pathname: '/results',
                data: { results: this.state.results}
            }} />
        }

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            width="30"
                            height="30"
                            className= "fas fa-kiwi-bird"
                        />{' '}
                        Get Moving LA!
                    </Navbar.Brand>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Find Things to Do!</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Sign-Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                
            
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
                <Container>
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                            <p class="lead">Moving to Los Angeles? In search of a new job, new apartment, and tons of new fun? Looking to the hustle and lifestyle of Los Angeles with an experience in one click? Get Moving Los Angeles provides the most current job postings from all industries across Greater Los Angeles to match your skills and ambitions. Connecting people and job opportunities to align with who you are, while matching apartment listings in surrounding cities and locating fun happenings all at once.
                                Get Moving Los Angeles allows you to create a profile and bookmark new job opportunities to help you stay organized and make the search process easier, less overwhelming. You can post a resume or apply to jobs by directly submitting your LinkedIn profile.
                                New Job and new apartment too? Search for apartment rental listings in surrounding Los Angeles Cities and add them to your Favorites! </p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                            <p className="lead">Get Moving Los Angeles gives you the latest available rentals to align your move with your new job as a new Angeleno. 
                                You can bookmark, view apartment listings, and contact rental companies directly.
                                Ready to experience Los Angeles world-class nightlife with extravagant spaces, exciting new themes, and vibrant décor? Never wonder where to find nightlife in L.A near your neighborhood! If dancing isn’t your thing, but a good cocktail is right up your alley, L.A. has a great mix of bars and lounges to try. Get Moving Los Angeles helps you easily locate “fun” happenings in Los Angeles and allows you to add them to your Favorites in your profile to keep the fun going.  Get Moving Los Angeles guides you to find and choose everything from street food, hidden gems from LA locals, live music, cocktail lounges, to adventurous hiking.
                                Los Angeles stands for endless possibilities, so reach for the stars and Get Moving!</p>
                            </div>
                        </div>
                        <Row>
                            <Image 
                            src="https://www.gibsondunn.com/wp-content/uploads/2017/07/LosAngeles-Header.jpg" 
                            width='100%'
                            maxheight='50%'
                            fluid/>
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



export default Search;
