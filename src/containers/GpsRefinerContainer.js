import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import CSVFileLoader from '../components/CSVFileLoader'
import { setFiles, setConfig, load } from '../modules/CsvFileLoader';

const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'merchant', text: 'Merchant' },
    { dataField: 'store', text: 'Store' },
    { dataField: 'address', text: 'Address' },
    { dataField: 'latitude', text: 'Latitude', csvType: Number },
    { dataField: 'longitude', text: 'Longitude', csvType: Number },
    { dataField: '_tools', text: 'Tools', csvExport: false }
];

const cellEdit = cellEditFactory({
    mode: 'click',
    blurToSave: true
});

const ExportButton = ({ onExport }) => {
    const onClick = () => {
        onExport();
    };
    return (
        <div style={{ textAlign: "right" }}>
            <button className="btn btn-success" onClick={onClick}>Export to CSV</button>
        </div>
    );
};

const GpsRefinerContainer = () => {
    const { datas } = useSelector(state => state.dataLoader, []);
    const { files, config } = useSelector(state => state.csvFileLoader, []);
    
    const dispatch = useDispatch();
    
    const onChangeFiles = useCallback((files) => { 
        dispatch(setFiles(files)); 
    }, [dispatch]);

    const onChangeConfig = useCallback((update) => { 
        dispatch(setConfig(update)); 
    }, [dispatch]);

    const onFileLoad = useCallback(() => {
        dispatch(load(columns));
    }, [dispatch]);

    return (
        <div>
            <h1>GPS Refiner</h1>
            <CSVFileLoader 
                files={files} 
                config={config}
                onChangeFiles={onChangeFiles}
                onChangeConfig={onChangeConfig} 
                onFileLoad={onFileLoad}
            />
            <ToolkitProvider 
                keyField="id"
                data={datas} 
                columns={columns} 
                bootstrap4={true}
            >
                {
                    props => (
                        <div>
                            <ExportButton { ...props.csvProps }>Export CSV!!</ExportButton>
                            <BootstrapTable { ...props.baseProps } cellEdit={cellEdit} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    );
};

export default GpsRefinerContainer;
