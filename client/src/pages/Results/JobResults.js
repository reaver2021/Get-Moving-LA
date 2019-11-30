import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List'
import API from '../../../util/jobAPI';
import Jumbotron from '../../components/Jumbotron'

class JobResults extends Component {
    state = {
        jobs: [],
        target: '',
        noResults: false
    };

    componentDidMount() {
        const data = this.props.location.data
        if (data && data.results.length > 0) {
            
            this.setState({
                jobs: data.results.filter((value, index) => index < 5),
                target: '_blank'
            });
        } else {
            this.setState({
                noResults: true
            })
        }
    }

    saveJob = job => {
        API.saveJobs(job)
            .then(res => {
                const currentJobs = this.state.jobs;
                const filterJobs = currentJobs.filter(job => job.id !== res.data.id)
                this.setState({
                    jobs:filterJobs
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
                            <Link className='btn btn-default btn-lg' to='/' role='button'>New Search</Link>
                            <Link className='btn btn-default btn-lg' to='/profile' role='button'>Saved Jobs</Link>
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
                        <p className='lead'>Find your Ideal Job in Los Angeles!</p>
                        <hr className='my-4' />
                        <p className='lead'>
                            <Link className='btn btn-default btn-lg' to='/' role='button'>New Search</Link>
                            <Link className='btn btn-default btn-lg' to='/profile' role='button'>Saved Jobs</Link>
                        </p>
                </Jumbotron>
                    <Container>
                        <h2>Search Results</h2>
                        <List>
                            {this.state.jobs.map((job, index) =>
                                <ListItem key={job.id}>
                                    <div className='date-div'>
                                        <a
                                            key={'' + index + job.id}
                                            href={job.results.redirect_url}
                                            target={this.state.target}
                                        >
                                        </a>
                                            <p>{job.results.title}</p>
                                        <p>{job.results.description}</p>
                                    </div>
                                    <dib className='job-btn-div'>
                                        <JobBtn
                                            key={'' + job.id + index}
                                            btntype='info'
                                            disabled={job.results.redirect_url === '/'}
                                            onClick={() => this.saveJob({
                                                title: job.results.title,
                                                location: job.results.location.area[3],
                                                description: job.results.description,
                                                link: job.results.redirect_url
                                            })}
                                        >
                                            Save
                                        </JobBtn>
                                    </dib>
                                </ListItem>
                            )}
                        </List>
                    </Container>
            </div>
        )

    }
}

export default JobResults