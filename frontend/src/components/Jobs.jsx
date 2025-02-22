import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import FilterCard from './FilterCard';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    const salaryRanges = {
        "1-5LPA": [1, 5],
        "6-10LPA": [6, 10],
        "11-15LPA": [11, 15],
        "16-24LPA": [16, 24],
        "25LPA+": [25, Infinity]
    };

    useEffect(() => {
        let filteredJobs = allJobs;

        if (searchedQuery && salaryRanges[searchedQuery]) {
            filteredJobs = filteredJobs.filter((job) => {
                const [minSalary, maxSalary] = salaryRanges[searchedQuery];
                return job.salary >= minSalary && job.salary <= maxSalary;
            });
        }

        if (!searchedQuery || !salaryRanges[searchedQuery]) {
            filteredJobs = allJobs.filter((job) => {
                return (
                    (job.title && job.title.toLowerCase().includes(searchedQuery.toLowerCase())) ||
                    (job.description && job.description.toLowerCase().includes(searchedQuery.toLowerCase())) ||
                    (job.location && job.location.toLowerCase().includes(searchedQuery.toLowerCase())) ||
                    (job.domain && job.domain.toLowerCase().includes(searchedQuery.toLowerCase()))
                );
            });
        }

        setFilterJobs(filteredJobs);
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard salaryRanges={salaryRanges} />
                    </div>
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        {filterJobs.length <= 0 ? (
                            <span>Job not found</span>
                        ) : (
                            <div className='grid grid-cols-3 gap-4'>
                                {filterJobs.map((job) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={job._id}
                                    >
                                        <Job job={job} />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
