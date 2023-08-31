import { Container } from "@mui/material";

import DefaultLayout from "../layouts/DefaultLayout";

function Home() {
    return (
        <DefaultLayout>
            <Container
                sx={{ backgroundColor: "#fff", minHeight: "100px" }}
            ></Container>
        </DefaultLayout>
    );
}

export default Home;
