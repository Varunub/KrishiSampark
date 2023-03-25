import React, { useEffect } from "react";
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom";
import { MainContainer } from "./components";
import {CreateContainer} from "./components";
import {AnimatePresence, frameData} from "framer-motion";
import { useStateValue } from "./components/context/StateProvider";
import { getAllItems } from "./utils/firebaseFunction";
import { actionType } from "./components/context/reducer";
function App() {
  const [{},dispatch]=useStateValue();

  const fetchData=async()=>{
    await getAllItems().then(data=>{
      dispatch({
        type:actionType.SET_ITEMS,
        items:data
      })
    })
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary"> <Header></Header>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
       <Routes>
        <Route path="/*" element={<MainContainer></MainContainer>}></Route>
        <Route path="/createItem" element={<CreateContainer></CreateContainer>}></Route>
       </Routes>
      </main>
    </div>
    </AnimatePresence>
    
  );
}

export default App;
