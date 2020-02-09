import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profilePic from './assets/profile.jpg';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return(
            <div>
                <img src={profilePic} alt='profile Pic' className='profile'/>
                <h1>Hello</h1>
                <p>I'm Mr. LBP003. I'm a software engineer. I love coding. This is my React Js App</p>
            {
            this.state.displayBio ? (
                    <div>
                        <p>Good Luck!</p>
                        <p>You found me</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                    <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                )
            }  
                <hr />
                <Projects />
                <br />
                <SocialProfiles />
            </div>
           
        )
    }     
}

export default App;
