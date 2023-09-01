import { Container, Typography, Stack } from "@mui/material";

import DefaultLayout from "../layouts/DefaultLayout";
import CompanyCard from "../components/home/company_card";

//? Example data
const company = [
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MAERSK VIETNAM LTD" },
    { name: "TEXT EXPERTS" },
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MERCEDES-BENZ VIETNAM" },
];

function Home() {
    return (
        <DefaultLayout>
            <Container
                sx={{
                    backgroundColor: "",
                    minHeight: "100px",
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                }}
                disableGutters
                maxWidth
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color="#fff"
                    paddingBottom={3}
                >
                    Các công ty hàng đầu
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    {company.map((value, index) => {
                        return <CompanyCard name={value.name} key={index} />;
                    })}
                </Stack>
            </Container>
        </DefaultLayout>
    );
}

export default Home;
