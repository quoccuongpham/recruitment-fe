import { Grid } from "@mui/material";
import JobItem from "./JobItem";
const ShowJob = ({ list_job }) => {
    console.log(list_job);
    return (
        <Grid container spacing={1}>
            {list_job.map((element, index) => (
                <Grid item xs={6} key={index}>
                    <JobItem info={element} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ShowJob;
