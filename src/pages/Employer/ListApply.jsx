import { Container } from "@mui/material";
import AccountApply from "../../components/Employer/list-apply-accout";
import { useLoaderData } from "react-router-dom";
const ListApply = () => {
    const list_info = useLoaderData();
    return (
        <Container
            sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "10px 0",
                borderRadius: "10px",
            }}
        >
            {list_info.map((value, index) => {
                return <AccountApply info={value} key={index} />;
            })}
        </Container>
    );
};

export default ListApply;
