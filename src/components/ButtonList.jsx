import Button from "./Button";

const buttonNames = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Mixes",
  "News",
  "Sports",
  "Comedy",
  "Podcasts",
  "Cricket",
  "Cooking",
  "Travel",
  "Technology",
  "Animation",
  "Fashion",
  "Learning",
];

function ButtonList() {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-3 scrollbar-hide">
      {buttonNames.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
}

export default ButtonList;
