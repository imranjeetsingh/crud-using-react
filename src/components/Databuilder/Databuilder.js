import React, {useState} from 'react';

import Data from '../Data/Data';
import Layout from '../Layout/Layout';

const DataBuilder = () =>{
    const dummyData = [
        {
            id:1,ftype:'lorem ipsum',title:'lorem ipsum',description:'lorem ipsum',createdon:new Date().toString(),isactive:true,
        }
    ]
    console.log(dummyData[0].createdon)
    const [data, setData] = useState(dummyData);
    return(
        <Data data={data} />
    )
}

export default DataBuilder;