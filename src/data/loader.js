import axios from "axios";
export const home_loader = async () => {
    const info = await axios.get("/auth");
    if (info.data.dataValues.user_type_id == 2) {
        console.log(info.data.dataValues);
    }
    if (info.data.success) {
        return {
            email: info.data.dataValues.email,
            user_type_id: info.data.dataValues.user_type_id,
        };
    } else {
        return null;
    }
};
