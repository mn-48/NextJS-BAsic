
import {useRouter} from 'next/router';

export default function BlogDetails() {

    const router = useRouter();

    const blogId = router.query.blogID;

    return (
     
        <h1> Blog Details {blogId}</h1>

     
    )
  }
  
  
  