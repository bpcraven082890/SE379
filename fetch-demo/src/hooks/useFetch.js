import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
   
     useEffect(() => {
       const getData = async () => {
         try {
           const response = await axios.get(`${baseUrl}${endpoint}`);
           setData(response.data);
         } catch (error) {
           console.log('An error occurred:', error);
         }
       };
   
       getData();
     }, [endpoint]);

     return {data};
   }

   export default useFetch;