import React, { useState, useRef, useEffect } from 'react'
import css from './portfolio.module.css'

interface Props {}

const Portfolio = ({}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <div className={css.portfolio}>
      <div className={css.terminal}>
        <div className={css.terminalBar}></div>
        <div className={css.terminalWindow}>
          <div className={css.terminalLine}>
            Welcome! Type <span className={css.code}>help</span> for list of
            support commands.
          </div>
          <div className={css.terminalLine}>
            <span className={css.success}>➜</span>
            <span className={css.directory}>~</span>
            <span className={css.userInput}>{value}</span>
            <input
              ref={inputRef}
              type="text"
              className={css.input}
              autoComplete="off"
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
