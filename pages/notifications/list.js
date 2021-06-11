import React, { memo } from 'react';

const list = memo(() => {
    return (
        <div>
            <h1>All notifications</h1>
            
<div>
    <ul>
        <li>testing notification list</li>
        <li>testing notification list</li>
        <li>testing notification list</li>
        <li>testing notification list</li>
        <li>testing notification list</li>
    </ul>
</div>
        </div>
    );
});

export default list;