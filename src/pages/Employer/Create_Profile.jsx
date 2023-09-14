import {Button, Container, TextField } from "@mui/material";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload.js"
import {Form, Link} from "react-router-dom";
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const Create_Profile = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container maxWidth disableGutters>
                <Typography variant="body1" fontWeight="bold" fontSize="20px" maxWidth={true} textAlign="center" paddingBottom="20px">
                    Thiết lập hồ sơ
                </Typography>
                {/*    is_hidden name, job description, location, */}
                <Form method="post">
                    <TextField
                        placeholder="Tên công ty"
                        fullWidth={true}
                        sx={{paddingBottom:"8px"}}
                    />
                    <TextField
                        placeholder="Mô tả"
                        multiline={true}
                        fullWidth={true}
                        rows={3}
                        sx={{paddingBottom:"8px"}}
                    />

                    <TextField
                        placeholder="Địa chỉ website"
                        fullWidth={true}
                        sx={{paddingBottom:"8px"}}
                    />
                    <DatePicker
                        label="Ngày thành lập"
                        sx={{paddingBottom:"8px", width:"100%"}}
                    />
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        href="#file-upload"

                    >
                        Upload a file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <Box>
                        <Button type="submit" variant="contained" sx={{display: "inlineBlock", marginTop: "20px", marginRight: "10px"}}>Xác nhận</Button>
                        <Link to={-1}><Button type="button" variant="contained" color="error" sx={{display: "inlineBlock", marginTop: "20px"}}>Hủy</Button></Link>
                    </Box>
                </Form>
            </Container>
        </LocalizationProvider>
    );
};

export default Create_Profile;
