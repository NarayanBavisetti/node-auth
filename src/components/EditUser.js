import { Button, FormGroup, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "5px 0px 0px 25px",
    "& > *": {
      marginTop: 5,
    },
  },
});

export default function EditUsers() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    city: "",
  });
  useEffect(() => {
    userData();
  }, []);
  const userData = async () => {
    try {
      const res = await fetch(`/user/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      await setUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, age, gender, address, city } = user;

    const res2 = await fetch(`/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        gender,
        address,
        city,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      navigate("/allusers");
      setUser(data2);
    }
  };

  const changeData = (e) => {
    const { name, value } = e.target;
    setUser((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const classes = useStyles();
  return (
    <>
      <FormGroup className={classes.table}>
        <Typography variant="h4">Edit User</Typography>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeData}
            value={user.name}
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            email
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleInputPassword"
            value={user.email}
            disabled
          />
        </div>{" "}
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeData}
            value={user.age}
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Gender
          </label>
          <input
            type="text"
            name="gender"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeData}
            value={user.gender}
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeData}
            value={user.address}
          />
        </div>
        <div class="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" class="form-label">
            City/State
          </label>
          <input
            type="text"
            name="city"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changeData}
            value={user.city}
          />
        </div>
        <Button onClick={updateuser} variant="contained" color="primary">
          Update User
        </Button>
      </FormGroup>
    </>
  );
}
