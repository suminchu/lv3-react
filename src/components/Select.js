import React, {useState} from 'react'
import styled from 'styled-components';


function Select() {
    const options = [
        { value: 'default', label: '카테고리 선택' },
        { value: 'React', label: 'React' },
        { value: 'Java', label: 'Java' },
        { value: 'Spring', label: 'Spring' },
        { value: 'React Native', label: 'React Native' },
    ];


    const selectoptions = [
        { value: 'default', label: '카테고리 선택' },
        { value: 'React', label: 'React' },
        { value: 'Java', label: 'Java' },
        { value: 'Spring', label: 'Spring' },
        { value: 'React Native', label: 'React Native' },
    ];

    const [selected, setSelected] = useState('카테고리 선택');
    const [secondselected, setsecondSelected] = useState('카테고리 선택')

    const onChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    const onChangeSelected = (e) => {
        setsecondSelected(e.target.value);
    };

    return (
        <>
            <SelectBox>
                <h1>Select</h1>
                <SelectSet>
                <FirstSelect
                    value={selected}
                    onChange={onChangeSelect}>
                    {options.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.label}
                        </option>
                    ))}
                </FirstSelect>

                <SecondSelect
                    value={secondselected}
                    onChange={onChangeSelected}>
                    {selectoptions.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.label}
                        </option>
                    ))}

                </SecondSelect>
                </SelectSet>
            </SelectBox>
        </>
    );
}

export default Select;

const SelectBox = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
`;

const SelectSet = styled.div`
    display: flex;
    gap: 20px;
`;

const FirstSelect = styled.select`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;

    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
`;

const SecondSelect = styled.select`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;

    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;

    overflow: hidden;

`;