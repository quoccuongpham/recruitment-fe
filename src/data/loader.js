import axios from "axios";
export const home_loader = async () => {
    const info = await axios.get("/auth");
    return info.data;
};
