// import { Text, Title, List, Card, Grid } from '@mantine/core';

// type MarkdownProps = {
//     markdown: string;
// }

// const mdParser = (str: string) => {
//     const lines = str.split('\n');
//     return lines.map((line, index) => {
//         if(line.startsWith("#")) {
//             const [hashtags, ...content] = line.split(' ');
//             return { type: 'heading', order: hashtags.length, content: content.join(' ') }
//         }
//         if(line.startsWith("-")) {
//             const [_, ...content] = line.split(' ');
//             return { type: 'list', content: content.join(' ') }
//         }

//         return { type: 'text', content: line }
//     })
// }

// export default function MarkdownRender({ markdown }: MarkdownProps) {



//   return (
//     <div>MarkdownRender</div>
//   )
// }
