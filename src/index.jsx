import './index.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
        <StrictMode>
                <Experience />
        </StrictMode>
)