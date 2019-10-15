import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./addFriend";
import { Card, Divider } from 'semantic-ui-react'
    const Friends = () => {
        const [friends, setFriends] = useState([]);
      
        useEffect(() => {
          axiosWithAuth()
            .get("/api/friends")
            .then(res => {
              setFriends(res.data);
            })
            .catch(err => console.log(err));
        }, []);
      
        return (
            
          <div>
                 <AddFriend setFriends={setFriends} />
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
            <h1>Friends</h1>
            <div class="ui hidden divider"></div>
      <div className = "card-container">
              {friends.map(friend => {
                return (
                  <div id={friend.id} className="friend">
                      <Card style= {{margin:'5px'}}>
                       <Card.Content>
                       <Card.Header>{friend.name}</Card.Header>
                       <Card.Description>{friend.age}</Card.Description>
                       <Card.Description>{friend.email}</Card.Description>
                    </Card.Content>
                    </Card>
                  </div>
                );
              })}
      </div>
       
          </div>
        );
      };
      
      export default Friends;