import axios from "axios";
export default async function handleLogin(info) {
    try {
        const result = await axios.post("/auth/login", info, {
            withCredentials: true,
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
