import styled from "./index.module.css";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { UserOutlined, PicRightOutlined } from "@ant-design/icons";
import { Header, Content } from "antd/es/layout/layout";
import { Typography, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const { Text } = Typography;

// Menu
function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}
const items = [
	getItem("Điều hướng", "sub1", <PicRightOutlined />, [
		getItem("Việc làm", "n1", null),
		getItem("Việc của tôi", "n2", null),
	]),
	getItem("Thông tin", "sub2", <UserOutlined />, [
		getItem("Tài khoản", "t1"),
		getItem("Đăng xuất", "t2"),
	]),
	{
		type: "divider",
	},
];
const EmployeeLayout = () => {
	const navigate = useNavigate();
	const handle_nav = async (e) => {
		console.log(e);
		switch (e.key) {
			case "n1":
				navigate("/main/job");
				break;
			case "n2":
				navigate("/main/myjob");
				break;
			case "t1":
				navigate("/main/profile");
				break;
			case "t2":
				if (
					(
						await Swal.fire({
							title: "Đăng xuất",
							text: "Bạn muốn đăng xuất tài khoản?",
							icon: "warning",
							showCancelButton: true,
							showConfirmButton: true,
							confirmButtonText: "Đăng xuất",
							cancelButtonText: "Hủy",
						})
					).isConfirmed
				) {
					await axios.get("/auth/logout");
					navigate("/login");
				}
				break;
			default:
				break;
		}
	};
	return (
		<Layout className={styled.container}>
			<Header
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.8)",
				}}
			>
				<Text style={{ fontSize: 20, fontWeight: 700 }} type="warning">
					Recr.
				</Text>
			</Header>
			<Layout style={{ backgroundColor: "transparent" }}>
				<Sider
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.7)",
						margin: 10,
						marginleft: 20,
						borderRadius: 10,
						padding: 10,
					}}
				>
					<Menu
						onClick={handle_nav}
						style={{
							height: "100%",
							backgroundColor: "transparent",
						}}
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						mode="inline"
						items={items}
					/>
				</Sider>
				<Content
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.4)",
						margin: 10,
						marginRight: 10,
						borderRadius: 10,
						padding: 10,
						overflowY: "scroll",
						height: "calc(100vh - 84px)",
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default EmployeeLayout;
