import { useState } from "react";
import {
    Container,
    Typography,
    Grid,
    TextField,
    Box,
    Stack,
    Switch,
    Divider,
    IconButton,
    Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import "../../styles/create-profile-employee.css";
import Experience from "../../components/Employee/create-profile-experience";
import Education from "../../components/Employee/create-profile-education";
import LinkStyled from "../../utils/styled_component/LinkStyled";
import axios from "axios";

export async function action({ request }) {
    let formData = await request.formData();
    formData = Object.fromEntries(formData);
    const rs = await axios.post("/employee/profile", formData);
    return rs;
}

const CreateProfile = () => {
    const profile_info = useLoaderData();
    const data_update = useActionData();
    const [experiences, setExperience] = useState(
        profile_info[3].map((value, index) => {
            return <Experience key={index} data={value} index={index} />;
        })
    );
    const [education, setEducation] = useState(
        profile_info[2].map((value, index) => {
            return <Education key={index} data={value} index={index} />;
        })
    );
    console.log(profile_info);
    console.log(data_update);
    let handleAddExperience = (e) => {
        e.preventDefault();
        setExperience([
            ...experiences,
            <Experience key={experiences.length} index={experiences.length} />,
        ]);
    };
    let handleAddEducation = (e) => {
        e.preventDefault();
        setEducation([
            ...education,
            <Education key={education.length} index={education.length} />,
        ]);
    };
    return (
        <Container
            sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
        >
            <Typography
                textAlign="center"
                fontWeight={700}
                fontSize={25}
                paddingTop={2}
            >
                Chỉnh sửa hồ sơ
            </Typography>
            <Form method="post">
                <Typography fontWeight={600} fontSize={20} marginBottom={2}>
                    Thông tin chung
                </Typography>
                <Grid container rowGap={2} marginBottom={2}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box width="80%">
                            <Typography fontWeight={600}>Họ</Typography>
                            <TextField
                                placeholder="Họ"
                                fullWidth
                                name="first_name"
                                defaultValue={profile_info[1]?.last_name}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box width="80%">
                            <Typography fontWeight={600}>Tên</Typography>
                            <TextField
                                placeholder="Tên"
                                fullWidth
                                defaultValue={profile_info[1]?.first_name}
                                name="last_name"
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box width="80%">
                            <Typography fontWeight={600}>
                                Lương hiện tại
                            </Typography>
                            <TextField
                                placeholder="Lương hiện tại"
                                fullWidth
                                name="current_salary"
                                defaultValue={profile_info[1]?.current_salary}
                            />
                            <Stack
                                flexDirection="row"
                                alignItems="center"
                                paddingLeft={1}
                            >
                                <Typography fontWeight={500}>Năm</Typography>
                                <Switch
                                    defaultChecked={
                                        profile_info[1]?.is_annually_monthly ===
                                        "Y"
                                            ? true
                                            : false
                                    }
                                    name="is_annually_monthly"
                                />
                                <Typography fontWeight={500}>Tháng</Typography>
                            </Stack>
                            <Stack
                                flexDirection="row"
                                alignItems="center"
                                paddingLeft={1}
                            >
                                <Typography fontWeight={500}>$</Typography>
                                <Switch
                                    defaultChecked={
                                        profile_info[1]?.currency === "VND"
                                            ? true
                                            : false
                                    }
                                    name="currency"
                                />
                                <Typography fontWeight={500}>VNĐ</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box width="80%">
                            <Typography fontWeight={600}>Ngày sinh</Typography>
                            <TextField
                                fullWidth
                                name="date_of_birth"
                                type="date"
                                defaultValue={profile_info[0]?.date_of_birth}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        height="100px"
                    >
                        <Box width="80%" height="100%">
                            <Typography fontWeight={600}>Giới tính</Typography>
                            <select
                                defaultValue={
                                    profile_info[0]?.gender === "M" ? "M" : "F"
                                }
                                id="select-gender"
                                name="gender"
                            >
                                <option value="M">Nam</option>
                                <option value="F">Nữ</option>
                            </select>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Typography
                    fontWeight={600}
                    fontSize={20}
                    marginBottom={2}
                    marginTop={2}
                >
                    Học Vấn
                </Typography>
                {education}
                <Grid item xs={12}>
                    <IconButton color="primary" onClick={handleAddEducation}>
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
                <Typography
                    fontWeight={600}
                    fontSize={20}
                    marginBottom={2}
                    marginTop={2}
                >
                    Kinh nghiệm làm việc
                </Typography>
                {experiences}
                <Grid item xs={12}>
                    <IconButton color="primary" onClick={handleAddExperience}>
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
                <input
                    type="number"
                    hidden
                    value={experiences.length}
                    name="experience_lenght"
                />
                <input
                    type="number"
                    hidden
                    value={education.length}
                    name="education_lenght"
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ margin: "10px 0 30px 0" }}
                >
                    Lưu
                </Button>
                <LinkStyled to={-1}>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: "10px 0 30px 10px" }}
                    >
                        Hủy
                    </Button>
                </LinkStyled>
            </Form>
        </Container>
    );
};

export default CreateProfile;
