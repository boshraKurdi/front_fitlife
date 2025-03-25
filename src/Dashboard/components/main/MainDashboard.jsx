import { Outlet } from "react-router-dom";

import Topbar from "../../pages/global/Topbar";

import Sidebarr from "../../pages/global/Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function MainDashboard() {
  const [isSidebar, setIsSidebar] = useState(true);
     const { tokenAdmin } = useSelector((state) => state.auth) 
  return (
    <div style={{display:'flex' , position: 'relative'}}>
      {tokenAdmin ? <Sidebarr isSidebar={isSidebar} /> : ""}
      <main className="content" style={{flex: '1'}}>
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </main>
    </div>
  );
}
