import * as React from 'react';
import './App.css';






interface IState {
  open: boolean
}

export default class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
    }
  }



  public render() {
    return (
      <div className="header-wrapper">
				<div className="container header"/>
					
					
			
			</div>
    );
  }

 




}

