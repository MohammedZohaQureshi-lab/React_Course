import { useState } from 'react';
import CheckPicker from 'rsuite/CheckPicker';
import Button from 'rsuite/Button';
import './DropDown.scss'
import { useRef } from 'react';

const footerStyles = {
    padding: '10px 2px',
    borderTop: '1px solid #e5e5e5'
};

const footerButtonStyle = {
    float: 'right',
    marginRight: 10,
    marginTop: 2
};
const DropDown = ({ options = [], label, onFilterSelect, identifier, resetFieldVlaue }) => {
    const data = [...options];
    const [value, setValue] = useState('');
    const picker = useRef();

    const changeHandler = value => {
        setValue(value.toLocaleString());
    };


    return (
        <div className='dd_container'>
            <CheckPicker identifier={identifier} data={data} placeholder={label} searchable={false} onChange={changeHandler} style={{ width: 220 }}
                ref={picker} onClose={() => onFilterSelect(value, identifier)} onClean={() => resetFieldVlaue(identifier)}
                renderExtraFooter={() => (
                    <div style={footerStyles}>
                        <Button
                            style={footerButtonStyle}
                            appearance="primary"
                            size="sm"
                            onClick={() => {
                                picker.current.close();
                            }}
                        >
                            Ok
                        </Button>
                    </div>
                )}
            />
        </div>
    )
}

export default DropDown