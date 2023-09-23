import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import {useActionData, useLoaderData} from "react-router-dom";
import background from "../../assets/company.png";
import { Form } from "react-router-dom";
export async function loader({ params }) {
    const data = await axios.get(`/employee/job-detail/${params.id}`);
    return data.data;
}
export async function action({request}) {
    try {
        let formData = await request.formData();
        formData = Object.fromEntries(formData);
        const rs = await axios.post("/employee/apply", formData);
        return formData;
    } catch (err) {
        return {success: false};
    }
}
const DetailJob = () => {
    const info_job = useLoaderData();
    return (
        <Container>
            <Container
                sx={{
                    background: "#fff",
                    height: "200px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
                disableGutters
            >
                <Grid container>
                    <Grid item xs={2}>
                        <Box
                            width="100%"
                            height="150px"
                            sx={{
                                // background: "#ccc",
                                backgroundImage: `url(${background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item xs={8}>
                        {/* {
                                "date_expire": "2023-09-16",
                                "job_description": "Tuyen dung lap trinh vien python,....",
                                "job_title": "Lap trinh vien Python",
                                "company_name": "abc",
                                "job_type_name": "full time",
                                "job_location_string": "Nguyen Van Linh, Ho Chi Minh, Viet Nam"
                        } */}
                        <Box>
                            <Typography variant="h5" fontWeight={700}>
                                {info_job.job_title}
                            </Typography>
                            <Typography fontWeight={600}>
                                {info_job.company_name}
                            </Typography>
                            <Typography fontWeight={600}>
                                {info_job.job_type_name}
                            </Typography>
                            <Typography fontWeight={600}>
                                {info_job.date_expire}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Form method="post">
                            <Button variant="contained" name="id_job" value={info_job.id} type="submit">Nộp đơn</Button>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ backgroundColor: "#fff", borderRadius: "5px" }}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    marginBottom={4}
                    paddingTop={2}
                >
                    Chi tiết
                </Typography>
                <Typography whiteSpace="pre-wrap">
                    {info_job.job_description}
                </Typography>
            </Container>
        </Container>
    );
};

export default DetailJob;
