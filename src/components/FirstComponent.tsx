import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MediaStreamRecorder from 'msr';
import * as React from "react";
import Logo from '/src/Logo.png';





interface IState {
        showMe: boolean
      }

export default class FirstComponent extends React.Component<{},IState> {
        constructor(props:any){
                super(props)
                this.state = {
                        showMe: false,
                }
                this.openChat = this.openChat.bind(this)
        }

        public render() {
                return(

                   <div className="chat">
                     <div className="search-header">
                       <form className="search-content">
                         <div className="search">
                         <TextField
                                id="outlined-with-placeholder"
                                label="Search Recipes"
                                placeholder="Search Recipes"
                                className= "textfield"
                                margin="normal"
                                color= "white"
                                
                                />
                           <Button variant="contained" className="Seach-button">Search</Button>
                           <div className="btn" onClick={this.searchByVoice}><i className="fa fa-microphone" /></div>
                         
                         </div>
                       
                       </form>
                     
                     
                     </div>
                     
                        <button>
                                <img className="chat-button" onClick= {this.openChat}src={Logo} height='50'/>    
                        </button>
                        
                        
                           
                            {
                                    this.state.showMe?
                                    <div className="Bot">
                                       
                                        <iframe src='https://webchat.botframework.com/embed/FoodBot2018?s=PipjVlbLYx4.cwA.Fls.ct1frWWI39XSDwezGpJF6aEqvw31UIaf7BPJTWZoYJs'  className="bot"/>
                                    </div>
                                    :null
                                        
                            }
                            
                    </div>
                    
 
                  
                );
        }

       
        public openChat()
                {
                this.setState({
                        showMe:!this.state.showMe
                })
                }
  
        private searchByVoice(){
                const mediaConstraints = {
                        audio: true
                    }
                    const onMediaSuccess = (stream: any) => {
                        const mediaRecorder = new MediaStreamRecorder(stream);
                        mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
                        mediaRecorder.ondataavailable = (blob: any) => {
                            // this.postAudio(blob);
                            mediaRecorder.stop()
                        }
                        mediaRecorder.start(3000);
                    }
                
                    navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
                
                    function onMediaError(e: any) {
                        console.error('media error', e);
                    }
            
            
                    // posting audio
                    fetch('https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
                         // this is a .wav audio file    
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer' + 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMiLCJleHAiOiIxNTQyNTA1ODIyIiwicmVnaW9uIjoid2VzdHVzIiwic3Vic2NyaXB0aW9uLWlkIjoiMTA3N2M1ODNiMGZjNDFiOGEzYjQ3ZDVhMmQ3Zjg0Y2MiLCJwcm9kdWN0LWlkIjoiU3BlZWNoU2VydmljZXMuRnJlZSIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIiLCJzY29wZSI6InNwZWVjaHNlcnZpY2VzIiwiYXVkIjoidXJuOm1zLnNwZWVjaHNlcnZpY2VzLndlc3R1cyJ9.0YANDystYf8o8pG6qKKZFGtbUk7Rb-KxGohO7aN0JMY' ,
                            'Content-Type': 'audio/wav;codec=audio/pcm; samplerate=16000',
                            'Ocp-Apim-Subscription-Key': '8e7baf4ae7814145a82094fd9e9126c2'
                        },    
                        method: 'POST'
                    }).then((res) => {
                        return res.json()
                    }).then((res: any) => {
                        console.log(res)
                    }).catch((error) => {
                        console.log("Error", error)
                    });
        }
}

