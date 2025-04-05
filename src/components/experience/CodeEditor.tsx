"use client"

import React, { useState } from "react";
import TabBar, { CodeBlock, Panel } from "./Tabs";
import { cssCode, experiencecode, listcode, terminalOutput } from "./Codes";

export default function CodeEditor() {
  const [selectedTab, setSelectedTab] = useState("experience.ts");
  return (
    <div className="@container max-w-4xl mx-auto rounded-xl bg-gray-950 in-[figure]:-mx-1 in-[figure]:-mb-1">
      <div className="rounded-xl p-1 text-sm scheme-dark bg-white/5 inset-ring inset-ring-white/10">
        <div className="group" data-finished="true"></div>
        <div className="flex w-fit gap-2 p-1 pb-2">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className="inline-flex size-3 items-center justify-center rounded-full bg-white/20"
              />
            ))}
        </div>
        <div className="flex w-full flex-col gap-1 lg:h-132.5 lg:flex-row">
          <div className="flex flex-col gap-1 lg:w-1/2 xl:w-5/8">
            <Panel
              label="React editor"
              className="min-h-0 flex-1 max-lg:max-h-76"
            >
              <TabBar
              tabs={["experience.ts", "list.tsx"]}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              />
              {selectedTab === "experience.ts" && <CodeBlock code={experiencecode} />}
              {selectedTab === "list.tsx" && <CodeBlock code={listcode} />}
            </Panel>
            <Panel label="Terminal" className="h-32 shrink-0 lg:h-46">
              <TabBar tabs={["Terminal"]} selectedTab="Terminal" setSelectedTab={setSelectedTab} />
              <CodeBlock code={terminalOutput} />
            </Panel>
          </div>
          <div className="flex h-66 flex-col gap-2.5 lg:h-auto lg:w-1/2 xl:w-3/8">
            <Panel label="Built CSS" className="h-full">
              <TabBar tabs={["build.css"]} selectedTab="build.css" />
              <CodeBlock code={cssCode} />
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}



