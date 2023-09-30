import Typography from "@mui/material/Typography";
import { Button, Container, Grid } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

import ProfileExperience from "../../components/Employee/profile-experience";

export async function loader() {
    const result = await axios.get("/employee/profile");
    return result.data;
}

const Profile = () => {
    const info_profile = useLoaderData();
    console.log(info_profile);
    return !info_profile ? (
        <h1>loading...</h1>
    ) : (
        <Container
            sx={{
                backgroundColor: "#fff",
                padding: "10px 20px 40px",
                borderRadius: "10px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
        >
            <Typography
                variant="p"
                display="block"
                fontWeight="bold"
                fontSize="20px"
                marginBottom={2}
            >
                Thông tin chung
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    Họ và tên:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[1].last_name +
                            " " +
                            info_profile[1].first_name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Số điện thoại:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[0].contact_number}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    Ngày sinh:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[0].date_of_birth}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    Giới tính:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[0].gender === "M" ? "Nam" : "Nữ"}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Email:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[0].email}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    Quốc gia:{" "}
                    <Typography fontWeight="bold" variant="p">
                        Việt Nam
                    </Typography>
                </Grid>
            </Grid>

            {/* HOC VAN */}
            <Typography
                variant="p"
                display="block"
                fontWeight="bold"
                fontSize="20px"
                marginTop={3}
                marginBottom={2}
            >
                Học vấn
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    Trường:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].institute_university_name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Ngành:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].major}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Loại bằng:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].cetificate_degree_name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    GPA:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].cgpa}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Ngày vào học{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].starting_date}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Ngày ra trường:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_profile[2].completion_date}
                    </Typography>
                </Grid>
                {info_profile[2].percentage ? (
                    <Grid item xs={6}>
                        Phần trăm:{" "}
                        <Typography fontWeight="bold" variant="p">
                            {info_profile[2].percentage}
                        </Typography>
                    </Grid>
                ) : null}
            </Grid>
            {/* KINH NGHIEM */}
            <Typography
                variant="p"
                display="block"
                fontWeight="bold"
                fontSize="20px"
                marginTop={3}
                marginBottom={2}
            >
                Kinh nghiệm
            </Typography>
            <ProfileExperience info_exp={info_profile[3]} />
            <Link to="/employee/create-profile">
                <Button variant="contained" sx={{ marginTop: "20px" }}>
                    Chỉnh sửa hồ sơ
                </Button>
            </Link>
        </Container>
    );
};

export default Profile;
