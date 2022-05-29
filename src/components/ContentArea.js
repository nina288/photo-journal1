import React from 'react';
import UserManager from './UserManager';
import MessageArea from './MessageArea';
import AlbumMaker from './AlbumMaker';
 import ContentAreaContext from './ContentAreaContext';


class ContentArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId   : "",
      userName : "",
      loggedIn : false
   };

   this.handleLogInChange = this.handleLogInChange.bind(this);
  
  }

  render() {

    return (
      <ContentAreaContext.Provider value={ {userId:this.state.userId, userName: this.state.userName,loggedIn:this.state.loggedIn}}>

        <div>
          <UserManager logInCallback={ this.handleLogInChange }
           
          showMessageArea={userInfo =>(<MessageArea userInfo={userInfo} />)} />


          { /* Task 4: Add render prop */ }
       <AlbumMaker />
         
        </div>
        </ContentAreaContext.Provider>

    );

  }

  handleLogInChange(logInResult) {

    this.setState ( {
      userId   : logInResult.userId,
      userName : logInResult.userName,
      loggedIn : logInResult.loggedIn
    }, () => { console.log(this.state); });

  }
}

export default ContentArea;
