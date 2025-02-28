import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { MDXComponent } from "./MdxComponent";

const MdxContainerWrapper = ({ children }) => {
  return (
    <MDXProvider
      components={{
        // Map `h1` (`# heading`) to use `h2`s.
        h1: "h2",
        // Rewrite `em`s (`*like so*`) to `i` with a goldenrod foreground color.
        em(props) {
          return <i style={{ color: "goldenrod" }} {...props} />;
        },
        // Pass a layout (using the special `'wrapper'` key).
        wrapper({ components, ...rest }) {
          return <main {...rest} />;
        },
        // Pass a component.
        Planet() {
          return "Neptune";
        },
        // This nested component can be used as `<theme.text>hi</theme.text>`
        theme: {
          text(props) {
            return <span style={{ color: "grey" }} {...props} />;
          },
        },
      }}>
      {children}
    </MDXProvider>
  );
};

export default MdxContainerWrapper;
