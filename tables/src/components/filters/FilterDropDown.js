import { useState } from 'react';
import DropDown from '../dropdown/DropDown';
import filterParams from '../../filter.json'

const FilterDropDown = () => {
    const [filterQuery, setFilterQuery] = useState({
        circle: '',
        ipdr: '',
        summary: '',
        dateRange: ''
    });
    let circleFilter = [], ipdrFormatFilter = [], inputParametersFilter = [];
    const filterArray = [...filterParams];

    const removeDuplicate = (arrayParams) => {
        return arrayParams.filter((val, index, self) =>
            index === self.findIndex((t) => (
                t.label === val.label && t.value === val.value
            ))
        )
    }

    filterArray.forEach(item => {
        Object.keys(item).forEach(id => {
            if (id === "CIRCLE") { circleFilter.push({ label: item["CIRCLE_NAME"], value: item[id] }) }
            if (id === "IPDR_FORMAT") { ipdrFormatFilter.push({ label: item[id], value: item[id] }) }
            if (id === "INPUT_PARAMETER") { inputParametersFilter.push({ label: item[id], value: item[id] }) }
        })
    })
    circleFilter = removeDuplicate(circleFilter);
    ipdrFormatFilter = removeDuplicate(ipdrFormatFilter);
    inputParametersFilter = removeDuplicate(inputParametersFilter);


    let params = '';
    Object.keys(filterQuery).forEach((item, i) => {
        if (filterQuery[item] !== "") params += `${item}=${filterQuery[item]}&`;
    })
    console.log(params.substring(0, params.length - 1))

    //Query Creator with filter


    //Drop Down filter
    const filterHandler = (value, name) => {
        const filterObj = { ...filterQuery }
        filterObj[name] = value;
        setFilterQuery(filterObj);
        //Pass Filter Query Params        
    }
    const resetField = (identifier) => filterHandler("", identifier);
    return (
        <>
            <DropDown identifier='CIRCLE' options={circleFilter} label='Circle' onFilterSelect={filterHandler} resetFieldVlaue={resetField} />
            <DropDown identifier='IPDR_FORMAT' options={ipdrFormatFilter} label='IPDR Format' onFilterSelect={filterHandler} resetFieldVlaue={resetField} />
            <DropDown identifier='INPUT_PARAMETER' options={inputParametersFilter} label='Input Parameters' onFilterSelect={filterHandler} resetFieldVlaue={resetField} />
        </>
    )
}

export default FilterDropDown