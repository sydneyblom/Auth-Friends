import React from "react";
//normally would import useState from react but on line 8 can just set it on useState. (usestate => react.useState )
import { Button, Form, Input } from 'semantic-ui-react';
import { axiosWithAuth } from "../utils/axiosWithAuth";


export default function AddFriend (props) {
  const [form, setForm] = React.useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges= e => {
    setForm({...form, [e.target.name]: e.target.value})
  };


  const newFriend = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/friends", form)
    .then(res => {
        //console log to make sure full array is being returned
        props.setFriends(res.data)
      })
      .catch(err => console.log (err.response))
  };



  return (
    <div className="add-friend">
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
      <h1>Add A Friend:</h1>
      <Form onSubmit= {newFriend}>
      <Form.Group>
        <Input style= {{margin:'5px'}}
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange= {handleChanges}
          className="add-name"
        />

        <Input style= {{margin:'5px'}}
          type="number"
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={handleChanges}
          className="add-age"
        />

        <Input style= {{margin:'5px'}}
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChanges}
          className="add-email"
        />


        <Button type="submit" style= {{margin:'5px'}}>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

