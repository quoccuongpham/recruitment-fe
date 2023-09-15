import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
import {TextField} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers';
import {useState} from "react";
import dayjs from 'dayjs';
export async function action({request}) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    catch (err) {
        console.log(err)
    }
    return {a: 123};
}
const PostJob = () => {
    const [date, setDate] = useState(dayjs());
    return (
        <Box>
            <h1>Đăng tuyển dụng</h1>

                <Form method="post">
                    <TextField
                        label="Tiêu đề"
                        type="text"
                        name="title"
                        placeholder="Tiêu đề"
                        fullWidth={true}
                        margin="normal"
                    />
                    <TextField
                        label="Nội dung"
                        type="text"
                        name="content"
                        multiline={true}
                        rows={3}
                        fullWidth={true}
                        margin="dense"
                    />
                    <DatePicker
                        label="Ngày hết hạn"
                        sx={{paddingBottom:"8px", width:"100%", marginTop: "10px"}}
                        value={date}
                        onChange={(newValue) => setDate(newValue.$d)}
                    />
                    <input name="date_expire" defaultValue={date} hidden={true}/>
                    <Button type="submit" variant="contained">Đăng</Button>
                </Form>
        </Box>
    );
};

export default PostJob;