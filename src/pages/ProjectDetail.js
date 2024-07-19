import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetail = () => {
    const location = useLocation();
    const { title } = location.state || {};
    return(
        <div>This is project-detail page for {title}</div>
    );
}

export default ProjectDetail;