export function AuthorNames({ names }: { names: string }) {
  return (
    <>
      {names.split(/([*†])/).map((part, index) =>
        part === "†" || part === "*" ? <sup key={index}>{part}</sup> : part,
      )}
    </>
  );
}
