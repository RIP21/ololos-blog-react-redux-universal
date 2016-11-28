import React from 'react';
import About from '../common/About';
import SidebarModule from '../common/SidebarModule';

const BlogSidebar = () => {
  return (
    <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
      <About/>
      <SidebarModule/>
    </div>
  );
};


export default BlogSidebar;
