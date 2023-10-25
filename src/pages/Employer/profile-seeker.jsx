import {
	Container,
	Box,
	Divider,
	Typography,
	Grid,
	Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLoaderData } from "react-router-dom";
import defaultAvatar from "../../assets/avatar-default.jpg";
import LinkStyled from "../../utils/styled_component/LinkStyled";
const renderEducation = (data, key) => {
	return (
		<Grid container key={key}>
			<Grid item xs={6} textAlign="center" padding={1} fontWeight="bold">
				{data?.cetificate_degree_name + " " + data?.major}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				GPA: {data?.cgpa}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Ngày nhập học: {data?.starting_date}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Ngày tốt nghiệp: {data?.completion_date}
			</Grid>
		</Grid>
	);
};
const renderExperience = (data, key) => {
	return (
		<Grid container key={key}>
			<Grid item xs={6} textAlign="center" padding={1} fontWeight="bold">
				Công ty: {data?.company_name}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Vai trò: {data?.job_title}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Mô tả: {data?.description}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Ngày bắt đầu: {data?.start_date}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Ngày kết thúc: {data?.end_date}
			</Grid>
			<Grid item xs={6} textAlign="center" padding={1}>
				Địa chỉ:{" "}
				{data?.job_location_city + ", " + data?.job_location_country}
			</Grid>
			{data?.is_current_job ? (
				<Grid item xs={6} textAlign="center" padding={1}>
					<Typography variant="p">Công việc hiện tại: </Typography>
					<Typography variant="p" color="#6BB361">
						<CheckCircleIcon
							sx={{ position: "relative", bottom: -3 }}
						/>
					</Typography>
				</Grid>
			) : null}
		</Grid>
	);
};
const ProfileSeeker = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<Container
			sx={{
				boxShadow:
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
				paddingBottom: "30px",
				marginBottom: "30px",
				borderRadius: "10px",
			}}
		>
			<Container
				sx={{
					textAlign: "center",
					padding: "20px 0",
				}}
			>
				<Box
					height={150}
					width={150}
					sx={{
						backgroundImage: `url(${
							data?.user_account.user_image ?? defaultAvatar
						})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						"&:hover": {
							// opacity: 0.5,
							// backgroundColor: "#ccc",
							cursor: "pointer",
						},
					}}
					borderRadius="50%"
					border="1px solid #eee"
					component="button"
				></Box>
			</Container>
			<Divider>
				<Typography variant="h4" fontSize={25} fontWeight={700}>
					{data?.last_name + " " + data?.first_name}
				</Typography>
			</Divider>
			<Grid container>
				<Grid item xs={6} textAlign="center" padding={1}>
					Email: {data?.user_account?.email}
				</Grid>
				<Grid item xs={6} textAlign="center" padding={1}>
					Ngày sinh: {data?.user_account?.date_of_birth}
				</Grid>

				<Grid item xs={6} textAlign="center" padding={1}>
					Giới tính:{" "}
					{data?.user_account?.gender === "M" ? "Nam" : "Nữ"}
				</Grid>
				<Grid item xs={6} textAlign="center" padding={1}>
					Số điện thoại: {data?.user_account?.contact_number}
				</Grid>
			</Grid>
			<Divider>
				<Typography variant="h4" fontSize={25} fontWeight={700}>
					Học Vấn
				</Typography>
			</Divider>
			{data?.education_details.map((value, index) => {
				return renderEducation(value, index);
			})}
			<Divider>
				<Typography variant="h4" fontSize={25} fontWeight={700}>
					Kinh nghiệm
				</Typography>
			</Divider>
			{data?.experience_details.map((value, index) => {
				return renderExperience(value, index);
			})}
			<Container
				sx={{
					textAlign: "center",
					marginTop: "30px",
				}}
			>
				<LinkStyled to={-1}>
					<Button variant="contained">Trở về</Button>
				</LinkStyled>
			</Container>
		</Container>
	);
};

export default ProfileSeeker;
