import { LinkElement } from ".";

export default function Navbar() {
  return (
    <div className="md:ml-80">
      <LinkElement href="/">Home</LinkElement>
      <LinkElement href="/about">About</LinkElement>
      <LinkElement href="/blog">Blog</LinkElement>
      <LinkElement href="/contact">Contact</LinkElement>
    </div>
  );
}
