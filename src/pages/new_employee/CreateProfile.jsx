import {
	Typography,
	Divider,
	Space,
	Form,
	Input,
	Button,
	Select,
	Checkbox,
} from "antd";
import { useLoaderData, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
import {
	ArrowLeftOutlined,
	PlusCircleOutlined,
	SaveOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
const CreateProfile = () => {
	const data = useLoaderData()?.dataValues;
	const navigate = useNavigate();
	const onFinishFormGenaral = async (values) => {
		try {
			const rs = await axios.patch("/employee/profile/general", values);
			if (rs.data.success) {
				await Swal.fire(
					"Thành công",
					"Cập nhật thông tin thành công",
					"success"
				);
			} else {
				await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
			}
		} catch (error) {
			await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
		}
	};
	const onFinishFormEdu = async (values) => {
		try {
			const rs = await axios.post("/employee/profile/education", values);
			if (rs.data.success) {
				await Swal.fire(
					"Thành công",
					"Cập nhật thông tin thành công",
					"success"
				);
			} else {
				await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
			}
		} catch (error) {
			await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
		}
	};
	const onFinishFormExp = async (values) => {
		try {
			if (values.is_current_job == undefined) {
				values.is_current_job = false;
			}
			const rs = await axios.post("/employee/profile/experience", values);
			if (rs.data.success) {
				await Swal.fire(
					"Thành công",
					"Cập nhật thông tin thành công",
					"success"
				);
			} else {
				await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
			}
		} catch (error) {
			await Swal.fire("Thất bại", "Đã có lỗi xảy ra", "error");
		}
	};
	const label_edu = {
		"Tên bằng cấp": { name: "cetificate_degree_name", type: "text" },
		Ngành: { name: "major", type: "text" },
		"Tên trường": { name: "institute_university_name", type: "text" },
		"Ngày vào trường": { name: "starting_date", type: "date" },
		"Ngày ra trường": { name: "completion_date", type: "date" },
		GPA: { name: "cgpa", type: "number" },
	};
	const label_exp = {
		"Ngày bắt đầu": {
			component: Input,
			name: "start_date",
			type: "date",
			required: true,
		},
		"Ngày kết thúc": {
			component: Input,
			name: "end_date",
			type: "date",
			required: true,
		},
		"Vị trí": {
			component: Input,
			name: "job_title",
			type: "text",
			required: true,
		},
		"Công ty": {
			component: Input,
			name: "company_name",
			type: "text",
			required: true,
		},
		"Thành phố": {
			component: Input,
			name: "job_location_city",
			type: "text",
			required: true,
		},
		"Quốc gia": {
			component: Input,
			name: "job_location_country",
			type: "text",
			required: true,
		},
		"Mô tả công việc": {
			component: Input.TextArea,
			name: "description",
			type: "text",
			required: true,
			multiple: true,
			row: 6,
		},
		"Công việc hiện tại": {
			component: Checkbox,
			name: "is_current_job",
			valuePropName: "checked",
		},
	};
	return (
		<div>
			<Title level={4}>
				<Button
					icon={<ArrowLeftOutlined />}
					shape="circle"
					size="small"
					onClick={() => {
						navigate(-1);
					}}
					style={{
						marginRight: "8px",
						// backgroundColor: "transparent",
					}}
				></Button>
				<Text style={{ fontSize: 18 }}>Chỉnh sửa thông tin</Text>
			</Title>
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
			>
				<Title level={5}>Thông tin chung</Title>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 10,
					}}
					style={{
						width: "100%",
					}}
					layout="horizontal"
					initialValues={true}
					onFinish={onFinishFormGenaral}
				>
					<Form.Item
						label="Tên"
						name="first_name"
						initialValue={data?.first_name}
						rules={[
							{
								required: true,
								message: "Vui lòng nhập tên!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Họ"
						name="last_name"
						initialValue={data?.last_name}
						rules={[
							{
								required: true,
								message: "Vui lòng nhập họ!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Email liên hệ"
						name="email_contact"
						initialValue={data?.email_contact}
						rules={[
							{
								required: true,
								message: "Vui lòng nhập email liên hệ",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Lương hiện tại"
						name="current_salary"
						initialValue={data?.current_salary}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="gender"
						label="Giới tính"
						initialValue={data?.user_account?.gender}
					>
						<Select
							options={[
								{ value: "M", label: "Nam" },
								{ value: "F", label: "Nữ" },
							]}
						></Select>
					</Form.Item>
					<Button
						icon={<SaveOutlined />}
						type="primary"
						htmlType="submit"
					>
						Lưu
					</Button>
				</Form>
				<Title level={5}>Học vấn</Title>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 10,
					}}
					style={{
						width: "100%",
					}}
					layout="horizontal"
					initialValues={true}
					onFinish={onFinishFormEdu}
				>
					{Object.keys(label_edu).map((key, index) => {
						return (
							<Form.Item
								key={"edu" + index}
								label={key}
								name={label_edu[key].name}
								rules={[
									{
										required: true,
										message: "Không được để trống",
									},
								]}
							>
								<Input type={label_edu[key].type} />
							</Form.Item>
						);
					})}
					<Button
						icon={<PlusCircleOutlined />}
						type="primary"
						htmlType="submit"
					>
						Thêm
					</Button>
				</Form>
				<Title level={5}>Kinh nghiệm làm việc</Title>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 10,
					}}
					style={{
						width: "100%",
					}}
					layout="horizontal"
					initialValues={true}
					onFinish={onFinishFormExp}
				>
					{Object.keys(label_exp).map((key, index) => {
						const Component = label_exp[key].component;
						return (
							<Form.Item
								key={"edu" + index}
								label={key}
								name={label_exp[key].name}
								valuePropName={label_exp[key].valuePropName}
								rules={[
									{
										required: label_exp[key].required,
										message: "Không được để trống",
									},
								]}
							>
								<Component
									type={label_exp[key]?.type}
									rows={label_exp[key]?.row}
								/>
							</Form.Item>
						);
					})}
					<Button
						icon={<PlusCircleOutlined />}
						type="primary"
						htmlType="submit"
					>
						Thêm
					</Button>
				</Form>
			</Space>
		</div>
	);
};

export default CreateProfile;
