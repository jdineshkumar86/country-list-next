import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const PopulationFilter = ({ sortType, setSortType }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const sortTypes = ["ASC", "DESC"];

    return (
		<div className="relative sm:w-48">
			<div
				onClick={ () => setToggleMenu(!toggleMenu) }
				onBlur={ () => setToggleMenu(false) }
				className="overflow-hidden rounded-md shadow cursor-pointer bg-light-elements dark:bg-dark-elements dark:text-light-elements focus-within:ring"
			>

				<form className="flex items-center justify-between w-full p-4 focus:outline-none hover:opacity-75">
					{ sortType ? sortType : "ASC" }
					<GoChevronDown
						className={ `transform transition-transform ml-4 ${toggleMenu && "rotate-180"
							}` }
					/>
				</form>
			</div>
			{toggleMenu && (
				<div
					className="absolute z-10 flex flex-col w-full mt-2 overflow-hidden rounded-md shadow text-dark-elements bg-light-elements dark:bg-dark-elements dark:text-light-elements focus:outline-none"
					onClick={ () => setToggleMenu(false) }
				>
                    

					{sortTypes.map((region) => (
						<button
							key={ region }
							onMouseDown={ (e) => {
								e.preventDefault();
							} }
							onClick={ () => setSortType(region) }
							className="p-2 text-left focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-100"
						>
							{region }
						</button>
					)) }
				</div>
			)
			}
		</div>
	);
};

export default PopulationFilter;