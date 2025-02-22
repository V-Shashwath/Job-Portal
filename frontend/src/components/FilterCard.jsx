import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Gurgaon", "Chennai"]
    },
    {
        filterType: "Domain",
        array: ["Cloud", "Software", "Data", "Cybersecurity"]
    },
    {
        filterType: "Salary",
        array: ["1-5LPA", "6-10LPA", "11-15LPA", "16-24LPA", "25LPA+"]
    }
];

const FilterCard = ({ setSelectedSalary }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const dispatch = useDispatch();
    
    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} onChange={() => {
                                        if (data.filterType === "Salary") {
                                            setSelectedSalary(item);  // Passing selected salary to parent
                                        }
                                    }} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;

