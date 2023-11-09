import axios from "axios";
import { redirect } from "react-router-dom";
import Swal from "sweetalert2";
export async function employer_list_apply_loader({ params }) {
	const rs = await axios.get(`/employer/job-apply/${params.id}`);
	console.log(rs);
	return rs.data;
}

export const home_loader = async () => {
	try {
		const info = await axios.get("/auth");
		const jobs = await axios.get("/employee/jobs");
		if (info.data.success) {
			return {
				email: info.data.dataValues.email,
				user_type_id: info.data.dataValues.user_type_id,
				jobs: jobs.data,
			};
		} else {
			return redirect("/login");
		}
	} catch (error) {
		return redirect("/login");
	}
};
// JobPosted.jsx
export async function employer_job_post_loader() {
	const data = await axios.get("/employer/job-posted");
	return data;
}

//* ======================= EMPLOYEE ========================
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
	try {
		const result = await axios.get("/employee/profile");
		return result.data;
	} catch (error) {
		await Swal.fire("Lỗi", "Đã có lỗi xảy ra", "error");
		return null;
	}
}
// Employee/MyJob.jsx
export async function employee_myjob_loader() {
	const result = await axios.get("/employee/apply");
	return result.data;
}

//* ========================= Employer =============================================

// Employer/profile-employee
export async function employer_profile_employee_loader({ params }) {
	const rs = await axios.get(`/employer/seeker-profile/${params.id}`);
	return rs.data;
}
// employer/profile
export async function employer_profile_loader() {
	try {
		const rs = await axios.get("/employer/profile");
		if (rs.data.success) {
			return rs.data.dataValues;
		} else {
			return {};
		}
	} catch (error) {
		return {};
	}
}

export const employer_home_loader = async () => {
	try {
		const info = await axios.get("/auth");
		const profile = await axios.get("/employer/profile");
		if (info.data.success && profile.data.success) {
			return profile.data.dataValues;
		} else {
			return redirect("/auth/login");
		}
	} catch (error) {
		return redirect("/auth/login");
	}
};
