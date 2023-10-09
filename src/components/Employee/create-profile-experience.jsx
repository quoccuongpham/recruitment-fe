import {
    Grid,
    Box,
    Typography,
    TextField,
    Checkbox,
    Stack,
} from "@mui/material";

const Experience = ({ data, index }) => {
    return (
        <Grid
            container
            rowGap={2}
            marginBottom={2}
            borderBottom="1px solid #ccc"
            paddingBottom={2}
        >
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
                    <Typography fontWeight={600}>Công ty</Typography>
                    <TextField
                        placeholder="Công ty"
                        fullWidth
                        name={`company_name_${index}`}
                        defaultValue={data?.company_name}
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
                    <Typography fontWeight={600}>Vai trò</Typography>
                    <TextField
                        placeholder="Vai trò"
                        fullWidth
                        name={`job_title_${index}`}
                        defaultValue={data?.job_title}
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
                <Box width="80%" display="flex" alignItems="center">
                    <Typography fontWeight={600} variant="p">
                        Công việc hiện tại
                    </Typography>
                    <Checkbox
                        name={`is_current_job_${index}`}
                        defaultChecked={data?.is_current_job === "Y"}
                    />
                </Box>
            </Grid>
            <Grid item xs={6}></Grid>
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
                    <Typography fontWeight={600}>Mô tả công việc</Typography>
                    <TextField
                        multiline
                        rows={3}
                        placeholder="Mô tả công việc..."
                        fullWidth
                        name={`description_${index}`}
                        defaultValue={data?.description}
                    />
                </Box>
            </Grid>
            <Grid item xs={6}></Grid>
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
                    <Typography fontWeight={600}>Quốc gia</Typography>
                    <TextField
                        placeholder="Quốc gia"
                        fullWidth
                        name={`job_location_country_${index}`}
                        defaultValue={data?.job_location_country}
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
                    <Typography fontWeight={600}>Bang (tùy chọn)</Typography>
                    <TextField
                        placeholder="Bang (tùy chọn)"
                        fullWidth
                        name={`job_location_state_${index}`}
                        defaultValue={data?.job_location_state}
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
                    <Typography fontWeight={600}>Thành phố</Typography>
                    <TextField
                        placeholder="Thành phố"
                        fullWidth
                        name={`job_location_city_${index}`}
                        defaultValue={data?.job_location_city}
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
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Box>
                            <Typography fontWeight={600}>
                                Ngày bắt đầu
                            </Typography>
                            <TextField
                                type="date"
                                placeholder="Ngày bắt đầu"
                                fullWidth
                                name={`start_date_${index}`}
                                defaultValue={data?.start_date}
                            />
                        </Box>
                        <Box>
                            <Typography fontWeight={600}>
                                Ngày kết thúc
                            </Typography>
                            <TextField
                                type="date"
                                placeholder="Ngày kết thúc"
                                fullWidth
                                name={`end_date_${index}`}
                                defaultValue={data?.end_date}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Experience;
