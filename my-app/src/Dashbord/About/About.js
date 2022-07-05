import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux"; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {DeleteUser,EditUser,UpdateUser} from "../../Redux/Action/Action";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";


const About = () => {
  const [value,setvalue] = useState("")
  const {register, handleSubmit,setValue, reset,formState: { errors },} = useForm();
  const selectedData = useSelector((state) => state.reducer.user);
  const Editdata = useSelector((state) => state.reducer.edit_user);
  const id= useSelector((state) => state.reducer.id);
  console.log("7878878877", Editdata);
  console.log("sss", selectedData);
  const dispatch = useDispatch();
  const  npo = localStorage.getItem("111");
    var obj = JSON.parse(npo);
    console.log(777, obj)

  useEffect(
    (id) => {
      const value = Editdata;

      if (value) {
        setValue("name", value?.name);
        setValue("email", value?.email);
        setValue("last", value?.last);
        setValue("password", value?.password);
        setValue("id", id);
      }
    },
    [Editdata]
  );

  const handeldelete = (id) => {
    let user = window.confirm("Are you sure ");
    if (user === true) {
      dispatch(DeleteUser(id));
     
    } else {
      return false;
    }

   
  
   
  };
  const onSubmit = (data) => {
    console.log("GG",data)
    dispatch(UpdateUser(data));
    reset()
  
  };
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(EditUser(id));
    console.log("nikita", id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 

  

  return (
    <div>
      <input placeholder="serch here" name="name"  onChange={(e)=>setvalue(e.target.value)} className={"input"}/>
       <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">password</TableCell>
              {/* <TableCell align="right">action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedData?.filter((post) => {
    if (value === "") {
      return post;
    } else if (
      post.name.toLowerCase().includes(value.toLowerCase())
    ) {
      return post;
    }
  }).map((row, id) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {" "}
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.last}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  {/* <div className="btn"  > */}
                  <TableCell align="right"> <Button variant="contained" onClick={() => handeldelete(id)}  style={{background:"gray"}} >Delete</Button></TableCell>
                  <TableCell align="right"><Button variant="contained" onClick={() => handleClickOpen(id)} style={{background:"gray"}}>Edit</Button></TableCell>
                   </TableRow>
              );
            })}
          </TableBody>
        </Table>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                fullWidth
                variant="standard"
                {...register("name", { required: true })}
              />
              <TextField
                autoFocus
                margin="dense"
                id="last"
                label="LastName"
                type="lastName"
                fullWidth
                variant="standard"
                {...register("last", { required: true })}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Password"
                label="password"
                type="password"
                fullWidth
                variant="standard"
                {...register("password", { required: true })}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                {...register("email", { required: true })}
              />
              <Button type="submit">Save</Button>
              <Button onClick={handleClose}>cancel</Button>
              </form>
                </DialogContent>
            
          </Dialog>
        
      </Paper>
      <Footer />
    </div>
  );
};

export default About;
