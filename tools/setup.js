#!/usr/bin/env node

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync, mkdirSync, writeFile } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const daysDir = resolve(__dirname, '..', 'src', 'advent')

// fs helpers
const onErr = (err) => err && console.warn(err)
const touchDir = (dirName) => {
  const path = resolve(daysDir, dirName)
  if (existsSync(path)) return
  onErr(mkdirSync(path))
}
const touchFile = (dirName, fileName, content = '') => {
  const path = resolve(daysDir, dirName, fileName)
  if (existsSync(path)) return
  writeFile(path, content, onErr)
}

// setup logic
const setupFiles = () => {
  Array.from(Array(25), (_, i) => {
    const day = i + 1
    const dstr = day < 10 ? '0' + day : String(day)
    const dayDir = 'day' + dstr
    touchDir(dayDir)
    touchFile(dayDir, `solution.ts`)
    touchFile(dayDir, `input.md`, '')
    touchFile(dayDir, `input-test.md`, '')
  })
}

setupFiles()
