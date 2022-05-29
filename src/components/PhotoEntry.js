import React from 'react';
import './master.css';
import ContentAreaContext from './ContentAreaContext';



class PhotoEntry extends React.Component {

  constructor(props) {
    super(props);
  this.state={
    
    commentFieldValue:"",
   

  };
  this.handleCommentChange = this.handleCommentChange.bind(this);
}
handleCommentChange(event) {
  this.setState({commentFieldValue:event.target.value});
  }


  static contextType=ContentAreaContext;
  

  render() {

    /* console.log("this.props.caption = " + this.props.caption);
    console.log("this.props.location = " + this.props.location);
    console.log("this.props.src = " + this.props.src);
    console.log("-------------------------------"); */
    
    const image_path = "../images/" + this.props.src;
    
    return (
    
 <div className="photo-entry-block" >
              <a href={image_path}>
                 <img className="photo-img" src={image_path} alt={image_path} />
              </a>
              <div className="photo-caption">{this.props.caption}</div>
              <div className="photo-info">{this.props.location}</div>
      
              { this.context.userName !== "" &&
             
   <div className="comment">  
      Вы комментируете как: {this.context.userName}    &nbsp;
       <input 
                        type="text"
                        name="commentText"
                        placeholder="Комментарий"
                        value={this.state.commentFieldValue}
                        onChange={this.handleCommentChange}
                    /> 
               <div className="">  <p> {this.state.commentFieldValue}</p> </div>
          </div>    
               
    }

             
           </div>
    );
  
}

}

export default PhotoEntry;
