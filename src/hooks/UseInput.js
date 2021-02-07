import React, { useState } from "react"

function useInput({ type, placeholder }) {
  const [value, setValue] = useState("")
  const input = (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  )
  return [value, setValue, input]
}
export default useInput
