import React, { Component } from 'react';
import ActorCard from './ActorCard';

class ActorList extends Component {

    controlList(values){
        if (values !== undefined){
          const list = values.map((actor) => 
            <div key={actor.id} className="actorCardContainer">
              <ActorCard values={actor}/>
            </div>);
          return <div className="actorContainer">{list}</div>
        }
      }
    
    render() {
        const list = this.controlList(this.props.values);
    return (
    <div>
        {list}
    </div>
      
    );
  }
}

export default ActorList;