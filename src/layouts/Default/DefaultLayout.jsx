import { Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Header from "./Header.jsx";
import background from "../../assets/background.svg";
import { Navigate } from "react-router-dom";
const DefaultLayout = ({ children }) => {
    const userInfo = useLoaderData();
    console.log(userInfo);
    return userInfo.user_type_id == 1 ? (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                minHeight: "1000px",
            }}
        >
            <Header isLogin={userInfo} />
            {children}
        </Container>
    ) : (
        <Navigate to="/employer" replace={true} />
    );
};

export default DefaultLayout;
