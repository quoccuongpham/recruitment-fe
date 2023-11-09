import { Typography, Divider, Space, Descriptions, Avatar, Button } from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";
const { Title } = Typography;
import { Link } from "react-router-dom";

import { get_item_education, get_item_experience } from "./get_items";
import DeleteOutlined from "@ant-design/icons/DeleteFilled";
import Swal from "sweetalert2";
import axios from "axios";
const Profile = () => {
	const data = useLoaderData()?.dataValues;
	const navigate = useNavigate();
	return (
		<div>
			<Title level={4}>Thông tin cá nhân</Title>
			<Divider />
			<Space
				style={{
					width: "100%",
					backgroundColor: "#fff",
					borderRadius: "5px",
					padding: "40px 20px 10px 20px",
				}}
				direction="vertical"
				size={0}
				align="center"
			>
				<Divider orientation="center">
					<Avatar src={data?.user_account.user_image} size={64} />
				</Divider>
				<Descriptions title="Thông tin">
					<Descriptions.Item label="Email liên hệ">
						{data?.email_contact}
					</Descriptions.Item>
					<Descriptions.Item label="Số điện thoại">
						{data?.user_account?.contact_number}
					</Descriptions.Item>
					<Descriptions.Item label="Giới tính">
						{data?.user_account.gender == "M" ? "Nam" : "Nữ"}
					</Descriptions.Item>
					<Descriptions.Item label="Ngày sinh">
						{data?.user_account.date_of_birth}
					</Descriptions.Item>
					<Descriptions.Item label="Lương hiện tại">
						{`${data?.current_salary} ${data?.currency}`}
					</Descriptions.Item>
					{data?.file_cv ? (
						<Descriptions.Item label="CV">
							<a href={data?.file_cv}>Tải xuống</a>
						</Descriptions.Item>
					) : null}
				</Descriptions>
				{get_item_education(data?.education_details)?.map((item, i) => (
					<Descriptions
						key={"edu" + i + Math.random()}
						items={item}
						title={
							<>
								<span>{"Học vấn " + (i + 1)}</span>
								<DeleteOutlined
									onClick={async () => {
										const is_confirm = (
											await Swal.fire({
												title: "Xóa học vấn",
												text: "Bạn có chắc chắn muốn xóa học vấn này?",
												icon: "warning",
												showCancelButton: true,
												showConfirmButton: true,
												confirmButtonText: "Xóa",
												cancelButtonText: "Hủy",
											})
										).isConfirmed;
										if (is_confirm) {
											await axios.delete(
												"/employee/profile/education",
												{
													data: {
														cetificate_degree_name:
															data
																?.education_details[
																i
															]
																.cetificate_degree_name,
														major: data
															?.education_details[
															i
														].major,
													},
												}
											);
										}
										return navigate(".");
									}}
									style={{
										color: "red",
										marginLeft: "10px",
										display: "inline-block",
									}}
								/>
							</>
						}
					/>
				))}
				{get_item_experience(data?.experience_details)?.map(
					(item, i) => (
						<Descriptions
							key={"exp" + i + Math.random()}
							items={item}
							title={
								<>
									<span>{"Kinh nghiệm " + (i + 1)}</span>
									<DeleteOutlined
										onClick={async () => {
											const is_confirm = (
												await Swal.fire({
													title: "Xóa kinh nghiệm",
													text: "Bạn có chắc chắn muốn xóa kinh nghiệm này?",
													icon: "warning",
													showCancelButton: true,
													showConfirmButton: true,
													confirmButtonText: "Xóa",
													cancelButtonText: "Hủy",
												})
											).isConfirmed;
											if (is_confirm) {
												await axios.delete(
													"/employee/profile/experience",
													{
														data: {
															start_date:
																data
																	?.experience_details[
																	i
																].start_date,
															end_date:
																data
																	?.experience_details[
																	i
																].end_date,
														},
													}
												);
											}
											return navigate(".");
										}}
										style={{
											color: "red",
											marginLeft: "10px",
											display: "inline-block",
										}}
									/>
								</>
							}
						/>
					)
				)}
				<Link to="/main/create-profile">
					<Button style={{ marginTop: "10px" }}>Chỉnh sửa</Button>
				</Link>
			</Space>
		</div>
	);
};

export default Profile;
