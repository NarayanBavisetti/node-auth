import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
    border: "3px solid secondary",
  },
  theme: {
    "& > *": {
      background: "#000000",
      color: "white",
      fontSize: 15,
    },
  },
});

export default function AllUsers() {
  const classes = useStyles();

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    userData();
    allUsersData();
  }, []);
  const userData = async () => {
    try {
      const res = await fetch("/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const allUsersData = async () => {
    try {
      const res = await fetch("/allusers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const deleteUser = async (id) => {
    const res = await fetch("/delete/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      await allUsersData();
      console.log("sucessfully deleted");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.theme}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City/State</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user &&
            user.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/edit/${item._id}`}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteUser(item._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
