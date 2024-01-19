interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text({ children, ...props }: Props) {
  return (
    <p {...props} className="text-lg mt-4 mx-auto p-3 max-w-6xl">
      {children}
    </p>
  );
}
export default Text;
