import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List'
import API from '../../../util/jobAPI';

class Results extends Component {
    state = {
        jobs: [],
        target: '',
        noResults: false
    };

    componentDidMount() {
        const date = this.props.location.data
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
                  <Container>
                      <Link to ='/'>No Results - click here to search again.</Link>
                  </Container>
                </div>
            )
        }

    }
}