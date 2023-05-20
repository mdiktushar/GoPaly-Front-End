import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShowByCategory = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-semibold text-gray-600 text-center">
        Show By Category
      </h2>
      <hr className="mb-5" />
      <Tabs>
        <TabList className={"flex items-center justify-center"}>
          <Tab className={`text-gray-800 font-semibold text-2xl m-2 border p-3`}>Mickey And Friends</Tab>
          <Tab className={`text-gray-800 font-semibold text-2xl m-2 border p-3`}>Disney Princess</Tab>
          <Tab className={`text-gray-800 font-semibold text-2xl m-2 border p-3`}>Hundred Acre Wood</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Mickey Mouse</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Minnie Mouse</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Donal Duck</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Daisy Duck</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Pluto</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Goofy</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Chip'n'Dale</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Clarabelle</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Tiana</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Jasmine</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Briar Rose</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Cinderella</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Snow White</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Raya</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Belle</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Christopher Robin</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Winnie the Pooh</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Piglet</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Rabbit</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Eeyore</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Owl</h2>
          <h2 className="text-xl text-gray-600 flex justify-center items-center m-2" >Tigger</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShowByCategory;
