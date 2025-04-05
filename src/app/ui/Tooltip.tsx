
interface TooltipProps {
  tooltip: string; 
}

export default function TooltipDefault({tooltip}: TooltipProps) {
  return (
    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 invisible group-hover:visible bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none">
      {tooltip}
    </span>
  );
}
