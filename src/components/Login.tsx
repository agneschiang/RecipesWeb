import * as React from "react";


interface IState{

    username:any,
    password: any,
    error:any 
    
   
  }



export default class Login extends React.Component<{}, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
          username: '',
          password: '',
          error: '',
        };
    
        
      }


      public render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
    
        return (
           <div className="login-form">
              <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Log in</h2>       
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                  </div>
                  <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                      <a href="#" className="pull-right">Forgot Password?</a>
                    </div>        
                </form>
                  <p className="text-center"><a href="#">Create an Account</a></p>
            </div>




        );
      }
  }
  







  
      
    
      





