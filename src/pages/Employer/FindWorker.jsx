import {
	Box,
	TextField,
	Typography,
	InputAdornment,
	Button,
	Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Form } from "react-router-dom";

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	return null;
}
const FindWorker = () => {
	return (
		<Container>
			<Typography variant="h6" paddingBottom={2} textAlign="center">
				Tìm kiếm ứng viên
			</Typography>

			<Form method="get">
				<TextField
					type="text"
					placeholder="Kỹ năng"
					fullWidth={true}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<Button
									variant="contained"
									type="submit"
									sx={{
										background: "#333",
										"&:hover": {
											background: "#333",
											// color: "#000",
											opacity: 0.8,
										},
									}}
								>
									Tìm
								</Button>
							</InputAdornment>
						),
					}}
				></TextField>
			</Form>
		</Container>
	);
};

export default FindWorker;
