import { Flex, Form, Input, Typography, Space, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
const Login = () => {
	const navigate = useNavigate();
	async function handle_login(values) {
		try {
			const result = await axios.post("/auth/login", values, {
				withCredentials: true,
			});
			// console.log(result);
			if (result.data.success) {
				navigate("/");
			}
			return null;
		} catch (error) {
			console.log(error);
			await Swal.fire(
				"Thất bại",
				error?.response?.data?.message,
				"error"
			);
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
					height: "60%",
					backgroundColor: "rgba(255, 255, 255, 0.4)",
					width: "30%",
					borderRadius: 10,
					padding: 10,
				}}
				size="large"
				onFinish={handle_login}
			>
				<Flex
					vertical
					justify="space-around"
					align="center"
					style={{ height: "100%" }}
				>
					<Typography.Title level={4} style={{ textAlign: "center" }}>
						Đăng nhập
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
							<Input />
						</Form.Item>
						<Form.Item
							label="Mật khẩu"
							name="password"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập mật khẩu!",
								},
							]}
						>
							<Input.Password />
						</Form.Item>
					</Space>
					<Button
						style={{
							width: "80%",
							marginBottom: "20px",
							fontWeight: 500,
						}}
						htmlType="submit"
					>
						Đăng nhập
					</Button>
					<Typography.Text>
						Không có tài khoản?{" "}
						<Link to="/register" style={{ fontWeight: 700 }}>
							Đăng ký
						</Link>
					</Typography.Text>
				</Flex>
			</Form>
		</Flex>
	);
};

export default Login;
