import { Link, useLoaderData } from "react-router-dom";
import { Space, Card, Typography, Spin, Divider } from "antd";
const { Text, Title } = Typography;
const MyJob = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<Title level={4}>Việc của tôi</Title>
			<Divider />
			<Space style={{ width: "100%" }}>
				{data.map((element, index) => (
					<Card
						key={index}
						title={element?.job_post?.job_title}
						extra={
							<Link
								to={`/main/detail-job/${element?.job_post?.id}`}
							>
								Xem thêm
							</Link>
						}
						style={{ width: "300px" }}
					>
						<Text>Ngày ứng tuyển: {element?.apply_date}</Text>
						<br />
						<Text>Trạng thái: </Text>
						{element?.is_accept ? (
							"hồ sơ đã được chấp nhận"
						) : (
							<Text strong type="warning">
								đang phê duyệt <Spin size="small" />
							</Text>
						)}
					</Card>
				))}
			</Space>
		</>
	);
};

export default MyJob;
