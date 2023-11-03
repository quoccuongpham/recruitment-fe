import { redirect } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// login action
export const login_action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const result = await axios.post("/auth/login", data, {
			withCredentials: true,
		});
		if (result.data.success) {
			return redirect("/");
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
// register action
export async function register_action({ request }) {
	const formData = await request.formData();
	const info = Object.fromEntries(formData);
	if (info.re_password !== info.password) {
		return null;
	}
	await axios.post("/auth/register", info);
	return redirect("/auth/login");
}
// Post_Job
export async function employer_post_job_action({ request }) {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		console.log(data);
		const result = await axios.post("/employer/create-job", data);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
}
// FindWorker
export async function find_woker_action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	return null;
}
// Employee/DetailJob.jsx
export async function employee_detail_job_action({ request }) {
	try {
		let formData = await request.formData();
		formData = Object.fromEntries(formData);
		await axios.post("/employee/apply", formData);
		return formData;
	} catch (err) {
		return { success: false };
	}
}
// Employee/create-profile.jsx
export async function employee_create_profile_action({ request }) {
	let formData = await request.formData();
	formData = Object.fromEntries(formData);
	console.log(formData);
	return null;
}

// logout
export async function logout_action() {
	await axios.get("/auth/logout");
	return redirect("/auth/login");
}

//*========================= EMPLOYER ==================================
export async function employer_update_profile_action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const result = await axios.post("/employer/profile", data);
		if (result.data.success) {
			swal({
				title: "Thành công",
				content: "Cập nhật thông tin thành công",
				icon: "success",
			});
		} else {
			swal({
				title: "Thất bại",
				content: "Cập nhật thông tin thất bại",
				icon: "error",
			});
		}
	} catch (error) {
		swal({
			title: "Thất bại",
			content: "Cập nhật thông tin thất bại",
			icon: "error",
		});
	}
	console.log("running:::", data);
	return data;
}
