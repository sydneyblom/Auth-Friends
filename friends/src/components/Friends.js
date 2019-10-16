import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./addFriend";
import { Card, Button } from "semantic-ui-react";


const Friends = () => {
  const [friends, setFriends] = React.useState([]);


  const fetchFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("get", res);
        //then sets returned data to state.
        setFriends(res.data);
      })
    }
//can normally put it in fetch friends - if you break it out you can call in different parts of code
//fetches friends when component loads 
//component mounts and then calls the setFriends  then runs the fucntion that calls the api and sets (res.data) 
React.useEffect(() => {
  fetchFriends()
}, []);


  return (
    <div>
      <AddFriend setFriends={setFriends} />
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <h1>Friends</h1>
      <div class="ui hidden divider"></div>
      <div className="card-container">
        {friends.map(friend => {
          return (
            <div id={friend.id} className="friend">
              <Card style={{ margin: "5px" }}>
                <Card.Content>
                  <Card.Header>{friend.name}</Card.Header>
                  <Card.Description>{friend.age}</Card.Description>
                  <Card.Description>{friend.email}</Card.Description>
                  <Button>EDIT</Button>
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
