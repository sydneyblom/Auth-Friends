import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./addFriend";

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

            <h1>Friends</h1>
      
              {friends.map(friend => {
                return (
                  <div id={friend.id} className="friend">
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <p>{friend.email}</p>
                  </div>
                );
              })}
      
            <AddFriend setFriends={setFriends} />
          </div>
        );
      };
      
      export default Friends;