import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { TextField, Button } from "@mui/material";

import { redirect, Form } from "react-router-dom";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const result = await axios.post("/auth/login", data, {
            withCredentials: true,
        });
        if (result.data.success) {
            return redirect("/");
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const Login = () => {
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
                <Form method="post">
                    <TextField
                        name="email"
                        placeholder="Email"
                        fullWidth={true}
                        sx={{ marginBottom: "15px" }}
                    ></TextField>
                    <TextField
                        name="password"
                        placeholder="Password"
                        type="password"
                        fullWidth={true}
                        sx={{ marginBottom: "15px" }}
                    ></TextField>
                    <Button fullWidth variant="contained" type="submit">
                        Login
                    </Button>
                </Form>
            </Box>
        </Container>
    );
};

export default Login;
