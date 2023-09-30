import { Divider, Grid, Typography } from "@mui/material";
const ProfileExperience = ({ info_exp }) => {
    // {
    //     "user_account_id": 10,
    //     "is_current_job": "Y",
    //     "start_date": "2023-08-12",
    //     "end_date": "2023-09-12",
    //     "job_title": "Webdeveloper",
    //     "company_name": "Axon",
    //     "job_location_city": "Cần Thơ",
    //     "job_location_state": null,
    //     "job_location_country": "Việt Nam",
    //     "description": "Thiết kế giao diện"
    // }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    Công ty:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_exp.company_name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontWeight="bold" variant="p">
                        {info_exp.start_date} - {info_exp.end_date ?? "Now"}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    Vị trí:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_exp.job_title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    Mô tả:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_exp.description}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    Địa điểm:{" "}
                    <Typography fontWeight="bold" variant="p">
                        {info_exp.job_location_country}
                        {info_exp.job_location_state
                            ? ", " + info_exp.job_location_state
                            : ", "}
                        {info_exp.job_location_city}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} />
        </>
    );
};

export default ProfileExperience;
