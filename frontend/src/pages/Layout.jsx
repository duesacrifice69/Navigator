import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { useEffect, useState } from "react";
import api from "../api";
import { User } from "../assets";

const Layout = ({ auth, user, setUser }) => {
  const [active, setActive] = useState(0);
  const [profilePicture, setProfilePicture] = useState(User);

  useEffect(() => {
    const fetchData = async () => {
      const img = await api.getProfilePicture();
      setProfilePicture(img);
    };
    fetchData();
  }, []);

  return (
    <>
      {!auth && (
        <NavBar
          user={user}
          active={active}
          setUser={setUser}
          profilePicture={profilePicture}
        />
      )}
      <Outlet context={[setActive, setUser]} />
      {!auth && <Footer />}
    </>
  );
};

export default Layout;
