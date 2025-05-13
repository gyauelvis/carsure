export const RecentVINComponentSkeleton = () => {
    return (
        <div className="flex flex-col justify-center h-20 p-3 border rounded-lg bg-muted/50 hover:bg-accent/10 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="h-2 w-44 rounded-full bg-muted-foreground animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="h-1.5 w-20 rounded-full bg-muted-foreground animate-pulse"></div>
                </div>
            </div>
            <div className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 mx-6">
                    <div className="size-3 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="h-1.5 w-16 rounded-full bg-muted-foreground animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="h-1.5 w-16 rounded-full bg-muted-foreground animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}