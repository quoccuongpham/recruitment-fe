import { Divider, Grid, Typography } from "@mui/material";
const ProfileEducation = ({ data }) => {
	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					Trường:{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.institute_university_name}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Ngành:{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.major}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Loại bằng:{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.cetificate_degree_name}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					GPA:{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.cgpa}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Ngày vào học{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.starting_date}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					Ngày ra trường:{" "}
					<Typography fontWeight="bold" variant="p">
						{data?.completion_date}
					</Typography>
				</Grid>
				{data?.percentage ? (
					<Grid item xs={6}>
						Phần trăm:{" "}
						<Typography fontWeight="bold" variant="p">
							{data?.percentage}
						</Typography>
					</Grid>
				) : null}
			</Grid>
			<Divider sx={{ margin: 1 }} />
		</>
	);
};

export default ProfileEducation;
