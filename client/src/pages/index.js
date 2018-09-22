import React from 'react';
import logo from './logo.svg';
import './index.css';
import SurveyCard from '../components/SurveyCard';
import AsyncList from '../components/AsyncList'
import Loading from '../components/Loading';
import HeadLine from '../components/form/HeadLine';
import { connect } from 'react-redux'

const Home = ({ user }) => (
    <div className="App">
        <ReactSpinny />
        <div className="container section">
            <HeadLine heading='Check out a new Survey!' subheading={`Welcome ${user.name || user.username}`} />
            <AsyncList
                url="/api/survey/all"
                render={({ list, isLoading }) => isLoading ? <Loading /> :
                    list.map((survey, index) => (
                        <SurveyCard key={index} survey={survey} />
                    ))
                } />
        </div>
    </div >
);


const ReactSpinny = () => (
    <header className="App-header">
        <img className="App-logo" src={logo} alt="React Icon" />
        <img className="App-logo" src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&amp;alt=media" alt="Redux Icon" />
        <h1 className="App-title">React + Redux</h1>
        <h3>...and more</h3>
    </header>
)

const mapStateToProps = state => ({ user: state.auth })

export default connect(mapStateToProps)(Home);