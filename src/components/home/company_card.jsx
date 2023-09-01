import { Box, Typography } from "@mui/material";

const CompanyCard = ({ name }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                minHeight: "264px",
                minWidth: "200px",
                borderRadius: "6px",
                textAlign: "center",
            }}
        >
            <Box
                width="100%"
                minHeight="80%"
                sx={{ backgroundColor: "#ccc" }}
                borderRadius="6px 6px 0 0"
            ></Box>
            <Typography
                variant="p"
                fontWeight="bold"
                noWrap={false}
                padding={1}
                marginTop={1}
                textTransform="uppercase"
                display="block"
            >
                {name}
            </Typography>
        </Box>
    );
};

export default CompanyCard;
