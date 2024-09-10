'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryCard from "../components/CountryCard";
import PopulationFilter from "../components/PopulationFilter";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function Countries() {
    const NUMBER_OF_COUNTRIES_TO_FETCH = 10;
    // let countryList: any[] = [];
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [sortType, setSortType] = useState("ASC");
    const [fullcountryList, setFullCountryList] = useState<CountryList[]>([]);

    useEffect(() => {
        async function fetchCountries() {
            const res = await fetch("https://restcountries.com/v3.1/all");
            let data = await res.json();

            // data.forEach((country: any) => {
            //     console.log(country.name.common.toLowerCase());
            // });
            data = applySortType(sortType, data);
            setFullCountryList(data);
            console.log(data)
        }
        fetchCountries()
    }, [])

    function CompareCountryList(a: CountryList, b: CountryList) {
        if (a.population < b.population) {
            return -1;
        }
        if (a.population > b.population) {
            return 1;
        }
        return 0;
    }

    function applySortType(sortType: string, countries: CountryList[]): CountryList[] {
        if (sortType == "ASC") {
            return countries.sort(CompareCountryList);
        }
        else {
            return countries.sort(CompareCountryList).reverse();
        }
    }

    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <Navbar />
                <main className="max-w-screen-xl min-h-screen pb-16 mx-8 md:mx-16 xl:mx-auto">
                    <div className="flex-row items-center justify-between py-8 sm:flex sm:mb-16">
                        <SearchBar search={search} setSearch={setSearch} />
                        Region : <RegionFilter filter={filter} setFilter={setFilter} />
                        Sort Population In <PopulationFilter sortType={sortType} setSortType={setSortType} /> order
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                        {fullcountryList &&
                            applySortType(sortType, fullcountryList)
                                .filter(
                                    (country: CountryList) =>
                                        country.region.includes(filter) &&
                                        country.name.common.toLowerCase().includes(search)
                                ).map((country: any) => (
                                    <Link
                                        href={`/countries/Detail?name=${country.name.common}`}
                                        key={country.name.common}
                                    >
                                        <div>
                                            <CountryCard country={country} key={country.ccn3} />
                                        </div>
                                    </Link>
                                ))}
                    </div>
                </main>
            </NextThemesProvider>
        </NextUIProvider>
    );
}