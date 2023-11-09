import { Flex, Form, Input, Typography, Space, Button, Select } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const Register = () => {
	const navigate = useNavigate();
	async function handle_register(values) {
		try {
			const result = await axios.post("/auth/register", values);
			if (result.data.success) {
				await Swal.fire(
					"Thành công",
					"Tạo tài khoản thành công",
					"success"
				);
				navigate("/login");
			}
			return null;
		} catch (error) {
			if (error.response.data.message) {
				await Swal.fire(
					"Thất bại",
					error.response.data.message,
					"error"
				);
				return null;
			}
			await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
			return null;
		}
	}
	return (
		<Flex
			style={{
				backgroundColor: "#4158D0",
				backgroundImage:
					"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
				height: "100vh",
			}}
			justify="center"
			align="center"
		>
			<Form
				layout="vertical"
				style={{
					height: "80%",
					backgroundColor: "rgba(255, 255, 255, 0.4)",
					width: "30%",
					borderRadius: 10,
					padding: 10,
				}}
				size="large"
				onFinish={handle_register}
			>
				<Flex
					vertical
					justify="space-around"
					align="center"
					style={{ height: "100%" }}
				>
					<Typography.Title level={4} style={{ textAlign: "center" }}>
						Đăng Ký
					</Typography.Title>
					<Space
						direction="vertical"
						style={{ width: "80%" }}
						size={0}
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập email!",
								},
								{
									pattern:
										/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Email không hợp lệ",
								},
							]}
							style={{ padding: 0, margin: 0 }}
						>
							<Input placeholder="Email" />
						</Form.Item>
						<Form.Item
							label="Mật khẩu"
							name="password"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập mật khẩu!",
								},
								{
									pattern: /^.{8,}$/,
									message: "Mật khẩu phải ít nhất 8 kí tự",
								},
							]}
							style={{ padding: 0, margin: 0 }}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="Số điện thoại"
							name="contact_number"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập số điện thoại!",
								},
							]}
							style={{ padding: 0, margin: 0 }}
						>
							<Input placeholder="Số điện thoại" />
						</Form.Item>
						<Form.Item
							label="Loại tài khoản"
							name="user_type_id"
							initialValue={"1"}
							style={{ padding: 0, margin: 0 }}
						>
							<Select
								options={[
									{ value: "1", label: "Người tìm việc" },
									{ value: "2", label: "Nhà tuyển dụng" },
								]}
							></Select>
						</Form.Item>
					</Space>
					<Button
						style={{
							width: "80%",
							marginTop: "30px",
							marginBottom: "20px",
							fontWeight: 500,
						}}
						htmlType="submit"
					>
						Đăng Ký
					</Button>
					<Typography.Text>
						Đã có tài khoản?{" "}
						<Link to="/login" style={{ fontWeight: 700 }}>
							Đăng nhập
						</Link>
					</Typography.Text>
				</Flex>
			</Form>
		</Flex>
	);
};

export default Register;
