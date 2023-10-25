import Typography from "@mui/material/Typography";
import { Button, Container, Grid } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

import ProfileExperience from "../../components/Employee/profile-experience";
import ProfileAvatar from "../../components/Employee/profile-avatar";
import ProfileEducation from "../../components/Employee/profile-education";

export async function loader() {
	const result = await axios.get("/employee/profile");
	return result.data;
}

const Profile = () => {
	const info_profile = useLoaderData();
	console.log(info_profile);
	return !info_profile ? (
		<h1>loading...</h1>
	) : (
		<Container
			sx={{
				backgroundColor: "#fff",
				padding: "10px 20px 40px",
				borderRadius: "10px",
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
			}}
		>
			<ProfileAvatar url={info_profile[0]?.user_image} />
			<Typography
				variant="p"
				display="block"
				fontWeight="bold"
				fontSize="20px"
				marginBottom={2}
				marginTop={2}
			>
				Thông tin chung
			</Typography>
			<Grid container spacing={1}>
				<Grid item xs={6}>
					Họ và tên:{" "}
					<Typography fontWeight="bold" variant="p">
						{info_profile[1]?.last_name +
							" " +
							info_profile[1]?.first_name}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Số điện thoại:{" "}
					<Typography fontWeight="bold" variant="p">
						{info_profile[0]?.contact_number}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Ngày sinh:{" "}
					<Typography fontWeight="bold" variant="p">
						{info_profile[0]?.date_of_birth}
					</Typography>
				</Grid>

				<Grid item xs={6}>
					Giới tính:{" "}
					<Typography fontWeight="bold" variant="p">
						{info_profile[0]?.gender === "M" ? "Nam" : "Nữ"}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Email:{" "}
					<Typography fontWeight="bold" variant="p">
						{info_profile[0]?.email}
					</Typography>
				</Grid>

				<Grid item xs={6}>
					Quốc gia:{" "}
					<Typography fontWeight="bold" variant="p">
						Việt Nam
					</Typography>
				</Grid>
			</Grid>

			{/* HOC VAN */}
			<Typography
				variant="p"
				display="block"
				fontWeight="bold"
				fontSize="20px"
				marginTop={3}
				marginBottom={2}
			>
				Học vấn
			</Typography>
			{info_profile[2] != null
				? info_profile[2].map((value, index) => {
						return <ProfileEducation data={value} key={index} />;
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  })
				: null}
			{/* KINH NGHIEM */}
			<Typography
				variant="p"
				display="block"
				fontWeight="bold"
				fontSize="20px"
				marginTop={3}
				marginBottom={2}
			>
				Kinh nghiệm
			</Typography>
			{info_profile[3] != null
				? info_profile[3].map((value, index) => {
						return (
							<ProfileExperience info_exp={value} key={index} />
						);
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  })
				: null}

			<Link to="/employee/create-profile">
				<Button variant="contained" sx={{ marginTop: "20px" }}>
					Chỉnh sửa hồ sơ
				</Button>
			</Link>
		</Container>
	);
};

export default Profile;
