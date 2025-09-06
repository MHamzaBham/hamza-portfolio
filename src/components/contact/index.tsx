import "@fontsource/poppins";

export default function Contact() {
  return (
    <div
      id="contact"
      className="max-w-4xl mt-40 mx-auto p-2 sm:p-8 relative overflow-hidden rounded-2xl
        bg-gray-50/80 dark:bg-gray-950/[2.5%]
        after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10
        bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed
        [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
    >
      <Form />
    </div>
  );
}

function Form() {
  return (
    <div className="lg:mx-6">
      <div className="md:px-8 px-4 py-10 overflow-hidden rounded-2xl bg-white/80 dark:bg-black/50 shadow-lg dark:shadow-none">
        <h1 className="text-lg font-medium text-gray-900 dark:text-gray-200">
          Say hello 👋
        </h1>
        <form className="mt-6">
          <div className="flex-1">
            <label className="block font-[poppins] mb-2 text-sm text-gray-800 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="block w-full px-5 py-3 mt-2 placeholder-gray-400
                bg-white/60 dark:bg-white/10
                focus:bg-white dark:focus:bg-black/30
                transition-all duration-300
                border border-gray-300 dark:border-gray-700
                rounded-md text-gray-900 dark:text-gray-300
                focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-700 focus:ring-opacity-10"
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 placeholder-gray-400
                bg-white/60 dark:bg-white/10
                focus:bg-white dark:focus:bg-black/30
                transition-all duration-300
                border border-gray-300 dark:border-gray-700
                rounded-md text-gray-900 dark:text-gray-300
                focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-700 focus:ring-opacity-10"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              className="block w-full px-5 py-3 mt-2 placeholder-gray-400
                bg-white/60 dark:bg-white/10
                focus:bg-white dark:focus:bg-black/30
                transition-all duration-300
                border border-gray-300 dark:border-gray-700
                rounded-md text-gray-900 dark:text-gray-300
                focus:ring focus:ring-indigo-300 dark:focus:ring-indigo-700 focus:ring-opacity-10"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <button
            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide
              text-white capitalize transition-colors duration-300 transform
              bg-indigo-500 rounded-md hover:bg-indigo-600
              cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-800 focus:ring-opacity-50"
          >
            get in touch
          </button>
        </form>
      </div>
    </div>
  );
}
