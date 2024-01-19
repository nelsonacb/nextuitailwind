interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Image({ ...props }: Props) {
  return <img {...props} className="rounded mx-auto p-3" />;
}
export default Image;
