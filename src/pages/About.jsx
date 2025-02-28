import React from "react";
import SectionContainer from "../components/sectionContainer";
import Markdown from "react-markdown";
import aboutme from '../blog/AboutMe.md'


const markdownContent = `
- [x] This is a complete task
- [ ] This is an incomplete task

~~Strikethrough text~~

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
`;
const About = () => {
  return (
    <SectionContainer>
    <Markdown>
      ## this is a title
      this is *italic* and this is bold **bold**
    </Markdown>
    </SectionContainer>
  );
};

export default About;
