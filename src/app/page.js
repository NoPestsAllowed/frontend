import Main from "@/components/Main";
import Map from "@/components/Map";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <div className="px-6 py-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-6xl">
                        NoPestsAllowed
                    </h2>
                    <p className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-700">
                        The application to make deposition against location infested by pests.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-700">
                        Tired of having a depressing vacation ? Start the fight !
                    </p>
                </div>
            </div>
            <Map></Map>
            <Main>
                <div className="bg-white dark:bg-black">
                    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="mx-auto text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-4xl">
                                Want to know if your next destination is infested ?
                            </h2>
                            {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Download the app.</p> */}
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Download the App
                                </a>
                                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
}
