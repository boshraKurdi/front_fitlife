import { Outlet } from "react-router-dom";

import Topbar from "../../pages/global/Topbar";

import Sidebarr from "../../pages/global/Sidebar";
import { useState } from "react";
export default function MainDashboard() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div style={{display:'flex' , position: 'relative'}}>
      <Sidebarr isSidebar={isSidebar} />
      <main className="content" style={{flex: '1'}}>
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </main>
    </div>
  );
}
