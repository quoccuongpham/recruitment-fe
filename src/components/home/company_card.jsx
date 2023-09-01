import { Box } from "@mui/material";

const CompanyCard = ({ name }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                minHeight: "264px",
                minWidth: "200px",
                borderRadius: "6px",
            }}
        >
            {name}
        </Box>
    );
};

export default CompanyCard;
