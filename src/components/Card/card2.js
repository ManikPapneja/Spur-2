import React from 'react';
import "./card2.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Card2 (props) 
{
  return (
           <div className="card-body">
               <div className="card2-top">
                   <img src ={props.source} />
                   
               </div>

               <div className="card-bottom">
                  <h3> {props.name} </h3>
                  <h5> {props.position} </h5>
                  <p> {props.story} </p>
                  
                 </div>
                 <div className ="see-more-icon">
                    <FavoriteIcon className ="heart-icon" />
                    <ExpandMoreIcon className="expand-icon"/>
                    <ShareIcon className ="share-icon" />
                    </div>
                
             </div>
  );
}
export default Card2;
