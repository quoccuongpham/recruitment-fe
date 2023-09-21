import { Grid } from "@mui/material";
import JobItem from "./JobItem";
const ShowJob = ({ list_job, column }) => {
    console.log(list_job);
    return (
        <Grid container spacing={2}>
            {list_job.map((element, index) => (
                <Grid item xs={column ?? 4} key={index}>
                    <JobItem info={element} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ShowJob;
