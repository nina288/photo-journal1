import React from 'react';
import UserManager from './UserManager';
import MessageArea from './MessageArea';
import AlbumMaker from './AlbumMaker';
// Task 5 import ContentAreaContext from './ContentAreaContext';
// Task 5 import LayeredDiv from './LayeredDiv';

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

        <div>
          <UserManager logInCallback={ this.handleLogInChange }
          showMessageArea={userInfo =>(<MessageArea userInfo={userInfo} />)} />
          { /* Task 4: Add render prop */ }
          <AlbumMaker />
          { /* Task 5: <LayeredDiv /> */ }
        </div>

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
