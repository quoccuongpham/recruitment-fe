import { Box, Typography } from "@mui/material";
import company_avatar from "../../assets/company_avatar.avif";
const JobItem = () => {
    return (
        <Box display="flex" padding={1}>
            <Box
                width="100px"
                height="100px"
                border="solid 1px #ccc"
                borderRadius={2}
                marginRight={2}
                sx={{
                    backgroundImage: `url(${company_avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></Box>
            <Box>
                <Typography fontWeight="bold">Admin Assistant</Typography>
                <Typography>Tên công ty</Typography>
                <Typography>lương</Typography>
                <Typography>Địa điểm</Typography>
            </Box>
        </Box>
    );
};

export default JobItem;
