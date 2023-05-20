import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShowByCategory = () => {
  const [maf, setMaf] = useState([]);
  const [princess, setPrincess] = useState([]);
  const [haw, setHaw] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ULR}/category?category=mickey and friends`)
      .then((res) => res.json())
      .then((data) => setMaf(data.slice(0, 3)));
  }, []);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ULR}/category?category=disney princess`)
      .then((res) => res.json())
      .then((data) => setPrincess(data.slice(0, 3)));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ULR}/category?category=hundred acre wood`)
      .then((res) => res.json())
      .then((data) => setHaw(data.slice(0, 3)));
  }, []);


  return (
    <div className="mt-20">
      <h2 className="text-5xl font-semibold text-gray-600 text-center">
        Show By Category
      </h2>
      <hr className="mb-5" />
      <Tabs>
        <TabList className={"flex items-center justify-center"}>
          <Tab className={`text-gray-800 font-semibold text-lg m-1 border p-1`}>
            Mickey And Friends
          </Tab>
          <Tab className={`text-gray-800 font-semibold text-lg m-1 border p-1`}>
            Disney Princess
          </Tab>
          <Tab className={`text-gray-800 font-semibold text-lg m-1 border p-1`}>
            Hundred Acre Wood
          </Tab>
        </TabList>

        <TabPanel>
          {maf.map((data) => <h2 key={data._id} className="text-xl text-gray-600 flex justify-center items-center m-2">
            {data.toy}
          </h2>)}
          
        </TabPanel>
        <TabPanel>
        {princess.map((data) => <h2 key={data._id} className="text-xl text-gray-600 flex justify-center items-center m-2">
            {data.toy}
          </h2>)}
        </TabPanel>
        <TabPanel>
        {haw.map((data) => <h2 key={data._id} className="text-xl text-gray-600 flex justify-center items-center m-2">
            {data.toy}
          </h2>)}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShowByCategory;
