import { Container, Typography, Stack, Grid, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import DefaultLayout from "../layouts/Default/DefaultLayout.jsx";
import CompanyCard from "../components/home/company_card";
import JobItem from "../components/home/job_item";
import { useLoaderData } from "react-router-dom";

//? Example data
const company = [
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MAERSK VIETNAM LTD" },
    { name: "TEXT EXPERTS" },
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MERCEDES-BENZ VIETNAM" },
    { name: "MERCEDES-BENZ VIETNAM" },
];
const ex_job = [];
for (let i = 1; i <= 9; i++) {
    ex_job.push(
        <Grid item xs={4} key={i}>
            <JobItem />
        </Grid>
    );
}
function Home() {
    const data_home_loader = useLoaderData();
    console.log(data_home_loader);
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
                maxWidth="xl"
                display={{ xs: "none", md: "block" }}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    color="#fff"
                    paddingBottom={3}
                >
                    Các công ty hàng đầu
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    {company.map((value, index) => {
                        return <CompanyCard name={value.name} key={index} />;
                    })}
                </Stack>
            </Container>
            <Container
                sx={{
                    backgroundColor: "#fff",
                    minHeight: "1000px",
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingTop: 4,
                }}
                disableGutters
                maxWidth="xl"
            >
                <Grid
                    container
                    border="solid 1px"
                    borderColor={blue[200]}
                    borderRadius="6px 6px 0 0"
                >
                    <Grid item xs={12}>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color="#333"
                            paddingBottom={2}
                            paddingLeft={2}
                            paddingTop={2}
                            display="flex"
                            sx={{
                                backgroundColor: blue[100],
                                borderRadius: "6px 6px 0 0",
                            }}
                            justifyContent="space-between"
                        >
                            Việc làm tốt nhất
                            <Button
                                sx={{
                                    display: "inline-block",
                                    marginRight: "10px",
                                }}
                            >
                                XEM TẤT CẢ
                            </Button>
                        </Typography>
                    </Grid>
                    {data_home_loader.jobs.map((item, index) => (
                        <Grid item xs={4} key={index}>
                            <JobItem data={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </DefaultLayout>
    );
}

export default Home;
