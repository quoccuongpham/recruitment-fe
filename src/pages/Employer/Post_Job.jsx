import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form, useActionData } from "react-router-dom";
import {
    TextField,
    Typography,
    Select,
    MenuItem,
    Grid,
    Alert,
    AlertTitle,
    Slide,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
export async function action({ request }) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);
        const result = await axios.post("/employer/create-job", data);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
}
const PostJob = () => {
    const [date, setDate] = useState(dayjs());
    const submitResult = useActionData();
    return (
        <Box sx={{ paddingBottom: "30px" }}>
            <h1>Đăng tuyển dụng</h1>
            <Slide
                direction="left"
                in={submitResult?.data?.success}
                mountOnEnter
                unmountOnExit
            >
                <Alert
                    severity="success"
                    onClose={() => {}}
                    sx={{
                        width: { xl: "30%" },
                        position: "absolute",
                        top: "70px",
                        right: "10px",
                    }}
                >
                    <AlertTitle>Thành Công</AlertTitle>
                    Tin đã được đăng — <strong>Xem trong VIỆC ĐÃ ĐĂNG</strong>
                </Alert>
            </Slide>
            <Form method="post">
                <Typography variant="p" fontWeight="bold">
                    Mô tả công việc
                </Typography>
                <TextField
                    label="Tiêu đề"
                    type="text"
                    name="job_title"
                    placeholder="Tiêu đề"
                    fullWidth={true}
                    margin="normal"
                />
                <TextField
                    label="Nội dung"
                    type="text"
                    name="job_description"
                    multiline={true}
                    rows={3}
                    fullWidth={true}
                    margin="dense"
                />
                <Typography>Loại công việc</Typography>
                <Select name="job_type_id" fullWidth defaultValue="1">
                    <MenuItem value="1">Fulltime</MenuItem>
                    <MenuItem value="2">Parttime</MenuItem>
                    <MenuItem value="3">Intern</MenuItem>
                </Select>
                <DatePicker
                    label="Ngày hết hạn"
                    sx={{
                        paddingBottom: "8px",
                        width: "100%",
                        marginTop: "10px",
                    }}
                    value={date}
                    onChange={(newValue) => setDate(newValue.$d)}
                />
                <input name="date_expire" defaultValue={date} hidden={true} />
                <Typography variant="p" fontWeight="bold">
                    Vị trí
                </Typography>
                <Grid container rowSpacing={0} columnSpacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Quốc gia"
                            type="text"
                            name="country"
                            placeholder="Quốc gia"
                            fullWidth={true}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Bang (nếu có)"
                            type="text"
                            name="state"
                            placeholder="Bang (nếu có)"
                            fullWidth={true}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Thành phố"
                            type="text"
                            name="city"
                            placeholder="Thành phố"
                            fullWidth={true}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Tên đường"
                            type="text"
                            name="street_address"
                            placeholder="Tên đường"
                            fullWidth={true}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Zip"
                            type="text"
                            name="zip"
                            placeholder="Zip"
                            fullWidth={true}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ display: "block" }}
                >
                    Đăng
                </Button>
            </Form>
        </Box>
    );
};

export default PostJob;
