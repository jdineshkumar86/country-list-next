import { GoSearch } from "react-icons/go";

const Searchbar = ({ search, setSearch }) => {
	return (
		<div>
			<form action="/" method="get" onSubmit={(e) => e.preventDefault()}>
				<label className="hidden" htmlFor="userSearch">
					<span>Search for a country</span>
				</label>

				<div className="flex items-center mb-4 overflow-hidden text-gray-400 rounded-md shadow sm:mb-0 md:w-80 bg-light-elements dark:bg-dark-elements dark:text-light-elements focus-within:ring">
					<GoSearch className="mx-8 transform scale-150" />
					<input
						className="w-full p-4 text-dark-elements bg-light-elements dark:bg-dark-elements dark:text-light-elements dark:placeholder-gray-300 focus:outline-none"
						autoComplete="off"
						type="search"
						id="userSearch"
						placeholder="Search for a country..."
						value={search}
						onChange={(e) => setSearch(e.target.value.toLowerCase())}
					/>
				</div>
			</form>
		</div>
	);
};

export default Searchbar;
