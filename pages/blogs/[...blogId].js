import React, { memo } from 'react';
import {useRouter} from 'next/router';
const BlogsList = memo(() => {
    const router = useRouter();
    console.log("your router", router)
    return (
        <div>
          <h1>Blogs list in month of and year</h1>

          <h1> pass multiple parmas to url ex: /12/test/user</h1>
        {
            router.query?.blogId?.map((e)=>{
                return <h4>{e}</h4>
            })
        }

        </div>
    );
});

export default BlogsList;