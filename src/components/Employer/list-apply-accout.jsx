import { Container, Grid, Button, Typography } from "@mui/material";
import default_avatar from "../../assets/avatar-default.jpg";
import "../../styles/employer/list-apply-account.css";
const AccountApply = ({ info }) => {
    return (
        <Container
            sx={{
                border: "1px solid #eee",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                "&:hover": {
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                },
            }}
            disableGutters
        >
            <Grid container alignItems="center">
                <Grid item xs={1}>
                    <img
                        src={info.user_image ?? default_avatar}
                        className="avatar"
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography fontWeight="600">{info.email}</Typography>
                    <Typography>{info.contact_number}</Typography>
                </Grid>
                <Grid item xs={2} textAlign="right">
                    <Button color="success" variant="contained">
                        Xem
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AccountApply;
