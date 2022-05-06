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
  import { Link } from "react-router-dom";
//   import { deleteUserData, getUsers } from "./Service/api";
  
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
    const [user, setUser] = useState([]);
    useEffect(() => {
      allUsers();
    }, []);
    const allUsers = async () => {
    //   const response = await getUsers();
    //   setUser(response.data);
    };
    async function deleteUser(id) {
    //   await deleteUserData(id);
      allUsers();
    }
  
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
              user.map((item) => {
                return (
                  <TableRow>
                    <TableCell>{item.id}</TableCell>
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
                        to={`/edit/${item.id}`}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteUser(item.id)}
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
  

  