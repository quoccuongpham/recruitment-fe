import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { TextField, Button } from "@mui/material";

import { redirect, Form } from "react-router-dom";

import LinkStyled from "../../utils/styled_component/LinkStyled";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const result = await axios.post("/auth/login", data, {
			withCredentials: true,
		});
		if (result.data.success) {
			return redirect("/");
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
const Login = () => {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box>
				<Typography
					textAlign="center"
					paddingBottom="20px"
					fontSize="30px"
					fontWeight={700}
				>
					Đăng nhập
				</Typography>
				<Form method="post">
					<TextField
						name="email"
						placeholder="Email"
						fullWidth={true}
						sx={{ marginBottom: "15px" }}
					></TextField>
					<TextField
						name="password"
						placeholder="Password"
						type="password"
						fullWidth={true}
						sx={{ marginBottom: "15px" }}
					></TextField>
					<Button fullWidth variant="contained" type="submit">
						Đăng nhập
					</Button>
				</Form>
				<Typography paddingTop={3}>
					Không có tài khoản?{" "}
					<Typography variant="span" fontWeight={700} color="#0049B7">
						<LinkStyled to="/auth/register">Đăng ký</LinkStyled>
					</Typography>
				</Typography>
			</Box>
		</Container>
	);
};

export default Login;
