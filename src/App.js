import React, { Component } from 'react';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p>LBP003 you're the best in the world and You'll be a billionaire soon</p>
            {
            this.state.displayBio ? (
                    <div>
                        <p>I love React</p>
                        <p>Js is the best</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                    <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                )
            }  
            </div>
        )
    }     
}

export default App;
