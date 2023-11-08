import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const Jobs = () => {
  const [categories, setCategories] = useState("Web Development");
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`https://career-canvas-server.vercel.app/jobs/${categories}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => setJobs(data))}, [categories])
    const displayJobs = jobs.map(job => <JobCard key={job._id} job={job}></JobCard>);
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl my-6 font-extrabold text-green-800'>Job Categories</h1>
              <Tabs className="mx-auto my-auto">
    <TabList className="md:text-2xl font-semibold italic bg-slate-100 md:w-[650px] w-[250px] md:h-16 mx-auto">
      <Tab onClick={() =>setCategories("Web Development")}>Web Development</Tab>
      <Tab onClick={() =>setCategories("Digital Marketing")}>Digital Marketing</Tab>
      <Tab  onClick={() =>setCategories("Graphic Design")}>Graphic Design</Tab>
    </TabList>

    <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
     {displayJobs}
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
     {displayJobs}
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-5'>
     {displayJobs}
     </div>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Jobs;