import { Box, Container } from "@mui/material";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

import ShowJob from "../../components/ShowJob";

export async function loader() {
    const data = await axios.get("/employee/jobs");
    return data.data;
}
const Job = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <Container>
            <ShowJob list_job={data} column={3} />
        </Container>
    );
};

export default Job;
