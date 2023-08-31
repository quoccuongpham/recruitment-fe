import { Container } from "@mui/material";
import Header from "./Header";
import background from "../assets/background.svg";
const DefaultLayout = ({ children }) => {
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "1000px",
            }}
        >
            <Header />
            {children}
        </Container>
    );
};

export default DefaultLayout;
