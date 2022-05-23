import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import {useNavigate} from "react-router-dom";

import Header from "../components/Header/header.component";
import RolProvider from "../utils/rol.provider";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const admin = [
    {
      label: "Movies",
      icon: "pi pi-fw pi-pencil",
      command: () => {navigate('/') },
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
      command: () => {navigate('/logout') },
    },
    {
        label: "Admin panel",
        icon: "pi pi-fw pi-user-plus",
        command: () => {navigate('/paneladmin') },
      },
  ];

  const user = [
    {
      label: "Movies",
      icon: "pi pi-fw pi-pencil",
      command: () => {navigate('/') },
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-power-off",
      command: () => {navigate('/logout') },
    },
  ];

  const guest = [
    {
      label: "Movies",
      icon: "pi pi-fw pi-pencil",
      command: () => {navigate('/') },
    },
    {
      label: "Login",
      icon: "pi pi-fw pi-power-off",
      command: () => {navigate('/login') },
    },
    {
      label: "Register",
      icon: "pi pi-fw pi-user",
      command: () => {navigate('/register') },
    },
  ];

  return (
    <>
      <RolProvider rolToBeEqual={true}> <Header menu={admin}/></RolProvider>
      <RolProvider rolToBeEqual={false}> <Header menu={user}/></RolProvider>
      <RolProvider rolToBeEqual={"unlogged"}> <Header menu={guest}/></RolProvider>
      {/* <RolProvider rolToBeEqual="usuario"> <Header rol={"usuario"}  menu={usuario}/> </RolProvider>
      <RolProvider rolToBeEqual="superusuario"> <Header rol={"superusuario"}  menu={superusuario}/> </RolProvider> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
