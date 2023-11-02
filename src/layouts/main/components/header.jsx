import { Typography } from "@mui/material";
import styles from "./header.module.css";
const Header = ({ title }) => {
	return (
		<header className={styles.header}>
			<Typography
				variant="p"
				fontWeight={700}
				fontSize={18}
				color="Highlight"
			>
				{title}
			</Typography>
		</header>
	);
};

export default Header;
