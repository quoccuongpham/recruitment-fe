import { Container } from "@mui/material";
import AccountApply from "../../components/Employer/list-apply-accout";
import { useLoaderData, useParams } from "react-router-dom";

const ListApply = () => {
	const list_info = useLoaderData();
	const id_job = useParams().id;
	console.log(list_info);
	return (
		<Container
			sx={{
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				padding: "10px 0",
				borderRadius: "10px",
			}}
		>
			{list_info.map((value, index) => {
				return <AccountApply info={{ id_job, ...value }} key={index} />;
			})}
		</Container>
	);
};

export default ListApply;
