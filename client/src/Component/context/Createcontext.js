import React, { createContext, useContext, useState } from "react";
export const Logindata = createContext();

const Createcontext = ({ children }) => {
  const [logindata, setlogindata] = useState("");
  return (
    <div>
      <Logindata.Provider value={{ logindata, setlogindata }}>
        {children}
      </Logindata.Provider>
    </div>
  );
};

// export const Globalcontext = () => {
//   return useContext(Logindata);
// };

export default Createcontext;
