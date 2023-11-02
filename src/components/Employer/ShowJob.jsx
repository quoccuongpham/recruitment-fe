import { Grid } from "@mui/material";
import JobItem from "./JobItem";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ShowJob = ({ list_job, column }) => {
	const navigate = useNavigate();
	async function delete_job(id) {
		try {
			const willDelete = await swal({
				title: "Xóa tin",
				text: "Bạn chắc chắn muốn xóa tin này chứ?",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			});
			if (willDelete) {
				await axios.delete("/employer/job", {
					data: {
						id_job: id,
					},
				});
				await swal("Đã xóa thành công", {
					icon: "success",
				});
				navigate(".");
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Grid container spacing={2}>
			{list_job?.map((element, index) => (
				<Grid item xs={column ?? 4} key={index}>
					<JobItem info={element} handle_delete={delete_job} />
				</Grid>
			))}
		</Grid>
	);
};

export default ShowJob;
