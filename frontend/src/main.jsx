import { createRoot } from 'react-dom/client'
import React from 'react'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import New from './components/New'
import Member from './components/Member'
import './index.css'

import App from './App'
import DataTableCustom from './components/DataTableCustom'
import Members from './components/Members'

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<DataTableCustom />} />
                    <Route path="new" element={<New />} />
                    <Route path="members" element={<Members />}>
                        <Route index element={<DataTableCustom />} />
                        <Route path=":memberId" element={<Member />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
