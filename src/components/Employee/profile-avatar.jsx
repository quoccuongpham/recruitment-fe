import { Container, Box, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import avatar_image from "../../assets/avatar-default.jpg";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const ProfileAvatar = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <Container disableGutters>
            <Stack flexDirection="column" alignItems="start" rowGap={2}>
                <Box
                    height={150}
                    width={150}
                    sx={{
                        backgroundImage: `url(${avatar_image})`,
                        backgroundSize: "contain",
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
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    size="small"
                    sx={{ width: "150px" }}
                >
                    Thêm ảnh
                    <VisuallyHiddenInput type="file" onChange={handleChange} />
                </Button>
            </Stack>
        </Container>
    );
};

export default ProfileAvatar;
