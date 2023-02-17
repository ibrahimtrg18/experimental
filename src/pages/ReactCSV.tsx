import { CSVLink, CSVDownload } from 'react-csv'

const ReactCSVPage = () => {
  const csvData = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ]

  return <CSVDownload data={csvData} target='_blank' />
}

export default ReactCSVPage
