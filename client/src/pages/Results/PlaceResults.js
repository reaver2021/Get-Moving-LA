import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List'
import API from '../../util/jobAPI';
import Jumbotron from '../../components/Jumbotron'
import JobBtn from '../../components/JobBtn'

class PlaceResults extends Component {
    state = {
        places: [],
        target: '',
        noResults: false
    };

    componentDidMount() {
        const results = this.props.location.results
        if (results && results.length > 0) {
            
            this.setState({
                places: results.filter((index) => index < 5),
                target: '_blank'
            });
        } else {
            this.setState({
                noResults: true
            })

        }
    }

    savePlace = place => {
        API.savePlace(place)
            .then(res => {
                const currentPlaces = this.state.place;
                const filterPlaces = currentPlaces.filter(place => place.id !== res.place.id)
                this.setState({
                    places:filterPlaces
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        if(this.state.noResults) {
            return(
                <div>
                    <Jumbotron>
                        <h1 className='display-4'>Get Moving LA!</h1>
                        <p className='lead'>Find your Ideal Job in Los Angeles!</p>
                        <hr className='my-4' />
                        <p className='lead'>
                            <Link className='btn btn-default btn-lg' to='/placesearch' role='button'>New Search</Link>
                        </p>
                    </Jumbotron>
                    <Container>
                      <Link to ='/'>No Results - click here to search again.</Link>
                    </Container>
                </div>
            )
        }
        return (
            <div>
                <Jumbotron>
                <h1 className='display-4'>Get Moving LA!</h1>
                        <p className='lead'>Find Places to See and Explore in Los Angeles</p>
                        <hr className='my-4' />
                        <p className='lead'>
                            <Link className='btn btn-default btn-lg' to='/placesearch' role='button'>New Search</Link>
                        </p>
                </Jumbotron>
                    <Container>
                        <h2>Search Results</h2>
                        <List>
                            {this.state.places.map((place, index) =>
                                <ListItem key={place.id}>
                                    <div className='date-div'>

                                            <p>{place.results.title}</p>
                                            <p>{place.results.description}</p>
                                    </div>
                                    <div className='job-btn-div'>
                                        <JobBtn
                                            key={'' + place.id + index}
                                            btntype='info'
                                            onClick={() => this.savePlace({
                                                title: place.results.title,
                                                location: place.results.near,
                                                description: place.results.description,
                                            })}
                                        >
                                            Save
                                        </JobBtn>
                                    </div>
                                </ListItem>
                            )}
                        </List>
                    </Container>
            </div>
        )

    }
}

export default PlaceResults