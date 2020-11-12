import React from "react";
import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/prism-light";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import html from "react-syntax-highlighter/languages/prism/markup";
import bash from "react-syntax-highlighter/languages/prism/bash";
import scss from "react-syntax-highlighter/languages/prism/scss";
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow";
registerLanguage("js", jsx);
registerLanguage("jsx", jsx);
registerLanguage("html", html);
registerLanguage("bash", bash);
registerLanguage("scss", scss);
type CodeBlockProps = {
  value: string,
  language?: string,
  inline?: boolean
};
const CodeBlock: React.SFC<CodeBlockProps> = props => (
  <SyntaxHighlighter
    language={props.language || "js"}
    style={tomorrow}
    customStyle={{
      maxHeight: "300px"
    }}
  >
    {props.value}
  </SyntaxHighlighter>
);
CodeBlock.displayName = "codeBlock";
CodeBlock.defaultProps = {
  language: "js",
  inline: false
};
export default CodeBlock;
