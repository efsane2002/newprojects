import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({children})=>{
    const[site,setSites] = useState([]);

    return(
        <SiteContext.Provider value={[site,setSites]}>
            {children}
        </SiteContext.Provider>
    )
}

export const useSiteContext = ()=> useContext(SiteContext)