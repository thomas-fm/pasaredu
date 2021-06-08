import {useContext, useState} from 'react'
import {Button, Container, FormLabel, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {UserContext} from '../context/UserContext'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  

const Login = () => {
    // const [userID, setID] = useContext(UserContext);
    const classes = useStyles();
    const [input, setInput] = useState({
        username: "", 
        password: ""
    });
    const handleSubmit = (event) =>{
        // butuh backend
    }
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value; 

        setInput({...input, [name]: value});
    }
    return (
        <Container className="login-form" style={{background: "white", border: "1px solid", margin: "20px"}} maxWidth="sm">
            <h2>Login</h2>
            <form className={classes.root} noValidate autoComplete="off" style={{marginBottom: "10px"}}>
                <div>
                    <TextField
                        id="filled-required"
                        label="Username"
                        placeholder="Username"
                        value={input.username}
                        required
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id="filled-required"
                        label="Password"
                        placeholder="Password"
                        value={input.password}
                        type="password"
                        autoComplete="current-password"
                        required
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div style={{margin: "20px 0"}}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
                </div>
            </form>
        </Container>
    );
}

export default Login