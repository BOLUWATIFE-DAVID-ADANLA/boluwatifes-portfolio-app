export const MDXComponent = {
  h1: ({ children }) => <h1 className="text-5xl md:text-7xl max-w-[850px] leading-[1.2] font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-4xl leading-[1.2] font-bold mt-6">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-6 text-lg font-bold">{children}</h3>,
  p: ({ children }) => <p className="my-4 text-xl leading-relaxed">{children}</p>,
  a: ({ children, href }) => (
    <a href={href} className="text-xl text-blue-600 underline underline-offset-[3px] hover:text-blue-800">
      {children}
    </a>
  ),
  li: ({ children }) => <li className="text-xl leading-relaxed">{children}</li>,
  ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  // pre: ({ children }) => (
  //   <pre className="overflow-auto rounded-lg p-4 bg-gray-900 text-white">
  //     <code>{children}</code>
  //   </pre>
  // ),
  // code: ({ children }) => <code className="rounded bg-gray-200 px-2 py-1">{children}</code>,
  hr: () => <hr className="mt-10 border-neutral-300 border-2" />,
};
