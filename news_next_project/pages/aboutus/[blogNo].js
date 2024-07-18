import {useRouter} from "next/router";

const blogNo = () => {

    const router = useRouter();
    const blogSerialNo = router.query.blogNo;

  return (
    <>
    <h1> {blogSerialNo} Senior Developer. </h1>
    </>
  )
}

export default blogNo;