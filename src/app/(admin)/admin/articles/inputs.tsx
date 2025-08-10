import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "lucide-react";

type InputProps = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
  register: any; // UseFormRegisterReturn from react-hook-form
  error?: { message?: string };
};

export function TextInput({
  label,
  type = "text",
  id,
  placeholder,
  className,
  register,
  error,
}: InputProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register}
        className={twMerge(
          "py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600",
          error ? "border-red-500 focus:border-red-500" : "",
          className
        )}
        placeholder={placeholder}
        autoComplete="off"
      />
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
}

type DropdownInputProps = {
  label: string;
  placeholder?: string;
  id: string;
  options: { _id: string; name: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  error?: { message?: string };
};

export function DropdownInput({
  label,
  id,
  placeholder,
  options,
  value,
  onChange,
  className,
  error,
}: DropdownInputProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={twMerge(
            "appearance-none py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600 pr-10",
            error ? "border-red-500 focus:border-red-500" : "",
            className
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
}

type TextAreaProps = {
  label: string;
  rows?: number;
  id: string;
  placeholder?: string;
  className?: string;
  register: any; // UseFormRegisterReturn from react-hook-form
  error?: { message?: string };
};

export function TextArea({
  label,
  rows = 3,
  id,
  placeholder,
  className,
  register,
  error,
}: TextAreaProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={rows}
          id={id}
          {...register}
          className={twMerge(
            "py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600",
            error ? "border-red-500 focus:border-red-500" : "",
            className
          )}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
}
