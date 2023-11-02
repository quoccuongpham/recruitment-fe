import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ShowJob from "../../components/Employer/ShowJob";

export async function loader() {
	try {
		const data = await axios.get("/employer/job");
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
}
const JobPosted = () => {
	const data = useLoaderData().data;
	console.log(data);
	return data ? (
		<div>
			<ShowJob list_job={data.dataValues} />
		</div>
	) : (
		<div>test</div>
	);
};

export default JobPosted;
