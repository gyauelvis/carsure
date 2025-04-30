export default function WhatWeAreBuilding() {
    return (
        <section className="w-full relative py-2 md:py-24">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-1 md:px-6">
                <div className="flex items-center gap-2 mb-10">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-12"></div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Project Report</span>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-grow"></div>
                </div>

                <article className="relative backdrop-blur-sm border border-gray-800/30 rounded-xl p-2s md:p-10 bg-gray-50 dark:bg-gray-900/20">

                    <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M10,10 L50,10 L50,50 L90,50 L90,90 L130,90 L130,130 L170,130 L170,170"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2" />
                            <circle cx="10" cy="10" r="4" fill="currentColor" />
                            <circle cx="50" cy="10" r="4" fill="currentColor" />
                            <circle cx="50" cy="50" r="4" fill="currentColor" />
                            <circle cx="90" cy="50" r="4" fill="currentColor" />
                            <circle cx="90" cy="90" r="4" fill="currentColor" />
                            <circle cx="130" cy="90" r="4" fill="currentColor" />
                            <circle cx="130" cy="130" r="4" fill="currentColor" />
                            <circle cx="170" cy="130" r="4" fill="currentColor" />
                            <circle cx="170" cy="170" r="4" fill="currentColor" />
                        </svg>
                    </div>

                    <header className="mb-8 border-b border-gray-800/30 pb-6">
                        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            A Vehicle Verification and History Recording System
                        </h1>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="bg-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-mono">Automotive</span>
                            <span className="bg-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-mono">Ghana</span>
                            <span className="bg-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full font-mono">Data Integrity</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-gray-700"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">CarSure Research Team</p>
                                <p className="text-xs text-gray-400">April 2025 • 8 min read</p>
                            </div>
                        </div>
                    </header>

                    <div className="space-y-6 text-gray-500 dark:text-gray-300 ">
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="font-mono text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-100 dark:to-gray-400">Introduction</h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
                        </div>

                        <p className="leading-relaxed">
                            Mobility is a fundamental human need, leading to the development of various means of transportation, including vehicles, bicycles, and motorcycles. Among these, road transport—particularly vehicles—plays a crucial role in daily movement. In Ghana, vehicles remain the primary mode of transportation, making the automobile market a significant and growing industry.
                        </p>

                        <div className="bg-gray-200 dark:bg-gray-800/30 border-l-2 border-blue-400 p-4 rounded-r my-6">
                            <p className="text-sm italic">
                                As of 2022, Ghana had approximately <span className="font-semibold text-blue-400">3.2 million registered vehicles</span> [1], with about <span className="font-semibold text-blue-400">70%</span> being used vehicles [3].
                            </p>
                        </div>

                        <p className="leading-relaxed">
                            The Ghanaian vehicle market also experienced a <span className="text-blue-400 font-medium">14.7% growth</span>, reaching 5,000 sales, with positive performance recorded each month of the year [2].
                        </p>

                        <p className="leading-relaxed">
                            According to Wikipedia, a used car (pre-owned or second hand vehicle) is a vehicle that has previously had one or more retail owners. Due to their affordability, most people in Ghana prefer purchasing used vehicles rather than brand-new ones. These vehicles are not only used for private purposes but also serve as commercial transport, such as trotros (minibuses) and taxis. As a result, buyers must exercise caution when purchasing a used vehicle to avoid acquiring one with potential mechanical or operational problems.
                        </p>

                        <p className="leading-relaxed mt-6">
                            However, evaluating the condition of a used vehicle can be particularly challenging for buyers without a technical background. In the local used-car market, assessments are primarily based on metrics such as mileage, engine health, and exterior and interior condition. While these factors provide some insight into a vehicle's state, they are not always reliable indicators of its overall safety and roadworthiness, as they can be easily manipulated.
                        </p>

                        <p className="leading-relaxed mt-6">
                            The reliability of these assessment metrics is questionable. For instance, evaluating a vehicle solely based on its exterior and interior condition is often misleading, as underlying mechanical issues or structural damage may be concealed. Similarly, odometer readings can be tampered with to display lower mileage, giving buyers a false impression of the vehicle’s actual wear and tear. Accident histories are often untraceable, particularly if a vehicle has been repaired at an uncertified mechanic workshop, which is common in Ghana. There are no standardized systems in place for verifying whether a vehicle has been reported as stolen in the country which poses a significant risk to buyers.
                        </p>

                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="font-mono text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-100 dark:to-gray-400">General Objective</h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
                        </div>

                        <p className="leading-relaxed mt-6">
                            The general objective of this project is to develop a digital user-friendly system that enhances transparency and ensures the authenticity of used car purchases. Additionally, the system will provide a comprehensive database and user-friendly interface to help authorities track and maintain records of vehicles reported as stolen.
                        </p>

                    </div>
                </article>
            </div>
        </section>
    );
}