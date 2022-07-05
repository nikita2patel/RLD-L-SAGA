import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, Paper,Grid,Avatar,Typography,Box,TextField,Alert} from '@mui/material'
import { Link,navigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const { register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) =>{ 
    const  npo = localStorage.getItem("111");
   var obj = JSON.parse(npo);
     console.log(555, obj)
   
   
     obj.filter((e) => {
      if (e.password === data.password && e.email === data.email) 
      {
     var msg = "login"
     localStorage.setItem("msg",JSON.stringify(msg));
   }
   else if (e.password !== data.password && e.email !== data.email ) {
     toast.error('please register!!')
    console.log("983894")
   }
   else {
    
      console.log('nikita')
  
         }   
         } );
  }

  
  return (
    <>
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
       
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" noValidate  sx={{ mt: 1 }}  onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
           autoFocus
           {...register('email', { required: true })}
        />
         {errors.email && <p> email is required.</p>}<br></br>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoFocus
          {...register('password', { required: true })}
        />
          {errors.password && <p> password is required.</p>}<br></br>
         
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
      Login
        </Button>
         <Grid container>
          {/* <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>  */}
          <Grid item>
             <Link to="/" variant="body2">
              {"Don't have an account? Register"}
            </Link> 
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Grid>
  </>

  )
}


export default Login








// obj.filter((e) => {
//   if (e.password === data.password && (e.email === data.email))
// {
//  var msg = "login"
//   localStorage.setItem("msg",JSON.stringify(msg));

//    }
//    else {  (e.password !== data.password && (e.email !== data.email))
//    toast.error('please register!!')
//  console.log("983894")
//    }
  
// })
// }


 
// obj.filter((e) => {
//   if (e.password === data.password && e.email === data.email) 
//   {
//  var msg = "login"
//  localStorage.setItem("msg",JSON.stringify(msg));
// }
// else  {
//  toast.error('please register!!')
// console.log("983894")
// }
//      }   
// );
// }




