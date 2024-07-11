import React from 'react'
import styled from 'styled-components';

const Button = () => {

    return (
        <div>
            <h1>Button</h1>
            <PrimaryButtonSet>
            <StyledPrimaryButton onClick={() =>alert("Make buttons")}>Large Primary Button</StyledPrimaryButton>
            <StyledPrimaryMidiumButton>Medium</StyledPrimaryMidiumButton>
            <StyledPrimarySmallButton>Small</StyledPrimarySmallButton> 
            </PrimaryButtonSet>
            <br/>
            <NegativeButtonSet>
            <StyledNegativeButton onClick={()=>prompt("Is it hard")}>Large Negative Button </StyledNegativeButton>
            <StyledNegativeMediumButton>Medium</StyledNegativeMediumButton>
            <StyledNegativeSmallButton>Small</StyledNegativeSmallButton>
            </NegativeButtonSet>
        </div>
    )
}

export default Button;

const PrimaryButtonSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const NegativeButtonSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const StyledPrimaryButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(85, 239, 196);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`;

const StyledPrimaryMidiumButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 45px;
    width: 130px;
    &:active{
        background-color: rgb(0, 184, 148);
    }
`;

const StyledPrimarySmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    &:active{
        background-color: rgb(0, 184, 148);
    }
`;

const StyledNegativeButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
`;

const StyledNegativeMediumButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 45px;
    width: 130px;
    &:active{
        background-color: rgb(225, 112, 85);
    }
`;

const StyledNegativeSmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;
    &:active{
        background-color: rgb(225, 112, 85);
    }
`;


