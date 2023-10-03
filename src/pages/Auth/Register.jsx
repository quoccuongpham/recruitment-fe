import { Box, Typography, Stack } from "@mui/material";
import axios from "axios";
import {
    InputStyled,
    ButtonStyled,
    SelectStyled,
} from "../../utils/styled_component/input";
import { Form, redirect } from "react-router-dom";
import LinkStyled from "../../utils/styled_component/LinkStyled";
export async function action({ request }) {
    const formData = await request.formData();
    const info = Object.fromEntries(formData);
    if (info.re_password !== info.password) {
        return null;
    }
    await axios.post("/auth/register", info);
    return redirect("/auth/login");
}
const Register = () => {
    return (
        <Box
            display="flex"
            minWidth="100vw"
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="start"
            >
                <Typography
                    variant="p"
                    fontWeight="bold"
                    fontSize="25px"
                    paddingBottom={1}
                    alignSelf="center"
                >
                    Đăng ký
                </Typography>
                <Form method="post">
                    <Stack gap={1} paddingBottom={2}>
                        <SelectStyled name="user_type_id">
                            <option value="1">Người tìm việc</option>
                            <option value="2">Nhà tuyển dụng</option>
                        </SelectStyled>
                        <InputStyled
                            type="text"
                            placeholder="Email"
                            name="email"
                        />
                        <InputStyled
                            type="phone"
                            placeholder="Số điện thoại"
                            name="contact_number"
                        />
                        <InputStyled
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                        />
                        <InputStyled
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            name="re_password"
                        />
                    </Stack>
                    <ButtonStyled type="submit" fullWidth>
                        Đăng ký
                    </ButtonStyled>
                </Form>
                <Typography paddingTop={3}>
                    Đã có tài khoản?{" "}
                    <Typography variant="span" fontWeight={700} color="#0049B7">
                        <LinkStyled to="/auth/login">Đăng nhập</LinkStyled>
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default Register;
