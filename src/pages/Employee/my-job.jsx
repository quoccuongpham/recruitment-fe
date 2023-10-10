import { useLoaderData } from "react-router-dom";
import style from "../../styles/employee/my-job.module.css";
import Job from "../../components/Employee/my-job-show-job";
import { Container } from "@mui/material";
const MyJob = () => {
	const data = useLoaderData();
	return (
		<Container className={style.container}>
			{data.map((value, index) => {
				return (
					<Job data={value} key={index}>
						Hello
					</Job>
				);
			})}
		</Container>
	);
};

export default MyJob;
