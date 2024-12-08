'use client'

import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-primary-gradient font-arial text-white w-full lg:px-24 max-lg:px-24 max-md:px-5 py-6 shadow-md">
            <div className="flex justify-between items-center w-full flex-wrap max-query-470px:justify-center max-query-470px:flex-col gap-2">
                <p className="font-bold lg:text-3xl max-lg:text-2xl max-sm:text-lg">
                    Beyond the Code
                </p>
                <nav>
                    <ul className="flex flex-wrap gap-5 lg:text-base max-lg:text-sm max-sm:text-xs font-medium ">
                        <li>
                            <Link href="/" className="hover:text-lime-green transition duration-200 ease-in-out">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/about" className="hover:text-lime-green transition duration-200 ease-in-out">
                                Sobre Mim
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-lime-green transition duration-200 ease-in-out">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-lime-green transition duration-200 ease-in-out">
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link href={"/pages/curriculum"} className="hover:text-lime-green transition duration-200 ease-in-out">
                                Currículo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
