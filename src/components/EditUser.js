import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//   import { getUsers, updateUser } from "./Service/api";

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "5% 0px 0px 25px",
    "& > *": {
      marginTop: 20,
    },
  },
});
const initialValues = {
  name: "",
  email: "",
  phone: "",
};

export default function EditUsers() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(initialValues);
  const { name, email, phone } = user;
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    //   const response = await getUsers(id);
    //   setUser(response.data);
  };

  const onSubmit = async (e) => {
    //   await updateUser(id,user);
    navigate("/list");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const classes = useStyles();
  return (
    <FormGroup className={classes.table}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>E-mail</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone no.</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="phone" value={phone} />
      </FormControl>
      <Button onClick={() => onSubmit()} variant="contained" color="primary">
        Update User
      </Button>
    </FormGroup>
  );
}
