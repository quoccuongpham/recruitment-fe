import { useRef, useState } from "react";
import styles from "./main-layout.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import MarkAsUnreadRoundedIcon from "@mui/icons-material/MarkAsUnreadRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Avatar, IconButton, Slide, Divider } from "@mui/material";
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
	console.log(data);
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
							<Avatar alt="avatar"></Avatar>
							<div className={styles.sidebar_info_text}>
								<p className={styles.sidebar_info_name}>
									{data.email}
								</p>
								{/* <p className={styles.sidebar_info_email}>
									quoccuonga2st@gmail.com
								</p> */}
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
