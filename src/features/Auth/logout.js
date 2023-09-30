import axios from "axios";
export default async function handleLogout() {
    try {
        await axios.post("/auth/logout");
        return null;
    } catch (error) {
        return error;
    }
}
