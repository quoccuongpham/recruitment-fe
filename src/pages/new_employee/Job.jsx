import { Link, useLoaderData } from "react-router-dom";
import { Space, Card, Typography, Divider } from "antd";
const { Title, Text } = Typography;
const Job = () => {
	const data = useLoaderData();
	return (
		<>
			<Title level={4}>Việc làm</Title>
			<Divider />
			<Space direction="horizontal" wrap size={16}>
				{data.map((element, index) => {
					return (
						<Card
							title={element.job_title}
							extra={
								<Link to={`/main/detail-job/${element?.id}`}>
									Xem thêm
								</Link>
							}
							style={{ width: 300 }}
							key={index}
						>
							<Text style={{ fontWeight: 600 }}>
								Bắt đầu tuyển dụng:{" "}
								<Text type="success">
									{element?.date_receiving_application}
								</Text>
							</Text>
							<br />
							<Text style={{ fontWeight: 600 }}>
								Hết hạn:{" "}
								<Text type="warning">
									{element?.date_expire}
								</Text>
							</Text>
						</Card>
					);
				})}
			</Space>
		</>
	);
};

export default Job;
