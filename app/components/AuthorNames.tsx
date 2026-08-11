export function AuthorNames({ names }: { names: string }) {
  return (
    <>
      {names.split(/(†)/).map((part, index) =>
        part === "†" ? <sup key={index}>†</sup> : part,
      )}
    </>
  );
}
