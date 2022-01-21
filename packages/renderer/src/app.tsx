import "./components/shim"
import React, { useCallback, useState } from "react"
import "./app.css"
import Editor from "./components/editor"
import Preview from "./components/preview"

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>("# Hello World")

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className={"app-wrapper"}>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <div className={"separator"} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
