import Typography from "@mui/material/Typography";
import {Button, Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <Container sx={{backgroundColor: "#fff", padding: "10px 20px 40px", borderRadius: "10px"}}>
            <Typography variant="p" display="block" fontWeight="bold" fontSize="20px" marginBottom={2}>Thông tin tài
                khoản</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    Tên: <Typography fontWeight="bold" variant="p">Phạm Quốc Cường</Typography>
                </Grid>
                <Grid item xs={4}>
                    Số điện thoại: <Typography fontWeight="bold" variant="p">0123456789</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Ngày sinh: <Typography fontWeight="bold" variant="p">1/1/2002</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Giới tính: <Typography fontWeight="bold" variant="p">Nam</Typography>
                </Grid>
                <Grid item xs={4}>
                    Quốc gia: <Typography fontWeight="bold" variant="p">Việt Nam</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Địa chỉ: <Typography fontWeight="bold" variant="p">Ninh Kiêu, Cần thơ, Việt Nam</Typography>
                </Grid>
            </Grid>
            <Typography variant="p" display="block" fontWeight="bold" fontSize="20px" marginTop={3} marginBottom={2}>Thông
                tin chung</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    Họ và Tên: <Typography fontWeight="bold" variant="p">ABC</Typography>
                </Grid>
                <Grid item xs={4}>
                    Số điện thoại: <Typography fontWeight="bold" variant="p">0123456789</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Email liên hệ: <Typography fontWeight="bold" variant="p">abc@gmail.com</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Ngày thành lập <Typography fontWeight="bold" variant="p">1/1/2023</Typography>
                </Grid>
                <Grid item xs={4}>
                    Quốc gia: <Typography fontWeight="bold" variant="p">Việt Nam</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    Địa chỉ: <Typography fontWeight="bold" variant="p">Ninh Kiêu, Cần thơ, Việt Nam</Typography>
                </Grid>
            </Grid>
            <Link to="/employee/create-profile"><Button variant="contained" sx={{marginTop: "20px"}}>Chỉnh sửa hồ
                sơ</Button></Link>
        </Container>
    );
};

export default Profile;