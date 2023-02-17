import { ReactGrid, Column, Row, Id } from '@silevis/reactgrid'
import '@silevis/reactgrid/styles.css'
import React from 'react'

interface Person {
  NO: string
  A: string
  B: string
  C: string
  D: string
  E: string
  F: string
}

const getPeople = (): Person[] => [
  { NO: '1', A: 'A1', B: 'B1', C: 'C1', D: 'D1', E: 'E1', F: 'F1' },
  { NO: '2', A: 'A2', B: 'B2', C: 'C2', D: 'D2', E: 'E2', F: 'F2' },
  { NO: '3', A: 'A3', B: 'B3', C: 'C3', D: 'D3', E: 'E3', F: 'F3' },
  { NO: '4', A: 'A4', B: 'B4', C: 'C4', D: 'D4', E: 'E4', F: 'F4' },
]

const getColumns = (): Column[] => [
  { columnId: '', width: 150, resizable: true },
  { columnId: 'A', width: 150, resizable: true },
  { columnId: 'B', width: 150, resizable: true },
  { columnId: 'C', width: 150, resizable: true },
  { columnId: 'D', width: 150, resizable: true },
  { columnId: 'E', width: 150, resizable: true },
  { columnId: 'F', width: 150, resizable: true },
]

const headerRow: Row = {
  rowId: 'header',
  cells: [
    { type: 'header', text: '' },
    { type: 'header', text: 'A' },
    { type: 'header', text: 'B' },
    { type: 'header', text: 'C' },
    { type: 'header', text: 'D' },
    { type: 'header', text: 'E' },
    { type: 'header', text: 'F' },
  ],
}

const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: 'text', text: person.NO },
      { type: 'text', text: person.A },
      { type: 'text', text: person.B },
      { type: 'text', text: person.C },
      { type: 'text', text: person.D },
      { type: 'text', text: person.E },
      { type: 'text', text: person.F },
    ],
  })),
]

const ReactGridPage = () => {
  const [people] = React.useState<Person[]>(getPeople())
  const [columns, setColumns] = React.useState<Column[]>(getColumns())

  const rows = getRows(people)

  const handleColumnResize = (ci: Id, width: number) => {
    setColumns((prevColumns) => {
      const columnIndex = prevColumns.findIndex((el) => el.columnId === ci)
      const resizedColumn = prevColumns[columnIndex]
      const updatedColumn = { ...resizedColumn, width }
      prevColumns[columnIndex] = updatedColumn
      return [...prevColumns]
    })
  }

  return <ReactGrid rows={rows} columns={columns} onColumnResized={handleColumnResize} />
}

export default ReactGridPage
