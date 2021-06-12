import React, { useEffect } from 'react'
import {useContext, useState} from 'react'
import {Button, Container, TextField, Icon} from '@material-ui/core'
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const GoogleIcon = (props) => {
    return (
    <Icon {...props}>
        <img className="google-icon" src="/google-icon.svg"/>
    </Icon>
    )
}

const RegisterMentee = () => {
    const router = useRouter();
    const [input, setInput] = useState({
        username: "", 
        password: "",
        errorText: null
    });

    useEffect(()=>{

    },[input])

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffb300'
            }
        },
    });
    
    const handleSubmit = (event) =>{
        // butuh backend
    }
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value; 

        if (name==="password-confirm"){
            if (input.password !== value){
                setInput({...input, errorText: "Password tidak cocok"})
            }
            else{
                setInput({...input, errorText: null})
            }
        }
        else{
            setInput({...input, [name]: value});
        }
    }
    function changeValue(e, type) {
    }
    return (
        <Container className="flex justify-center shadow-2xl" style={{background: "white", position: "fixed", top: "50%", left: "50%", flexDirection: "column", alignItems: "center", marginRight: "-50%", transform: "translate(-50%, -50%)"}} maxWidth="sm">
            <div className="flex flex-row justify-center">
            <form className="flex-col flex justify-center" noValidate autoComplete="off" style={{marginBottom: "10px"}}>
            <h1 className="font-serif text-2xl" style={{display: "flex", justifyContent: "center"}}>Register</h1>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <TextField
                        id="filled-required"
                        label="Username"
                        placeholder="Username"
                        value={input.username}
                        required
                        name="username"
                        onChange={handleChange}
                        className="justify-center flex"
                        style={{width: "30ch"}}
                    />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <TextField
                        id="filled-required"
                        label="Fullname"
                        placeholder="Nama Lengkap"
                        value={input.fullname}
                        required
                        name="fullname"
                        onChange={handleChange}
                        className="justify-center flex"
                        style={{width: "30ch"}}
                    />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
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
                        style={{width: "30ch"}}
                    />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <TextField
                        id="filled-required"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        required
                        name="password-confirm"
                        onChange={handleChange}
                        style={{width: "30ch"}}
                        helperText={input.errorText}
                    />
                </div>
                <div style={{margin: "20px 0", display: "flexbox", justifyContent: "center"}}>
                    <ThemeProvider theme={theme}>
                    <Button style={{margin: "10px"}} variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
                    <Button style={{margin: "10px"}} variant="contained" color="primary" onClick={() => router.back()}>Back to Home</Button> 
                    </ThemeProvider>               
                </div>
                <div style={{width: "100%", height: "15px", borderBottom: "2px solid black", textAlign: "center"}}>
                    <span style={{fontSize: "15px", padding: "0 7px", backgroundColor: "white", fontWeight: "bold"}}>
                        ATAU
                    </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", padding: "20px", width: "100%"}}>
                    <Button 
                        style={{border: "1px solid black", width: "100%"}}
                        startIcon={<GoogleIcon/>}
                    >Masuk dengan Google</Button>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <label>Sudah punya akun? </label>
                    <a href="/login" style={{paddingLeft: "5px", color: "#f4d27b", fontWeight: "bold"}}> Login</a>
                </div>
            </form>
            </div>
        </Container>
    );
}

export default RegisterMentee