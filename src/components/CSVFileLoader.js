import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './CSVFileLoader.css';

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const propTypes = {
    onFileLoad: PropTypes.func,
};

const defaultProps = {
    onFileLoad: createWarning('onFileLoad')
};

const CheckBoxConfig = React.memo(({ label, checked, onChangeConfig }) => {
    const onChange = useCallback((e) => {
        let value = e.target.checked;
        let update = {};
        update[label] = value;
        onChangeConfig(update);
    }, [onChangeConfig, label]);

    return (
        <Form.Check 
            label={label}
            type="checkbox" 
            checked={checked ? true : false} 
            onChange={onChange} 
        />
    );
});

const CSVFileLoader = ({ files, config, onChangeFiles, onChangeConfig, onFileLoad }) => {
    const onChangeInputFiles = useCallback((e) => {
        onChangeFiles(e.target.files);
    }, [onChangeFiles]);

    return (
        <div className="CSVFileLoader">
            <Form className="border">
                <Form.Group as={Row}>
                    <Form.Label column sm={1}>
                        CSV File
                    </Form.Label>
                    <Col sm={11}>
                        <input type="file" accept=".csv" onChange={onChangeInputFiles} multiple />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={1}>
                        Options
                    </Form.Label>
                    <Col sm={11}>
                        <CheckBoxConfig label="header" checked={config.header} onChangeConfig={onChangeConfig} />
                        <CheckBoxConfig label="dynamicTyping" checked={config.dynamicTyping} onChangeConfig={onChangeConfig} />
                        <CheckBoxConfig label="skipEmptyLines" checked={config.skipEmptyLines} onChangeConfig={onChangeConfig} />
                    </Col>
                </Form.Group>
                <Row>
                    <Col sm={{ span: 11, offset: 1 }}>
                        <Button variant="primary" onClick={onFileLoad}>Load</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

CSVFileLoader.propTypes = propTypes;
CSVFileLoader.defaultProps = defaultProps;

export default CSVFileLoader;
