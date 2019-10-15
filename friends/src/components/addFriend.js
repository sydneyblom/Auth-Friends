import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      <h1>Add A Friend:</h1>
      <form error onSubmit={e => formHandler(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="add-name"
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
          className="add-age"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="add-email"
        />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;