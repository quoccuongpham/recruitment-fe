import { Container } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header.jsx";
import background from "../../assets/background.svg";
const EmployeeLayout = () => {
    const userInfo = useLoaderData();
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: { xl: "contain", md: "cover" },
                minHeight: "1000px",
            }}
        >
            <Header isLogin={userInfo} />
            <Outlet />
        </Container>
    );
};

export default EmployeeLayout;
