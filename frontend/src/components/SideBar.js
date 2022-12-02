import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { ProSidebarProvider } from 'react-pro-sidebar';

function SideBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
    <ProSidebarProvider>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/api/mycourses" />}> My Courses</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
      </ProSidebarProvider>
    </div>

  );
}
export default SideBar