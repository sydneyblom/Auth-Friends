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


React.useEffect(() => {
    if (props.editingFriend) {
     setForm({name: props.editingFriend.name, age: props.editingFriend.age, email: props.editingFriend.email});
    } else {
   setForm({
    name: "",
    age: "",
    email: ""
  });
    }
}, [props.editingFriend]);

const handleChanges= e => {
  setForm({...form, [e.target.name]: e.target.value})
};


  const newFriend = e => {
    e.preventDefault();

    if (props.editingFriend) {
    axiosWithAuth().put(`/api/friends/${props.editingFriend.id}`, form).then(res => {
      props.setFriends(res.data);
      setForm({
        name: "",
        age: "",
        email: ""
      })
      props.setEditingFriend(null)
    })

  } else {
    axiosWithAuth()
    .post("/api/friends", form)
    .then(res => {
        //console log to make sure full array is being returned
        props.setFriends(res.data);
        setForm({
          name: "",
          age: "",
          email: ""
        })
      })
      .catch(err => console.log (err.response))
    }
  };

const closeEdit = e => {
  e.preventDefault();
  props.setEditingFriend(null)
}

  return (
    <div className="add-friend">
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
      <h1>Add A Friend:</h1>
      <Form onSubmit= {newFriend}>
      <Form.Group>
        <Input style= {{margin:'5px'}}
        required
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange= {handleChanges}
          className="add-name"
        />

        <Input style= {{margin:'5px'}}
        required
          type="number"
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={handleChanges}
          className="add-age"
        />

        <Input style= {{margin:'5px'}}
        required
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChanges}
          className="add-email"
        />

        <Button type="submit" style= {{margin:'5px'}}>{props.editingFriend ? "Edit" : "Add Friend"}</Button>
        <Button onClick={closeEdit}>Cancel</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

