'use client'
import { ForwardArrow } from "@/components/icons/icons";
import { useRouter } from "next/navigation";

export default function IndexHome() {
    const route = useRouter();
    return (

        <section className="w-full relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="flex items-center justify-center flex-col space-y-8 md:space-y-6">
                <div className="bg-gray-100 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-900/80 backdrop-blur-sm border border-gray-400/50 dark:border-gray-800/60 px-4 py-2 rounded-full flex items-center gap-2 mb-4">
                    <span className="size-2 rounded-full bg-yellow-400 block animate-pulse"></span>
                    <span className="text-sm text-gray-800 dark:text-gray-300">Coming Soon to Ghana 🇬🇭</span>
                </div>
                <h1
                    className="font-mono font-bold capitalize text-4xl md:text-8xl text-center tracking-tighter bg-gradient-to-b from-gray-500 to-gray-800 dark:from-gray-50 dark:to-gray-500 bg-clip-text text-transparent">
                    <span className="block"> Drive with Confidence. </span>
                    <span className="block">Verify Before You Buy</span>
                </h1>
                <p className="raleway-400 md:w-5xl text-lg md:text-2xl text-center text-gray-600 dark:text-gray-400 tracking-tighter leading-normal">
                    Get ready for a smarter, safer way to verify vehicles in Ghana. Our platform is coming soon — sign up to stay updated and be among the first to access authentic vehicle history reports.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
                    <button onClick={() => route.push('what-we-are-building')} className="bg-gradient-to-r from-yellow-500 to-orange-500 cursor-pointer font-mono gap-2 flex flex-row items-center capitalize px-6 py-3 md:px-8 md:py-4 rounded-full text-gray-900 font-bold text-sm md:text-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group">
                        <span>Learn More</span>
                        <ForwardArrow className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button onClick={() => route.push('/early-access')} className="bg-gray-900 border-gray-700 border cursor-pointer font-mono gap-2 flex flex-row items-center capitalize px-6 py-3 md:px-8 md:py-4 rounded-full text-gray-200 font-bold text-sm md:text-lg hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300">
                        <span>Get Early Access</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
