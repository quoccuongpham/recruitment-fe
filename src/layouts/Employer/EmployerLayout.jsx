import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import {useLoaderData} from "react-router-dom";

const layoutStyle = {background: "#333"}
const EmployerLayout = () => {
    const userInfo = useLoaderData();
    return (
        <Container maxWidth={true} disableGutters={true}>
            <Container sx={layoutStyle} maxWidth={true} disableGutters={true}>
                <Header isLogin={userInfo.success}/>
            </Container>
            <Container>
                <Outlet/>
            </Container>
        </Container>
    );
};

export default EmployerLayout;