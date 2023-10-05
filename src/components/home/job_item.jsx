import { Box, Typography } from "@mui/material";
import LinkStyled from "../../utils/styled_component/LinkStyled";
import company_avatar from "../../assets/company_avatar.avif";
const JobItem = ({ data }) => {
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
            <LinkStyled to={`/employee/detail-job/${data.id}`}>
                <Box>
                    <Typography fontWeight="bold">{data.job_title}</Typography>
                    <Typography>{data.company_name}</Typography>
                    {/* <Typography>lương</Typography>
                    <Typography>Địa điểm</Typography> */}
                </Box>
            </LinkStyled>
        </Box>
    );
};

export default JobItem;
