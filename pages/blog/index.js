import Link from "next/link";

export default function BlogList() {
  return (
    <div>
      <h1> Blog List Page</h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/blog/any-things">Blog Details</Link>
        </li>
      </ul>
    </div>
  );
}
