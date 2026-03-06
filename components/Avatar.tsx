export const Avatar = ({ name, size = 80 }: { name: string; size?: number }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <span className={`p-5 font-bold bg-gray-200 z-20 relative text-gray-700 rounded-full flex items-center justify-center`}
    style={{width: size, height: size, fontSize: size/2 + "px"}}
    >
      {initials}
    </span>
  );
};
