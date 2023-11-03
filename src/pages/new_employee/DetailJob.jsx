import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Divider, Flex, Space, Button, Descriptions } from "antd";
import Link from "antd/es/typography/Link";
import axios from "axios";
import Swal from "sweetalert2";
// import { BookOutlined } from "@mui/icons-material";

const DetailJob = () => {
	const data = useLoaderData();
	const navigate = useNavigate();
	console.log(data);
	const handle_apply = async () => {
		try {
			const is_agree = await Swal.fire({
				title: "Nộp đơn",
				text: "Bạn chắc chắn muốn nộp đơn ứng tuyển công việc này?",
				icon: "question",
				showConfirmButton: "Đồng ý",
				showCancelButton: "Hủy",
			});
			if (is_agree.isConfirmed) {
				await axios.post("/employee/apply", { id_job: data?.job?.id });
				await Swal.fire(
					"Thành công",
					"Bạn đã nộp đơn thành công",
					"success"
				);
				navigate(".");
			}
		} catch (error) {
			Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
		}
	};
	return (
		<div>
			<Title level={4}>{data?.job?.job_title}</Title>
			<Divider />
			<Flex
				style={{
					margin: "0 40px 10px 40px",
					backgroundColor: "#fff",
					borderRadius: "10px",
				}}
				justify="space-between"
			>
				<Space
					direction="vertical"
					size={0}
					style={{ paddingLeft: 20, paddingBottom: 20 }}
				>
					<Title level={3}>{data?.company.company_name}</Title>
					<Link href="#" strong style={{ fontSize: 16 }}>
						{data?.company.company_website_url}
					</Link>
					{/* <Text strong italic style={{ fontSize: 16 }}>
						{data?.company.company_email}
					</Text> */}
				</Space>
				<Space direction="horizontal" style={{ paddingRight: 20 }}>
					{/* <Button icon={<BookOutlined />} /> */}
					<Button
						type="primary"
						onClick={handle_apply}
						disabled={data?.is_applied}
					>
						{data?.is_applied ? "Đã ứng tuyển" : "Ứng tuyển"}
					</Button>
				</Space>
			</Flex>
			<Flex
				vertical
				style={{
					margin: "0 40px 10px 40px",
					backgroundColor: "#fff",
					borderRadius: "10px",
					padding: "40px 10px 20px 20px",
				}}
			>
				<Descriptions title="Thông tin chung">
					<Descriptions.Item label="Vị trí">
						{data?.job?.job_title}
					</Descriptions.Item>
					<Descriptions.Item label="Loại công việc">
						{data?.job_type}
					</Descriptions.Item>
					<Descriptions.Item label="Địa chỉ">
						{[
							data?.job_location?.street_address,
							data?.job_location.city,
							data?.job_location.country,
						].join(", ")}
					</Descriptions.Item>
					<Descriptions.Item label="Ngày bắt đầu">
						{data?.job.date_receiving_application}
					</Descriptions.Item>
					<Descriptions.Item label="Ngày hết hạn">
						{data?.job.date_expire}
					</Descriptions.Item>
				</Descriptions>
				<Divider />
				<Descriptions title="Mô tả công việc" column={1}>
					<Descriptions.Item label="Mô tả">
						<Text
							style={{
								whiteSpace: "pre-wrap",
								wordWrap: "normal",
							}}
						>
							{data?.job.job_description}
						</Text>
					</Descriptions.Item>
					{data?.job.file_description ? (
						<Descriptions.Item label="file mô tả">
							<Link href={data?.job.file_description} strong>
								Tải xuống
							</Link>
						</Descriptions.Item>
					) : null}
				</Descriptions>
			</Flex>
		</div>
	);
};

export default DetailJob;
