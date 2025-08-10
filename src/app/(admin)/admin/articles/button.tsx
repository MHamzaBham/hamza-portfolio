import { Loader2, Trash2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  isPending?: boolean;
};

export function Button({
  type = "button",
  children,
  className,
  isPending,
}: ButtonProps) {
  return (
    <button
      className="w-full cursor-pointer transition-all duration-300 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      disabled={isPending}
    >
      {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
    </button>
  );
}

export const DeleteButton = ({
  onClick,
  isPending,
}: {
  onClick: () => void;
  isPending: boolean;
}) => {
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className="w-full cursor-pointer transition-all duration-300 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-300 text-white hover:bg-red-400 focus:outline-hidden focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
    >
      {isPending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          <Trash2 className="w-4 h-4" />
          Delete Article
        </>
      )}
    </button>
  );
};
