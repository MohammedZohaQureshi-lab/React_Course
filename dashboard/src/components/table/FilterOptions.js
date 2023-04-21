import React from 'react'

import { useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter'


// Define a default UI for filtering
export const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter, }) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input value={value || ""} placeholder={`${count} records...`} style={{ fontSize: '1.1rem', border: '0', }}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }} />
        </span>
    )
}

// Define a default UI for filtering
export const DefaultColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    const count = preFilteredRows.length
    return (
        <input value={filterValue || ''} placeholder={`Search ${count} records...`}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }} />
    )
}

// This is a custom filter UI for selecting
export const SelectColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }) => {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => { options.add(row.values[id]) })
        return [...options.values()]
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select value={filterValue} onChange={e => { setFilter(e.target.value || undefined) }}    >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

// This is a custom filter UI that uses a

export const SliderColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }) => {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <>
            <input type="range" min={min} max={max} value={filterValue || min} onChange={(e) => setFilter(parseInt(e.target.value, 10))} />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    )
}

// This is a custom UI for our 'between' or number range
export const NumberRangeColumnFilter = ({ column: { filterValue = [], preFilteredRows, setFilter, id } }) => {
    const [min, max] = React.useMemo(() => {
        debugger;
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <div style={{ display: 'flex' }}    >
            <input value={filterValue[0] || ''} type="number" placeholder={`Min (${min})`} style={{ width: '70px', marginRight: '0.5rem' }}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
                }}
            />
            to
            <input value={filterValue[1] || ''} type="number" placeholder={`Max (${max})`} style={{ width: '70px', marginLeft: '0.5rem' }}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
                }} />
        </div>
    )
}

export const fuzzyTextFilterFn = (rows, id, filterValue) => {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
//fuzzyTextFilterFn.autoRemove = val => !val



// Define a custom filter filter function!
export const filterGreaterThan = (rows, id, filterValue) => {
    return rows.filter(row => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
    })
}

//filterGreaterThan.autoRemove = val => typeof val !== 'number'