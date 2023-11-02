import Typography from "@mui/material/Typography";
import { Button, Grid, Container } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { blue } from "@mui/material/colors";
const Profile = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<Container sx={{ marginTop: "50px" }}>
			<Grid container spacing={5}>
				<Grid item xs={4}>
					<Typography
						variant="p"
						display="block"
						fontWeight="bold"
						fontSize="20px"
						marginBottom={2}
					>
						Thông tin tài khoản
					</Typography>
					<Container disableGutters>
						<div>
							Số điện thoại:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.contact_number}
							</Typography>
						</div>
						<div>
							Email:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.email}
							</Typography>
						</div>
						<div>
							Giới tính:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.gender == "M" ? "Nam" : "Nữ"}
							</Typography>
						</div>
					</Container>
				</Grid>
				<Grid
					item
					xs={8}
					bgcolor={blue[50]}
					borderRadius={1}
					// height="calc(100vh - 100px)"
					paddingBottom={2}
				>
					<Typography
						variant="p"
						display="block"
						fontWeight="bold"
						fontSize="20px"
						marginBottom={2}
						textAlign="center"
					>
						Hồ sơ doanh nghiệp
					</Typography>
					<Container disableGutters>
						<div>
							Tên công ty:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.company_name}
							</Typography>
						</div>
						<div>
							Ngày thành lập:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.establishment_date}
							</Typography>
						</div>
						<div></div>
						<div>
							Giới thiệu:{" "}
							<Typography fontWeight="bold" variant="p">
								{data?.profile_description}
							</Typography>
						</div>
						<div>
							Website:{" "}
							<Typography fontWeight="bold" variant="p">
								<a href="#">{data?.company_website_url}</a>
							</Typography>
						</div>
					</Container>
					<Container
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "end",
							height: "100px",
						}}
					>
						<Link to="/employer/create-profile">
							<Button
								variant="contained"
								sx={{ marginTop: "20px" }}
							>
								Chỉnh sửa hồ sơ
							</Button>
						</Link>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Profile;
