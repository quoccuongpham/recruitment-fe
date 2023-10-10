import { Button, Container, Grid } from "@mui/material";
import LinkStyled from "../../utils/styled_component/LinkStyled";
import style from "../../styles/employee/my-job-jobitem.module.css";
const Job = ({ data }) => {
	console.log(data);
	return (
		<Container className={style.container}>
			<Grid container>
				<Grid item xs={11}>
					<h2 id="title">{data.job_post.job_title}</h2>
					<p id="date-expire">
						Thời gian:{" "}
						<span className={style.time}>{data.apply_date}</span>
					</p>
					<p
						id={[style.state]}
						className={
							data.is_accept ? style.accept : style.pending
						}
					>
						{data.is_accept
							? "Hồ sơ được chấp nhận"
							: "Đang xem xét"}
					</p>
				</Grid>
				<Grid item id={style.detail}>
					<LinkStyled to={`/employee/detail-job/${data.job_post.id}`}>
						<Button
							variant="contained"
							color="info"
							className={style.btn}
							fullWidth
						>
							Xem
						</Button>
					</LinkStyled>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Job;
