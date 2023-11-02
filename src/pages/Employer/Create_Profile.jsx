import { Button, Container, TextField } from "@mui/material";

import { Form, Link, useActionData, useLoaderData } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

const Create_Profile = () => {
	const [data, setData] = useState(useLoaderData());
	const actionData = useActionData();
	console.log(actionData);
	return (
		<Container disableGutters>
			<Typography
				variant="body1"
				fontWeight="bold"
				fontSize="20px"
				maxWidth={true}
				textAlign="center"
				paddingBottom="20px"
			>
				Thiết lập hồ sơ
			</Typography>
			{/*    is_hidden name, job description, location, */}
			<Form method="post" encType="multipart/form-data">
				<Typography fontWeight={600}>Tên công ty</Typography>
				<TextField
					placeholder={data?.company_name}
					value={data?.company_name}
					onChange={(e) => {
						setData({
							...data,
							company_name: e.target.value,
						});
					}}
					name="company_name"
					fullWidth={true}
					sx={{ paddingBottom: "8px" }}
				/>
				<Typography fontWeight={600}>Mô tả</Typography>
				<TextField
					placeholder={data?.profile_description}
					value={data?.profile_description}
					onChange={(e) => {
						setData({
							...data,
							profile_description: e.target.value,
						});
					}}
					name="profile_description"
					multiline={true}
					fullWidth={true}
					rows={3}
					sx={{ paddingBottom: "8px" }}
				/>
				<Typography fontWeight={600}>Email liên hệ</Typography>
				<TextField
					placeholder={data?.company_email}
					value={data?.company_email}
					onChange={(e) => {
						setData({
							...data,
							company_email: e.target.value,
						});
					}}
					name="company_email"
					fullWidth={true}
					sx={{ paddingBottom: "8px" }}
				/>
				<Typography fontWeight={600}>Địa chỉ website</Typography>
				<TextField
					placeholder={data?.company_website_url}
					value={data?.company_website_url}
					onChange={(e) => {
						setData({
							...data,
							company_website_url: e.target.value,
						});
					}}
					name="company_website_url"
					fullWidth={true}
					sx={{ paddingBottom: "8px" }}
				/>
				<Typography fontWeight={600}>Ngày thành lập</Typography>
				<TextField
					type="date"
					name="establishment_date"
					value={data?.establishment_date}
					onChange={(e) => {
						setData({
							...data,
							establishment_date: e.target.value,
						});
					}}
					fullWidth={true}
					sx={{ paddingBottom: "8px" }}
				/>
				<Box>
					<Button
						type="submit"
						variant="contained"
						sx={{
							display: "inlineBlock",
							marginTop: "20px",
							marginRight: "10px",
						}}
					>
						Xác nhận
					</Button>
					<Link to={-1}>
						<Button
							type="button"
							variant="contained"
							color="error"
							sx={{ display: "inlineBlock", marginTop: "20px" }}
						>
							Hủy
						</Button>
					</Link>
				</Box>
			</Form>
		</Container>
		// </LocalizationProvider>
	);
};

export default Create_Profile;
