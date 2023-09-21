import axios from "axios";
import { redirect } from "react-router-dom";
export const home_loader = async () => {
    const info = await axios.get("/auth");
    if (info.data.success) {
        return {
            email: info.data.dataValues.email,
            user_type_id: info.data.dataValues.user_type_id,
        };
    } else {
        return redirect("/auth/login");
    }
};
