import React, { useState, useRef, useEffect } from 'react'
import css from './portfolio.module.css'

interface Line {
  id: number
  command: string
  info: string
}

interface Props {}

const commands: Record<string, string> = {
  help: 'help you?',
}

const Portfolio = ({}: Props) => {
  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <div className={css.portfolio}>
      <div
        className={css.terminal}
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        <div className={css.terminalBar}>
          <span className={`${css.dot} ${css.red}`} />
          <span className={`${css.dot} ${css.yellow}`} />
          <span className={`${css.dot} ${css.green}`} />
        </div>
        <div className={css.terminalWindow} ref={outputRef}>
          <div className={css.terminalLine}>
            Welcome! Type <span className={css.code}>help</span> for list of
            support commands.
          </div>
          {lines.map(line => (
            <React.Fragment key={line.id}>
              <div className={css.terminalLine}>
                <span className={css.success}>➜</span>
                <span className={css.directory}>~</span>
                <span>{line.command}</span>
              </div>
              <div className={css.terminalLine}>
                {line.info !== 'Not Found' && <span>{line.info}</span>}
                {line.info === 'Not Found' && (
                  <span>
                    Type <span className={css.code}>help</span> !!!
                  </span>
                )}
              </div>
            </React.Fragment>
          ))}
          <div className={css.terminalLine}>
            <span className={css.success}>➜</span>
            <span className={css.directory}>~</span>
            <span className={css.userInput}>{value}</span>
            <input
              ref={inputRef}
              type="text"
              className={css.input}
              autoComplete="off"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => {
                if (e.key == 'Enter') {
                  if (commands[value]) {
                    setLines([
                      ...lines,
                      { id: Date.now(), command: value, info: commands[value] },
                    ])
                    setValue('')
                  } else {
                    setLines([
                      ...lines,
                      {
                        id: Date.now(),
                        command: value,
                        info: 'Not Found',
                      },
                    ])
                    setValue('')
                  }
                  requestAnimationFrame(() => {
                    if (outputRef.current) {
                      outputRef.current.scrollTop =
                        outputRef.current.scrollHeight
                    }
                  })
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
