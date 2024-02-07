import {
  useState,
  useRef,
  useEffect,
  Fragment,
  useCallback,
  ReactNode,
  SetStateAction,
  LegacyRef,
} from 'react'
import { getCodeString } from 'rehype-rewrite'
import mermaid from 'mermaid'
import { ElementContent } from 'hast'

const randomId = () => parseInt(String(Math.random() * 1e15), 10).toString(36)
const Code = ({
  children,
  className,
  node,
}: {
  children?: ReactNode
  className?: string
  node?: { children: ElementContent[] }
}) => {
  const demoId = useRef(`dome${randomId()}`)
  const [container, setContainer] = useState(null as unknown as HTMLElement)
  const isMermaid =
    className && /^language-mermaid/.test(className.toLocaleLowerCase())
  const code =
    node && node.children ? getCodeString(node.children) : children || ''

  useEffect(() => {
    if (container && isMermaid) {
      mermaid
        .render(demoId.current, code as string)
        .then(({ svg }) => {
          container.innerHTML = svg
        })
        .catch((error) => {
          container.innerHTML = error
        })
    }
  }, [container, isMermaid, code, demoId])

  const refElement = useCallback((node: SetStateAction<HTMLElement>) => {
    if (node !== null) {
      setContainer(node)
    }
  }, [])

  if (isMermaid) {
    return (
      <Fragment>
        <code id={demoId.current} style={{ display: 'none' }} />
        <code ref={refElement as LegacyRef<HTMLElement>} data-name="mermaid" />
      </Fragment>
    )
  }
  return <code>{children}</code>
}

export default Code
