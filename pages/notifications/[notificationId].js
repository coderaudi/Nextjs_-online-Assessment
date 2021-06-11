import React, { memo } from 'react';
import {useRouter} from 'next/router';

const notification = memo(() => {
 
    const router = useRouter();
    console.log(router.query)

    return (
        <div>
            <h1>File Based routing </h1>
            <h1>pathname :{router.pathname}</h1>
            <h1>notificationId :{router.query.notificationId}</h1>
        </div>
    );
});

export default notification;