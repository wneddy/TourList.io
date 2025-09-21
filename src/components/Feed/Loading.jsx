import { Loader } from '@/components/ui/shadcn-io/ai/loader';

export default function Loading () {
    return (
    <div className="flex items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <Loader size={24} />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      
    </div>
  );
}