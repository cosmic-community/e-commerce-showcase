import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distDir = join(__dirname, '..', 'dist')

function injectScript(htmlPath) {
  try {
    let html = readFileSync(htmlPath, 'utf-8')
    
    // Check if script is already injected
    if (html.includes('dashboard-console-capture.js')) {
      return
    }
    
    // Inject script before </head>
    const scriptTag = '<script src="/dashboard-console-capture.js"></script>'
    html = html.replace('</head>', `  ${scriptTag}\n  </head>`)
    
    writeFileSync(htmlPath, html, 'utf-8')
    console.log(`Injected console capture script into: ${htmlPath}`)
  } catch (error) {
    console.error(`Error injecting script into ${htmlPath}:`, error)
  }
}

function processDirectory(dir) {
  try {
    const files = readdirSync(dir)
    
    files.forEach(file => {
      const filePath = join(dir, file)
      const stat = statSync(filePath)
      
      if (stat.isDirectory()) {
        processDirectory(filePath)
      } else if (file.endsWith('.html')) {
        injectScript(filePath)
      }
    })
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error)
  }
}

console.log('Starting console capture script injection...')
processDirectory(distDir)
console.log('Console capture script injection complete!')