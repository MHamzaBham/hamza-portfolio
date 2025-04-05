const TabBar = ({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: string[];
  selectedTab: string;
  setSelectedTab?: (tab: string) => void;
}) => (
  <div
    className="sticky top-0 left-0 z-10 mb-px flex items-center gap-2 border-b border-b-white/5 bg-white/2.5 bg-clip-padding p-1 text-white backdrop-blur-lg"
    role="presentation"
    aria-label="Tab Bar"
  >
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setSelectedTab && setSelectedTab(tab)}
        className={`isolate cursor-pointer rounded-sm px-2 py-1 text-xs/5 text-white inset-ring-white/5 hover:bg-white/10 ${
          selectedTab === tab
            ? "aria-selected:bg-white/10 aria-selected:inset-ring"
            : ""
        }`
    }
        role="presentation"
        aria-selected={selectedTab === tab}
      >
        {tab}
      </button>
    ))}
  </div>
);

export const CodeBlock = ({ code }: { code: string }) => (
  <pre
    className="shiki tailwindcss-theme"
    style={{
      backgroundColor: "transparent",
      color: "var(--color-slate-50)",
    }}
    tabIndex={0}
  >
    <code dangerouslySetInnerHTML={{ __html: code }} />
  </pre>
);

export const Panel = ({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    aria-label={`panel, ${label}, animated`}
    className={`isolate flex flex-col overflow-auto rounded-lg bg-white/5 dark:bg-white/5 inset-ring inset-ring-white/5 ${className}`}
    data-scroll-anchor="true"
  >
    {children}
  </div>
);

export default TabBar