import React from 'react';
import { useSelector } from 'react-redux';

import GpsRefinerTable from '../components/GpsRefinerTable';

const GpsRefinerContainer = () => {
    const { datas } = useSelector(state => state.dataLoader, []);

    return (
        <div>
            <h1>GPS Refiner</h1>
            <GpsRefinerTable datas={datas} />
        </div>
    );
};

export default GpsRefinerContainer;
