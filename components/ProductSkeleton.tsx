import { Skeleton } from "./ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden">
      {/* Image placeholder */}
      <div className="aspect-square w-full bg-gray-100">
        <Skeleton className="h-full w-full rounded-none" />
      </div>
      
      {/* Content placeholder */}
      <div className="p-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-3 w-3 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-5 w-1/3" />
        </div>
        
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
}
