import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { useState } from "react";

const Layout = ({auth,user,setUser}) => {
  const [active, setActive] = useState(0);
  return (
    <>
      {!auth&&<NavBar user={user} active={active} setUser={setUser}/>}
      <Outlet context={[setActive,setUser]} />
      {!auth&&<Footer />}
    </>
  );
};

export default Layout;
