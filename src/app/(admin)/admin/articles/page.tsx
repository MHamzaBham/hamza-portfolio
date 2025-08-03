"use client"

import {
  ChevronDownIcon,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const authors = [
  { id: "1", name: "Alice Smith" },
  { id: "2", name: "Bob Johnson" },
  { id: "3", name: "Charlie Brown" },
];

const DashboardPage = () => {
  return (
    <div>
      <h2 className="text-xl text-gray-800 font-bold sm:text-2xl dark:text-white">
        Articles
      </h2>
      <Form />
    </div>
  );
};

export default DashboardPage;

function Form() {
  const [selectedAuthor, setSelectedAuthor] = useState("");

  return (
    <div className="mt-10">
      <form>
        <TextInput
          label="Title"
          type="text"
          placeholder="Title"
          id="title"
        />
        <AuthorDropdown
          label="Author"
          id="author"
          authors={authors}
          value={selectedAuthor}
          onChange={e => setSelectedAuthor(e.target.value)}
        />
        <TextArea
          label="Content"
          placeholder="Content"
          id="content"
        />
        <div className="mt-6 grid">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

type InputProps = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
};

function TextInput({ label, type = "text", id, placeholder, className }: InputProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={twMerge(
          "py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600",
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
}

type AuthorDropdownProps = {
  label: string;
  id: string;
  authors: { id: string; name: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

function AuthorDropdown({ label, id, authors, value, onChange, className }: AuthorDropdownProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={twMerge(
            "appearance-none py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600 pr-10",
            className
          )}
        >
          <option value="" disabled>
            Select an author
          </option>
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
      </div>
    </div>
  );
}

type TextAreaProps = {
  label: string;
  rows?: number;
  id: string;
  placeholder?: string;
  className?: string;
};

function TextArea({ label, rows = 3, id, placeholder, className }: TextAreaProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={rows}
          id={id}
          name={id}
          className={
            className ||
            "py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          }
          placeholder={placeholder}
          defaultValue={""}
        />
      </div>
    </div>
  );
}

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
};

function Button({ type = "button", children, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={
        className ||
        "w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      }
    >
      {children}
    </button>
  );
}
