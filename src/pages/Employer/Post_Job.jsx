import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import {
	TextField,
	Typography,
	Select,
	MenuItem,
	Grid,
	Container,
	Box,
} from "@mui/material";

import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
export async function action({ request }) {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		let file = new FormData();
		// file.append("file_description", formData.file_description);
		// console.log(data);
		// console.log(file);
		// return null;
		file.append("file_description", data.file_description);
		delete data.file_description;
		const result = await axios.post("/employer/job", data);
		const id_job = result?.data.id;
		if (file.get("file_description").name) {
			await axios.post(`/employer/job/file_description/${id_job}`, file, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		}
		if (!result.data.success) {
			swal({
				title: "Thất bại",
				text: "Upload file không thành công",
				icon: "error",
			});
		} else {
			swal({
				title: "Thành công",
				text: "Tin tuyển dụng đã được đăng",
				icon: "success",
			});
		}
		return result;
	} catch (err) {
		swal({
			title: "Thất bại",
			text: "Đã có lỗi xảy ra",
			icon: "error",
		});
		console.log(err);
		return null;
	}
}
const PostJob = () => {
	const [file, setFile] = useState(null);
	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};
	console.log(file);
	return (
		<Container sx={{ paddingBottom: "30px" }}>
			<h1>Đăng tuyển dụng</h1>

			<Form method="post" encType="multipart/form-data">
				<Typography variant="p" fontWeight="bold">
					Mô tả công việc
				</Typography>
				<TextField
					label="Tiêu đề"
					type="text"
					name="job_title"
					placeholder="Tiêu đề"
					fullWidth={true}
					margin="normal"
				/>
				<TextField
					label="Nội dung"
					type="text"
					name="job_description"
					multiline={true}
					rows={3}
					fullWidth={true}
					margin="dense"
				/>
				<Typography sx={{ marginTop: "10px" }}>
					Loại công việc
				</Typography>
				<Select name="job_type_id" fullWidth defaultValue="1">
					<MenuItem value="1">Fulltime</MenuItem>
					<MenuItem value="2">Parttime</MenuItem>
					<MenuItem value="3">Intern</MenuItem>
				</Select>
				<Typography sx={{ marginTop: "10px" }}>
					Ngày nhận hồ sơ
				</Typography>
				<TextField
					type="date"
					name="date_receiving_application"
					sx={{
						paddingBottom: "8px",
						width: "100%",
					}}
				/>
				<Typography sx={{ marginTop: "10px" }}>Ngày hết hạn</Typography>
				<TextField
					type="date"
					name="date_expire"
					sx={{
						paddingBottom: "8px",
						width: "100%",
					}}
				/>
				<TextField
					label="Mức lương"
					type="text"
					name="salary"
					placeholder="Mức lương"
					fullWidth={true}
					margin="normal"
				/>
				<Typography sx={{ marginTop: "10px" }}>Danh mục</Typography>
				<Select name="category_id" fullWidth defaultValue="1">
					<MenuItem value="1">Công nghệ - Kỹ thuật</MenuItem>
					<MenuItem value="2">Công nghệ thông tin</MenuItem>
					<MenuItem value="3">Kinh tế</MenuItem>
					<MenuItem value="4">Môi trường - Nông nghiệp</MenuItem>
					<MenuItem value="5">Sư phạm - Xã hội</MenuItem>
					<MenuItem value="6">Thủy sản</MenuItem>
				</Select>
				<Typography variant="p" fontWeight="bold" paddingTop={2}>
					Vị trí
				</Typography>
				<Grid container rowSpacing={0} columnSpacing={2}>
					<Grid item xs={6}>
						<TextField
							label="Quốc gia"
							type="text"
							name="country"
							placeholder="Quốc gia"
							fullWidth={true}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Bang (nếu có)"
							type="text"
							name="state"
							placeholder="Bang (nếu có)"
							fullWidth={true}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Thành phố"
							type="text"
							name="city"
							placeholder="Thành phố"
							fullWidth={true}
							margin="normal"
						/>
					</Grid>

					<Grid item xs={6}>
						<TextField
							label="Tên đường"
							type="text"
							name="street_address"
							placeholder="Tên đường"
							fullWidth={true}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Zip"
							type="text"
							name="zip"
							placeholder="Zip"
							fullWidth={true}
							margin="normal"
						/>
					</Grid>
				</Grid>
				<Typography variant="p" fontWeight="bold" paddingTop={2}>
					Đính kèm tệp
				</Typography>
				<input
					type="file"
					name="file_description"
					onChange={handleFileChange}
				/>
				<Box marginTop={2}>
					<Button
						type="submit"
						variant="contained"
						sx={{ display: "block" }}
					>
						Lưu
					</Button>
				</Box>
			</Form>
		</Container>
	);
};

export default PostJob;
