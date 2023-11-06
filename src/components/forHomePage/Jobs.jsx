import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Jobs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl my-6 font-extrabold text-green-800'>Job Categories</h1>
              <Tabs className="mx-auto my-auto">
    <TabList className="md:text-2xl font-semibold italic bg-slate-100 md:w-[650px] w-[250px] md:h-16 mx-auto">
      <Tab >Web Development</Tab>
      <Tab >Digital Marketing</Tab>
      <Tab >Graphic Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
        Hello
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Jobs;