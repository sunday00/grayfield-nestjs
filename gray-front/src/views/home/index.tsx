import MDEditor from '@uiw/react-markdown-preview'
import Code from './Code.tsx'

const raw = `
## This is Title

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

---

- this is md editor
- Ohoh...

## this is sub

> How to include queto

<!-- c -->

- notification. this. \`is\` not!

## End. Conclusion.
<img src="http://192.168.0.126:3003/v1/file/60" alt="Nestjs logo" class="center" /> 

-  this is logo...
`

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <MDEditor
        source={raw}
        components={{
          code: Code,
        }}
      />
    </>
  )
}

export default Home
