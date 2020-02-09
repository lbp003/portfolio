import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){

        const {link, icon} = this.props.socialProfile;
        
        return(
            <div style={{ margin: 5, display: 'inline-block'}}>
                <a href={link}>
                    <img src={icon} alt='social-icon' style={{ width: 20 }}/>
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connects with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;