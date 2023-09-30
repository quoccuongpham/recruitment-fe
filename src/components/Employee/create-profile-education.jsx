import {
    Grid,
    Box,
    Typography,
    TextField,
    Stack,
    Divider,
} from "@mui/material";

const Education = () => {
    return (
        <>
            <Grid container rowGap={2} marginBottom={2} marginTop={2}>
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
                        <Typography fontWeight={600}>Tên bằng cấp</Typography>
                        <TextField
                            placeholder="Tên bằng cấp"
                            fullWidth
                            name="cetificate_degree_name"
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
                        <Typography fontWeight={600}>Ngành</Typography>
                        <TextField placeholder="Ngành" fullWidth name="major" />
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
                        <Typography fontWeight={600}>Tên trường</Typography>
                        <TextField
                            placeholder="Tên trường"
                            fullWidth
                            name="institute_university_name"
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
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Typography fontWeight={600}>
                                    Ngày bắt đầu
                                </Typography>
                                <TextField
                                    type="date"
                                    placeholder="Ngày bắt đầu"
                                    fullWidth
                                    name="starting_date"
                                />
                            </Box>
                            <Box>
                                <Typography fontWeight={600}>
                                    Ngày ra trường
                                </Typography>
                                <TextField
                                    type="date"
                                    placeholder="Ngày ra trường"
                                    fullWidth
                                    name="completion_date"
                                />
                            </Box>
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
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Typography fontWeight={600}>Điểm</Typography>
                                <TextField
                                    placeholder="GPA"
                                    fullWidth
                                    name="cgpa"
                                />
                            </Box>
                            <Box>
                                <Typography fontWeight={600}>
                                    Phần trăm
                                </Typography>
                                <TextField
                                    placeholder="Phần trăm (tùy chọn)"
                                    fullWidth
                                    name="percentage"
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};

export default Education;
