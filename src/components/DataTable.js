import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { multiSelectFilter } from 'react-bootstrap-table2-filter';

import './DataTable.css'


const DataTable = ({ keyField, columns, datas, expandRowRenderer }) => {
    return (
        <div className="DataTable">
            <BootstrapTable 
                keyField={keyField}
                columns={columns} 
                data={datas} 
                bootstrap4={true}
                cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
                selectRow={{ 
                    mode: 'checkbox', 
                    headerColumnStyle: (status) => {
                        let defaultStyle = { textAlign: 'center' };
                        if (status === 'checked') defaultStyle.backgroundColor = '#00ff0080';
                        else if (status === 'indeterminate') defaultStyle.backgroundColor = '#ffff0080';
                        return defaultStyle;
                    },
                    selectColumnStyle: ({ checked }) => {
                        let defaultStyle = { textAlign: 'center' };
                        if (checked) defaultStyle.backgroundColor = '#00ff0080'
                        return defaultStyle;
                    }
                }}
                expandRow={{
                    renderer: expandRowRenderer,
                    showExpandColumn: true,
                    expandByColumnOnly: true
                }}
                noDataIndication="Table is Empty"
                condensed 
                striped 
                hover
            />
        </div>
    );
};

export default DataTable;
