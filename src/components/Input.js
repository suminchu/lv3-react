import React, { useState } from 'react'
import styled from 'styled-components';

const Input = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');

    const handlenamechange = (event) => {
        setName(event.target.value);
    }


    const handlepricechange = (event) => {
        let newPrice = event.target.value.replaceAll(',', '');
        newPrice = Number(newPrice);
        if (isNaN(newPrice)) {
            setPrice('0');
        } else {
            setPrice(newPrice.toLocaleString('ko-KR'));
        }
    }

    return (
        <>
            <h1>Input</h1>
            <InputSet>
                <label className="name">Name
                <InputBox
                    type="text"
                    name="name"
                    value={name}
                    onChange={handlenamechange}
                >
                </InputBox>
                </label>
                <label className="price">price
                <InputBox
                    type="text"
                    name="price"
                    value={price}
                    onChange={handlepricechange}
                >

                </InputBox>
                </label>
                <SaveButton onClick={() => alert(`name=${(name)}, price=${price}`)}>save</SaveButton>
            </InputSet>
        </>
    )
}

export default Input;

const InputSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

const SaveButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`;

const InputBox = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;


`;



