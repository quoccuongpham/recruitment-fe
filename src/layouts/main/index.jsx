import { useRef, useState } from "react";
import styles from "./main-layout.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import MarkAsUnreadRoundedIcon from "@mui/icons-material/MarkAsUnreadRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Avatar, IconButton, Slide, Divider, Grow, Box } from "@mui/material";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const MainLayout = () => {
	const navItems = useRef([
		{
			path: "/employer/post-job",
			icon: PostAddRoundedIcon,
			text: "Đăng việc",
		},
		{
			path: "/employer/job-posted",
			icon: MarkAsUnreadRoundedIcon,
			text: "Việc đã đăng",
		},
		{
			path: "/employer/find-worker",
			icon: SearchRoundedIcon,
			text: "Tìm ứng viên",
		},
	]);
	const [showSidebar, setShowSidebar] = useState(true);
	function toggleSidebar() {
		setShowSidebar(!showSidebar);
	}
	const data = useLoaderData();
	// console.log(data);
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className={styles.container}>
				{/* aside */}
				<Slide
					direction="right"
					in={showSidebar}
					mountOnEnter
					unmountOnExit
				>
					<aside className={styles.sidebar}>
						<div className={styles.sidebar_header}>
							<p className={styles.sidebar_logo}>Recr.</p>
							<IconButton onClick={toggleSidebar}>
								<MenuRoundedIcon />
							</IconButton>
						</div>
						<Divider />
						<div className={styles.sidebar_info}>
							<Avatar
								alt="avatar"
								src={data?.user_image}
							></Avatar>
							<div className={styles.sidebar_info_text}>
								<p className={styles.sidebar_info_name}>
									{data?.company_name}
								</p>
								<p className={styles.sidebar_info_email}>
									{data?.email}
								</p>
							</div>
						</div>
						<Divider />
						<div className={styles.sidebar_nav}>
							{navItems.current.map((navItem, index) => {
								let Icon = navItem.icon;
								return (
									<NavLink
										key={index}
										to={navItem.path}
										className={({ isActive, isPending }) =>
											[
												styles.navlink,
												isPending ? styles.pending : "",
												isActive ? styles.active : "",
											].join(" ")
										}
									>
										<div
											className={`${styles.sidebar_item}`}
										>
											<Icon />
											<div
												className={
													styles.sidebar_item_text
												}
											>
												{navItem.text}
											</div>
										</div>
									</NavLink>
								);
							})}
							<Divider />
							<div className={styles.sidebar_nav_info}>
								<NavLink
									to="/employer/profile"
									className={({ isActive, isPending }) =>
										[
											styles.navlink,
											isPending ? styles.pending : "",
											isActive ? styles.active : "",
										].join(" ")
									}
								>
									<div className={`${styles.sidebar_item}`}>
										<AccountBoxRoundedIcon />
										<div
											className={styles.sidebar_item_text}
										>
											Tài khoản
										</div>
									</div>
								</NavLink>
								<NavLink
									to="/auth/login"
									className={({ isActive, isPending }) =>
										[
											styles.navlink,
											isPending ? styles.pending : "",
											isActive ? styles.active : "",
										].join(" ")
									}
								>
									<div className={`${styles.sidebar_item}`}>
										<LogoutRoundedIcon />
										<div
											className={styles.sidebar_item_text}
										>
											Đăng xuất
										</div>
									</div>
								</NavLink>
							</div>
						</div>
					</aside>
				</Slide>
				<Grow in={!showSidebar} mountOnEnter unmountOnExit>
					<Box
						position="absolute"
						top={25}
						left={25}
						// padding="3px"
						border="2px solid #ccc"
						borderRadius="5px"
						sx={{
							backgroundColor: "#fff",
							boxShadow:
								"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
						}}
						onClick={() => {
							setShowSidebar(true);
						}}
					>
						<IconButton>
							<MenuRoundedIcon />
						</IconButton>
					</Box>
				</Grow>
				{/* main content */}
				<div className={styles.main}>
					<div className={styles.main_content}>
						<Outlet />
					</div>
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default MainLayout;
