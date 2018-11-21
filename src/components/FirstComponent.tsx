import Button from '@material-ui/core/Button';
import * as React from "react";

import TextField from '@material-ui/core/TextField';
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
  
}

