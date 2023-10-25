import {
	Container,
	TextField,
	Typography,
	Stack,
	Divider,
} from "@mui/material";
import AccountApply from "../../components/Employer/list-apply-accout";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../layouts/main/components/header";
import axios from "axios";
import { useState } from "react";
const ListApply = () => {
	const list_info = useLoaderData();
	const id_job = useParams().id;

	const [interviewInfo, setInterviewInfo] = useState({
		time: "",
		date: "",
		content: "",
	});

	const handleAccept = async (id, data) => {
		const formData = data;
		const interviewMessage = `Lúc ${interviewInfo.time}, ngày ${interviewInfo.date}, tại ${interviewInfo.content}`;
		formData.interviewMessage = interviewMessage;
		if (Object.values(interviewInfo).includes("")) {
			return false;
		}
		const rs = await axios.post(`/employer/job-apply/${id}`, formData);
		return rs.data.success;
	};
	return (
		<>
			<Header title="Danh sách ứng tuyển" />
			<Divider />
			<Typography
				variant="h1"
				fontSize={25}
				fontWeight={700}
				marginTop={3}
				marginBottom={2}
			>
				Thông báo phỏng vấn
			</Typography>
			<Stack
				sx={{ marginBottom: "30px" }}
				flexDirection="column"
				marginBottom={2}
			>
				<div>
					<Typography fontWeight={500}>Ngày</Typography>
					<TextField
						error={interviewInfo.date === ""}
						helperText={
							interviewInfo.date === ""
								? "Không được bỏ trống"
								: null
						}
						size="small"
						fullWidth
						type="date"
						onChange={(e) => {
							setInterviewInfo({
								...interviewInfo,
								date: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<Typography fontWeight={500}>Giờ</Typography>
					<TextField
						error={interviewInfo.time === ""}
						helperText={
							interviewInfo.time === ""
								? "Không được bỏ trống"
								: null
						}
						size="small"
						fullWidth
						type="time"
						onChange={(e) => {
							setInterviewInfo({
								...interviewInfo,
								time: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<Typography fontWeight={500}>Địa chỉ</Typography>
					<TextField
						error={interviewInfo.content === ""}
						helperText={
							interviewInfo.content === ""
								? "Không được bỏ trống"
								: null
						}
						size="small"
						fullWidth
						type="text"
						onChange={(e) => {
							setInterviewInfo({
								...interviewInfo,
								content: e.target.value,
							});
						}}
					/>
				</div>
			</Stack>
			<Divider />
			<Typography
				variant="h1"
				fontSize={25}
				fontWeight={700}
				marginTop={3}
				marginBottom={2}
			>
				Danh sách ứng viên
			</Typography>
			<Container>
				{list_info.map((value, index) => {
					return (
						<AccountApply
							info={{ id_job, ...value }}
							key={index}
							handleAccept={handleAccept}
						/>
					);
				})}

				{list_info.length == 0 ? (
					<h1>Hiện chưa có người ứng tuyển</h1>
				) : null}
			</Container>
		</>
	);
};

export default ListApply;
