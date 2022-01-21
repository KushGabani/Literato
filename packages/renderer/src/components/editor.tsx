import React, { useCallback, useEffect } from "react"
import useCodeMirror from "/@/useCodeMirror"

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = props => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  return <div className="editor-wrapper" ref={refContainer} />
}

export default Editor
