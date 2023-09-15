import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { useLoaderData } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const layoutStyle = { background: "#333" };
const EmployerLayout = () => {
    const userInfo = useLoaderData();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth="xl" disableGutters={true}>
                <Container maxWidth="xl" sx={layoutStyle} disableGutters={true}>
                    <Header isLogin={userInfo} />
                </Container>
                <Container>
                    <Outlet />
                </Container>
            </Container>
        </LocalizationProvider>
    );
};

export default EmployerLayout;
