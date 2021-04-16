import {useContext, createContext} from 'react';

let Context = createContext(null)

function FireContext({children, value}) {
    return(
<Context.Provider value={value}>
    {children}
</Context.Provider>
    )
}

function useFirebase() {
    let useFire = useContext(Context);
    return useFire;
}

export {FireContext, useFirebase};