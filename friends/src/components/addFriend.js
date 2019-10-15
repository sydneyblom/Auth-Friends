import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Divider, Button, Form, Input } from 'semantic-ui-react'


const AddFriend = ({ setFriends }) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [ error , setError] = useState(false);

  const formHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", form)
      .then(res => {
        setFriends(res.data);
      })
      .catch(() => {
        errorHandler();
      });
  };

  const errorHandler = () => {
    setForm({
      ...form,
      name: "",
      age: "",
      email: ""
    });
    setError(true);
    setTimeout(() => {
      setForm({
        ...form,
        name: "",
        age: "",
        email: ""
      });
      setError(false);
    }, 3000);
  };

  return (
    <div className="add-friend">
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
      <h1>Add A Friend:</h1>
      <Form error onSubmit={e => formHandler(e)}>
      <Form.Group>
        <Input style= {{margin:'5px'}}
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="add-name"
        />

        <Input style= {{margin:'5px'}}
          type="number"
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
          className="add-age"
        />

        <Input style= {{margin:'5px'}}
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="add-email"
        />


        <Button type="submit" style= {{margin:'5px'}}>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddFriend;