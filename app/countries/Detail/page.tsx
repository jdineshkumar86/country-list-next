'use client'
import Navbar from '@/app/components/Navbar';
import Image from 'next/image'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { GoArrowLeft } from 'react-icons/go';

export default function DetailPage() {

    const searchParams = useSearchParams()
    const [country, setCountry] = useState<any>({} as any);

    const countryName = searchParams.get('name');
    console.log(countryName);

    useEffect(() => {
        async function fetchCountry() {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            let data = await res.json();
            console.log(data[0]);
            setCountry(data[0]);
        }
        fetchCountry()
    }, [])

    return (
        <>
            <div className="min-h-screen text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
                <Navbar />
                <div className="flex py-8 mx-8 mb-4 md:mx-16 lg:mb-8 xl:max-w-screen-xl xl:mx-auto">
                    <Link href="/countries/">
                        <button className="flex items-center px-8 py-4 rounded shadow focus-within:ring bg-light-elements dark:bg-dark-elements focus:outline-none hover:bg-opacity-5">
                            <GoArrowLeft className="mr-4" /> Back
                        </button>
                    </Link>
                </div>

                <div className="max-w-screen-xl gap-24 pb-8 mx-8 xl:mt-24 md:pb-12 lg:pb-0 lg:items-center md:mx-24 xl:px-12 lg:mx-32 xl:flex xl:mx-auto">
                    <Image
                        className="w-full h-auto rounded-md md:max-w-2xl xl:max-w-xl"
                        src={country.flags?.svg}
                        alt={`The flag of ${country.name?.official}`}
                        width={500}
                        height={500}
                    />

                    <div className="items-center justify-center pt-12 lg:pt-16 xl:p-0 md:flex-row">
                        <h1 className="mb-8 text-2xl font-bold">{country.name?.official}</h1>
                        <div className="gap-12 md:flex">
                            <ul className="leading-relaxed">
                                <li>
                                    <span className="font-semibold">
                                        Native Name:{" "}
                                    </span>
                                    {country.nativeName?.nor?.official}
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Population:{" "}
                                    </span>
                                    {country.population?.toLocaleString()}
                                </li>
                                <li>
                                    <span className="font-semibold">Region: </span>
                                    {country.region}
                                </li>
                                <li>
                                    <span className="font-semibold">Capital: </span>
                                    {country.capital}
                                </li>
                            </ul>
                            <ul className="mt-4 leading-relaxed md:mt-0">
                                <li>
                                    <span className="font-semibold">
                                        Top level Domain:{" "}
                                    </span>
                                    {country.area}
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Currencies:{" "}
                                    </span>
                                    {country.currencies?.length > 0 ?country.currencies[0]?.name :''}
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Languages:{" "}
                                    </span>
                                    {country.languages ? Object.keys(country.languages)
                                        .map((key: any) => {
                                            return country.languages[key];
                                        })
                                        .join(",  "): ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
