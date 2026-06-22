function Button({ name }) {
  return (
    <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium whitespace-nowrap">
      {name}
    </button>
  );
}

export default Button;
