interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Header({ children, ...props }: Props) {
  return (
    <h1 {...props} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {children}
    </h1>
  );
}
export default Header;
