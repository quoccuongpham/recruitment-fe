import { Container, Grid, Button, Typography } from "@mui/material";
import default_avatar from "../../assets/avatar-default.jpg";
import "../../styles/employer/list-apply-account.css";
import { useState } from "react";

import LinkStyled from "../../utils/styled_component/LinkStyled";
const AccountApply = ({ info, handleAccept }) => {
	const [is_success, set_is_success] = useState(false);
	// const handleAccept = useCallback(async () => {
	// 	try {
	// 		const formData = {
	// 			user_account_id: info.id,
	// 			is_accept: true,
	// 			email: info.email,
	// 		};
	// 		await axios.post(`/employer/job-apply/${info.id_job}`, formData);
	// 		set_is_success(true);
	// 	} catch (error) {
	// 		console.log(error);
	// 		return null;
	// 	}
	// }, [info]);
	return (
		<>
			<Container
				sx={{
					border: "1px solid #eee",
					padding: "10px",
					marginBottom: "10px",
					borderRadius: "5px",
					"&:hover": {
						boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
					},
				}}
				disableGutters
			>
				<Grid container alignItems="center">
					<Grid item xs={1}>
						<img
							src={info.user_image ?? default_avatar}
							className="avatar"
						/>
					</Grid>
					<Grid item xs={9}>
						<Typography fontWeight="600">{info.email}</Typography>
						<Typography>{info.contact_number}</Typography>
					</Grid>
					<Grid item xs={2} textAlign="right">
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<LinkStyled
									to={`/employer/profile-employee/${info?.id}`}
								>
									<Button
										color="info"
										variant="contained"
										fullWidth
									>
										Xem
									</Button>
								</LinkStyled>
							</Grid>
							<Grid item xs={12}>
								<Button
									color="success"
									variant="contained"
									fullWidth
									onClick={async () => {
										const rs = await handleAccept(
											info.id_job,
											{
												user_account_id: info.id,
												is_accept: true,
												email: info.email,
											}
										);

										set_is_success(rs);
									}}
									disabled={info.is_accept || is_success}
								>
									{info.is_accept || is_success
										? "Đã chấp nhận"
										: "Chấp nhận"}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AccountApply;
