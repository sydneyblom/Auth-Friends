import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
    state = {
      friends: []
    };


    componentDidMount() {
        this.getData();
      }

      getData = () => {
        axiosWithAuth()
          .get('/friends')
          .then(res =>  {
            this.setState({
              friends: res.data 
            })
          })
          .catch(err => console.log(err));
      };

      render() {
        return (
            <div>
              <p> Friends</p>
              {this.state.friends.map(friend => {
                return (
                  <div id={friend.id} className="friend-list">
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                  </div>
                );
              })}
            </div>
    
        );
      }
    }
    
    export default Friends;