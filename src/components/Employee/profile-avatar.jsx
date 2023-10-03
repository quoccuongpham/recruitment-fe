import { Container, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import defaultAvatar from "../../assets/avatar-default.jpg";
import axios from "axios";
import { useState } from "react";

const ProfileAvatar = ({ url }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [hiddenUpload, setHiddenUpload] = useState(true);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        if (event.target.files[0]) {
            setHiddenUpload(false);
        }
    };
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Vui lòng chọn một tệp ảnh");
            return;
        }

        const formData = new FormData();
        formData.append("avatar", selectedFile);

        try {
            await axios.post(
                "http://localhost:3000/employee/avatar",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert("Upload thành công");
            navigate(0);
        } catch (error) {
            alert("Có lỗi xảy ra khi upload ảnh");
            console.error(error);
        }
    };
    return (
        <Container disableGutters>
            <Stack flexDirection="column" rowGap={2}>
                <Box
                    height={150}
                    width={150}
                    sx={{
                        backgroundImage: `url(${url ?? defaultAvatar})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        "&:hover": {
                            // opacity: 0.5,
                            // backgroundColor: "#ccc",
                            cursor: "pointer",
                        },
                    }}
                    borderRadius="50%"
                    border="1px solid #eee"
                    component="button"
                ></Box>
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <button type="submit" hidden={hiddenUpload}>
                        Lưu
                    </button>
                </form>
            </Stack>
        </Container>
    );
};

export default ProfileAvatar;
