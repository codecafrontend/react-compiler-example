type Props = {
  title: string;
};

export function Button({ title }: Props) {
  console.log('[Button] Render');
  return (
    <button type="button">{title}</button>
  );
}
