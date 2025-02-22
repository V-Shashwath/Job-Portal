import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    { filterType: "Location", array: ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Gurgaon", "Chennai"] },
    { filterType: "Domain", array: ["Cloud", "Software", "Data", "Cybersecurity"] },
];

const FilterCard = ({ salaryRanges }) => {
    const [selectedValue, setSelectedValue] = useState(""); 
    const [selectedSalaryRange, setSelectedSalaryRange] = useState(""); 
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);  
        setSelectedSalaryRange('');  
    };

    const salaryChangeHandler = (value) => {
        setSelectedSalaryRange(value);  
        setSelectedValue('');  
    };

    useEffect(() => {
        if (selectedSalaryRange) {
            dispatch(setSearchedQuery(selectedSalaryRange)); 
        } else {
            dispatch(setSearchedQuery(selectedValue)); 
        }
    }, [selectedValue, selectedSalaryRange, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />

            {/* Location and Domain filters */}
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>

            {/* Salary filter */}
            <RadioGroup value={selectedSalaryRange} onValueChange={salaryChangeHandler}>
                <h1 className='font-bold text-lg mt-3'>Salary</h1>
                {Object.keys(salaryRanges).map((range, idx) => (
                    <div key={idx} className='flex items-center space-x-2 my-1'>
                        <RadioGroupItem
                            value={range}
                            id={`salary-${range}`}
                        />
                        <Label htmlFor={`salary-${range}`}>{range}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
