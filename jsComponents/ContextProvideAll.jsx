import React from 'react';

const ContextsProviderAll = ({contexts, children})=>{
    if (contexts.length===0) 
        return (
            <React.Fragment>
            {children}
            </React.Fragment>
        )
    else
    {
        const CurContext = contexts[0][0];
        const curValue = contexts[0][1];
        return(
            <CurContext.Provider value={curValue}>
                <ContextsProviderAll contexts={contexts.slice(1)}>
                    {children}
                </ContextsProviderAll>
            </CurContext.Provider>
        )
    }
        
}
export default ContextsProviderAll;