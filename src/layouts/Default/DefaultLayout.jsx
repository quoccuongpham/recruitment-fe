import { Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import background from "../assets/background.svg";
const DefaultLayout = ({ children }) => {
    const userInfo = useLoaderData();
    return (
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
            <Header isLogin={userInfo.success} />
            {children}
        </Container>
    );
};

export default DefaultLayout;
