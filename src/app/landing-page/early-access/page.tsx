'use client'

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { sendWaitlistData } from "@/actions/waitlist"
import { toast } from "sonner"
import { Loader } from "lucide-react"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ArrowRight, Mail, User } from "lucide-react"
import { earlyAccessFormSchema } from "@/schema/schema"

export default function EarlyAccess() {
    const form = useForm<z.infer<typeof earlyAccessFormSchema>>({
        resolver: zodResolver(earlyAccessFormSchema),
        defaultValues: {
            name: "",
            email: "",
            advice: "",
        },
    })

    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function onSubmit(values: z.infer<typeof earlyAccessFormSchema>) {
        setLoading(true);
        const result = await sendWaitlistData(values);
        if (result) {
            toast("Success! You have been added to the waitlist.");
            setIsSubmitted(true);
        }
        else toast.error("Error! Please try again later.");
        setLoading(false);
    }

    return (
        <section className="w-full relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="flex items-center justify-center flex-col space-y-8 md:space-y-6">
                <div className="bg-gray-100 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-900/80 backdrop-blur-sm border border-gray-400/50 dark:border-gray-800/60 px-4 py-2 rounded-full flex items-center gap-2 mb-4">
                    <span className="size-2 rounded-full bg-yellow-400 block animate-pulse"></span>
                    <span className="text-sm text-gray-800 dark:text-gray-300">Coming Soon to Ghana 🇬🇭</span>
                </div>
            </div>
            <h1
                className="font-mono font-bold capitalize text-2xl md:text-4xl text-center tracking-tighter bg-gradient-to-b from-gray-500 to-gray-800 dark:from-gray-50 dark:to-gray-500 bg-clip-text text-transparent">
                <span className="block leading-relaxed"> Join the Waitlist </span>
                <span className="block">Have early access to Carsure</span>
            </h1>

            <div className="flex items-center flex-col py-16">
                <div className="max-w-sm w-full">
                    {
                        isSubmitted ? (
                            <div className="space-y-6 text-center">
                                <div className="mx-auto bg-green-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                                    <Check className="h-8 w-8 text-green-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                                <p className="text-slate-300">
                                    {`You've successfully joined the Carsure waitlist. We'll notify you when we launch in Ghana.`}
                                </p>
                                <Button
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-yellow-600 text-background"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Back to Form
                                </Button>
                            </div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground">Name</FormLabel>
                                                <FormControl>
                                                    <div className="relative flex items-center">
                                                        <User className="h-4 w-4 text-card-foreground absolute left-3" />
                                                        <Input
                                                            placeholder="Enter your name"
                                                            className="pl-10 bg-secondary border-slate-600 focus:border-blue-500 text-white"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground">Email</FormLabel>
                                                <FormControl>
                                                    <div className="relative flex items-center">
                                                        <Mail className="h-4 w-4 text-card-foreground absolute left-3" />
                                                        <Input
                                                            placeholder="example@carsure.com"
                                                            className="pl-10 bg-secondary border-slate-600 focus:border-blue-500 text-white"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="advice"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground">Any suggestions for us? (Optional)</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Share your thoughts..."
                                                        className="bg-secondary border-slate-600 focus:border-blue-500 text-white resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-yellow-600 transition-colors flex items-center justify-center gap-2 h-12`}
                                    >
                                        {loading && <Loader className="animate-spin h-4 w-4" />}
                                        {!loading && (<><span>Join Waitlist</span><ArrowRight className="h-4 w-4" /></>)}
                                    </Button>
                                </form>
                            </Form>
                        )
                    }

                </div>
            </div>
        </section>
    )
}