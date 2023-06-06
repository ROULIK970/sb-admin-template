import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [navLinkDropdown, setNavLinkDropdown] = useState(false);
  const [sideNavToggle, setSideNavToggle] = useState(true);
  const [layout, setLayout] = useState(true);
  const [page, setPage] = useState(true);
  const [auth, setAuth] = useState(true);
  const [err, setErr] = useState(true);
  const [sideNav, setSideNav] = useState(true);

   return (
     <ThemeContext.Provider
       value={{
         navLinkDropdown,
         setNavLinkDropdown,
         sideNavToggle,
         setSideNavToggle,
         layout,
         setLayout,
         page,
         setPage,
         auth,
         setAuth,
         err,
         setErr,
         sideNav,
         setSideNav,
       }}
     >
       {children}
     </ThemeContext.Provider>
   );
};

export { ThemeProvider, ThemeContext };
