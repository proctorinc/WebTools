export const BaseEncoder = () => {
  const string = "hello";
  return (
    <div>
      <h1>{parseInt(string, 2)}</h1>
    </div>
  );
};
