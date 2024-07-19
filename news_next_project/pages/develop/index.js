import Link from "next/link";

const index = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/develop/shiva"> Shiva </Link>
          </li>
          <li>
            <Link href="/develop/varun"> Varun </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
