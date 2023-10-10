import axios from "axios";
import { redirect } from "react-router-dom";
export async function employer_list_apply_loader({ params }) {
	const rs = await axios.get(`/employer/job-apply/${params.id}`);
	console.log(rs);
	return rs.data;
}

export const home_loader = async () => {
	const info = await axios.get("/auth");
	const jobs = await axios.get("/employee/jobs");
	if (info.data.success) {
		return {
			email: info.data.dataValues.email,
			user_type_id: info.data.dataValues.user_type_id,
			jobs: jobs.data,
		};
	} else {
		return redirect("/auth/login");
	}
};
// JobPosted.jsx
export async function employer_job_post_loader() {
	const data = await axios.get("/employer/job-posted");
	return data;
}
// Employee/Job.jsx
export async function employee_job_loader() {
	const data = await axios.get("/employee/jobs");
	return data.data;
}
// Employee/DetailJob
export async function employee_detail_job_loader({ params }) {
	const data = await axios.get(`/employee/job-detail/${params.id}`);
	return data.data;
}
// Employee/Profile.jsx
export async function employee_profile_loader() {
	const result = await axios.get("/employee/profile");
	return result.data;
}
// Employee/MyJob.jsx
export async function employee_myjob_loader() {
	const result = await axios.get("/employee/apply");
	return result.data;
}
