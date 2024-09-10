import Image from 'next/image';

const CountryCard = ({ country }) => {
	return (
		<div>
			<div className="overflow-hidden transition-transform duration-300 ease-out transform rounded-lg shadow cursor-pointer xl:hover:scale-105 bg-light-elements dark:bg-dark-elements text-dark-elements dark:text-light-elements">
				<Image
					className="object-cover w-full h-56 md:h-48 lg:h-72 xl:h-48"
					src={country.flags.svg}
					alt={`The flag of ${country.name.official}`}
					width={500}
      				height={500}
				/>

				<div className="p-8 leading-relaxed">
					<h2 className="mb-4 text-lg font-bold">{country.name.official}</h2>
					<div>
						<span className="font-semibold">Population: </span>
						{country.population.toLocaleString()}
					</div>
					<div>
						<span className="font-semibold">Region: </span>
						{country.region}
					</div>
					<div>
						<span className="font-semibold">Capital: </span>
						{country.capital}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryCard;
