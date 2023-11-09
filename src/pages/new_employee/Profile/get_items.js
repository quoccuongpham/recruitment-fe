const extract_education_item = (payload) => {
	return {
		"Tên bằng cấp": payload.cetificate_degree_name,
		Ngành: payload.major,
		"Tên trường": payload.institute_university_name,
		"Ngày vào trường": payload.starting_date,
		"Ngày ra trường": payload.completion_date,
		GPA: payload.cgpa,
	};
};

const extract_experience_item = (payload) => {
	return {
		"Ngày bắt đầu": payload.start_date,
		"Ngày kết thúc": payload.end_date,
		"Vị trí": payload.job_title,
		"Công ty": payload.company_name,
		"Địa chỉ": [
			payload.job_location_city,
			payload.job_location_country,
		].join(", "),
		"Mô tả công việc": payload.description,
		// "Công việc hiện tại": payload.is_current_job,
	};
};
export const get_item_education = (payload) => {
	//@type payload: array
	if (payload?.length > 0) {
		const items = payload.map((item) => {
			let local_item = extract_education_item(item);
			const edu_items = Object.keys(local_item).map((key, i) => {
				return {
					key: i,
					label: key,
					children: local_item[key],
				};
			});
			return edu_items;
		});
		return items;
	}
	return null;
};

export const get_item_experience = (payload) => {
	if (payload?.length > 0) {
		const items = payload.map((item) => {
			let local_item = extract_experience_item(item);
			const exp_items = Object.keys(local_item).map((key, i) => {
				return {
					key: i,
					label: key,
					children: local_item[key],
				};
			});
			return exp_items;
		});
		return items;
	}
	return null;
};
