import axios from "axios";
export default async function handleLogout() {
    try {
        const result = await axios.post("/auth/logout");
        return result;
    } catch (error) {
        return error;
    }
}
