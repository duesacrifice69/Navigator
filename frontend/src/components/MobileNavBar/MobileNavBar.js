import React, { useState } from "react";
import { Settings, Feed } from "../";

const MobileNavBar = ({ userRole }) => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      {selectedTab !== "Home" && (
        <div className="md:hidden z-20 h-full w-full bg bg-white fixed bottom-[60px] ">
          <div
            className="fixed top-0 w-full bg-white"
            style={{ height: "calc(100% - 60px)" }}
          >
            {selectedTab === "Feed" && <Feed userRole={userRole} />}
            {selectedTab === "Settings" && <Settings />}
          </div>
        </div>
      )}

      <div className="h-[60px] w-full md:hidden">
        <div className="fixed bottom-0 w-full">
          <div
            className={`bg-white w-full h-[60px] flex flex-row ${
              selectedTab === "Home" ? "rounded-t-2xl" : ""
            } border-t-2 border-gray-300`}
          >
            <div
              className={`h-full w-[33%] shadow-2xl flex items-center justify-center ${
                selectedTab === "Home"
                  ? "rounded-2xl bg-gray-300 animate-jump animate-once animate-alternate-reverse"
                  : "rounded-none "
              }`}
              onClick={() => handleTabClick("Home")}
            >
              <div className="flex items-center mr-1 text-xl">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              Home
            </div>
            <div
              className={`h-full w-[34%] flex items-center justify-center ${
                selectedTab === "Feed"
                  ? "rounded-2xl bg-gray-300 animate-jump animate-once animate-alternate-reverse"
                  : "rounded-none"
              }`}
              onClick={() => handleTabClick("Feed")}
            >
              <div className="flex items-center mr-1 text-xl">
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </div>
              Feed
            </div>
            <div
              className={`h-full w-[33%] flex items-center justify-center ${
                selectedTab === "Settings"
                  ? "rounded-2xl bg-gray-300 animate-jump animate-once animate-alternate-reverse"
                  : "rounded-none"
              }`}
              onClick={() => handleTabClick("Settings")}
            >
              <div className="flex items-center mr-1 text-xl">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
