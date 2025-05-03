import React, {  useState } from 'react';
import { LoaderContext } from '../../Context/Context';

const LoaderProvider = ({children}) => {
    const [isLoading , setIsLoading] = useState(true);
   const Loading = {
    isLoading,
    setIsLoading
   }
    return (
        <LoaderContext value ={Loading}>
            {children}
        </LoaderContext>
    );
};

export default LoaderProvider;