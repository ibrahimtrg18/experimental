import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import ReactSpreadsheetPage from './ReactSpreadsheet'
import ReactCSVPage from './ReactCSV'
import ReactGridPage from './ReactGrid'

export const router = createBrowserRouter([
  {
    path: '/react-spreadsheet',
    element: <ReactSpreadsheetPage />,
  },
  {
    path: '/react-csv',
    element: <ReactCSVPage />,
  },
  {
    path: '/react-grid',
    element: <ReactGridPage />,
  },
  {
    errorElement: <ErrorPage />,
  },
])
