import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import DataTable from '../components/DataTable';

import './GpsRefinerTable.css'

const isRequired = (className = 'error') => {
    return cell => { if (!cell) return className; };
};

const numericValidator = (newValue) => {
    if (!newValue) return { valid: false, message: 'Tis should be numeric' };
    if (newValue && isNaN(Number(newValue))) {
        return {
            valid: false,
            message: 'This should be numeric'
        };
    }
    return true;
};

const columns = [{ 
        dataField: 'id', 
        text: 'ID', 
        sort: true,
        headerStyle: { width: '10%' }
    }, { 
        dataField: 'merchant', 
        text: 'Merchant', 
        sort: true,
        headerStyle: { width: '18%' },
        classes: isRequired()
    }, { 
        dataField: 'store', 
        text: 'Store', 
        sort: true,
        headerStyle: { width: '12%' },
        classes: isRequired('warning')
    }, { 
        dataField: 'address', 
        text: 'Address', 
        sort: true,
        editor: { type: 'textarea' },
        classes: isRequired()
    }, { 
        dataField: 'latitude', 
        text: 'Latitude', 
        sort: true, 
        headerStyle: { width: '10%' },
        validator: numericValidator,
        classes: isRequired()
    }, { 
        dataField: 'longitude', 
        text: 'Longitude', 
        sort: true,
        headerStyle: { width: '10%' },
        validator: numericValidator,
        classes: isRequired()
    }, {
        dataField: 'status', 
        isDummyField: true,
        text: '', 
        headerStyle: { width: '30px' },
        formatter: () => '',
        classes: (cell, row) => {
            if (!row.latitude || !row.longitude) return 'error';
        }
    }
];

const GpsRefinerTableExpand = (row) => {
    return (
        <div className="GpsRefinerTableExpand">
            {JSON.stringify(row)}
        </div>
    );
};

const GpsRefinerTable = ({ datas }) => {
    return (
        <div className="GpsRefinerTable">
            <DataTable 
                keyField="id"
                datas={datas} 
                columns={columns} 
                expandRowRenderer={GpsRefinerTableExpand}
            />
        </div>
    );
};

export default GpsRefinerTable;
