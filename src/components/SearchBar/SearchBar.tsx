import toast from "react-hot-toast";

interface Prop {
  onAdd: (query: string) => void
}

const SearchBar: React.FC<Prop> = ({ onAdd }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;

    if (query.trim() === "") {
      toast("Are you from cave? Enter something!!!");
      return;
    }
    onAdd(query);
    form.reset();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
