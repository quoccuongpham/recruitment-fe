import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

import handleLogin from "../../features/Auth/login";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Box>
                <Typography textAlign="center" paddingBottom="20px">
                    Login page
                </Typography>
                <Box
                    component="form"
                    sx={{ backgroundColor: "#fff" }}
                    width={{ lg: "300px" }}
                >
                    <TextField
                        placeholder="Email"
                        fullWidth={true}
                        sx={{ marginBottom: "15px" }}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></TextField>
                    <TextField
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        sx={{ marginBottom: "15px" }}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    ></TextField>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => {
                            handleLogin({ email, password });
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
