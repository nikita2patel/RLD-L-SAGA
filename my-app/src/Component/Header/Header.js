import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../../Dashbord/Home/Home";
import About from "../../Dashbord/About/About";
import Contact from "../../Dashbord/Contact/Contact";
import {AppBar,Toolbar,CssBaseline,Typography,makeStyles,Button,DeleteIcon, IconButton,TextField,} from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//import Logout from "../../Dashbord/Logout/Logout";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Navigate = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();



  const  npo = localStorage.getItem("111");
  var obj = JSON.parse(npo);
    console.log('water', obj)


  return (
    <div>
      <BrowserRouter>
        <AppBar position="static" style={{background:"gray"}}>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
                {/* <img src="https://cdn130.picsart.com/254470394013202.png" style={{width:"10%",height: "3%", backgroundColor: "white"}} />   */}
                Logo
            </Typography>
            <Button variant="outlined" onClick={handleClickOpen}>
                Logout
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>LogOut</Button>
                </DialogActions>
              </Dialog>

            <div className={classes.navlinks}>
              <Link to="/Home" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigate;
