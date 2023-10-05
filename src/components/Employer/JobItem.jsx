import { Box, Typography } from "@mui/material";
import LinkStyled from "../../utils/styled_component/LinkStyled";
const JobItem = ({ info }) => {
    return (
        <LinkStyled to={`/employer/apply/${info.id}`}>
            <Box
                sx={{
                    border: "1px solid #eee",
                    "&:hover": {
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    },
                    background: "#fff",
                }}
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                padding={2}
                borderRadius={2}
            >
                <Typography variant="h6" marginBottom={2}>
                    {info.job_title}
                </Typography>
                <Typography
                    variant="p"
                    whiteSpace="pre-wrap"
                    flexGrow={1}
                    marginBottom={2}
                >
                    {info.job_description}
                </Typography>
                <Typography>
                    <Typography variant="span">Hết hạn: </Typography>
                    <Typography variant="spam" fontWeight={600}>
                        {info.date_expire}
                    </Typography>
                </Typography>
            </Box>
        </LinkStyled>
    );
};

export default JobItem;
