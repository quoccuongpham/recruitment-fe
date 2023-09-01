import { useRouteError } from "react-router-dom";
import { Container, Typography } from "@mui/material";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <Container
            sx={{
                textAlign: "center",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>
                <Typography variant="h1">Oops!</Typography>
                <Typography variant="p" display="block">
                    Sorry, an unexpected error has occurred.
                </Typography>
                <Typography variant="p" fontStyle="italic">
                    {error.statusText || error.message}
                </Typography>
            </Container>
        </Container>
    );
};

export default ErrorPage;
