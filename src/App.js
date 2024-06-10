import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


// console.log(AlexaImage);
// console.log(CortanaImage);
// console.log(SiriImage);

function App(){
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">AI Assistant</p>

                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard 
                        title="Alexa"  
                        handle="@alexaai" 
                        image={AlexaImage}
                        description="Alexa was created by Amazon and helps buy things"
                        />
                        </div>
                        
                        <div className="column is-4">
                        <ProfileCard 
                        title="Siri" 
                        handle="@siriai" 
                        image={SiriImage}
                        description="Siri was created by Apple to help with schedule organization and ordering things"
                        /> 
                        </div>
                        
                        <div className="column is-4">  
                        <ProfileCard 
                        title="Google" 
                        handle="@googleai" 
                        image={CortanaImage}
                        description="Google was created by Google with the ability to take full sentences and order things"
                        /> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
