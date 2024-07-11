import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';


const Modal = () => {
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    const openModal1 = () => {
        setIsModal1Open(true);
    };

    const openModal2 = () => {
        setIsModal2Open(true);
    };

    return (
        <>
            <h1>Modal</h1>
            <ModalSet>
                <OpenModalButton onClick={openModal1}>Open Modal</OpenModalButton>
                <BigOpenModalButton onClick={openModal2}>Open Modal</BigOpenModalButton>

                    {isModal1Open && ReactDOM.createPortal(
                        <>
                        <ModalBackGround/>
                        <ModalOverlay>
                            <FirstModalContent>
                                <p>There are two close and confirm buttons, and the modal does not close when you click the outside area.
                                    When pressed the confirm button, the log will be shown on console.</p>
                                <CloseButton onClick={() => setIsModal1Open(false)}>Close</CloseButton>
                                <ConfirmButton onClick={() => setIsModal1Open(false)}>Confirm</ConfirmButton>
                            </FirstModalContent>
                        </ModalOverlay>
                        </>
                                    ,document.body
                        
                    )}
                    
                    {isModal2Open && ReactDOM.createPortal(
                        <>
                        <ModalBackGround/>
                        <ModalOverlayTwo onClick={() => setIsModal2Open(false)}>
                            <SecondModalContent onClick={(e) => e.stopPropagation()}>
                                <XButton onClick={() => setIsModal2Open(false)}>×</XButton>
                                <p>There is one close button,
                                    and the modal close when you click the outside area.</p>
                            </SecondModalContent>
                        </ModalOverlayTwo>
                        </>
                                    ,document.body
                    )}
            </ModalSet>
            </>
    );
};

export default Modal;

const ModalBackGround = styled.div`
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    inset: 0px;
    position: fixed;
    opacity: 0.8;
    background-color: rgb(221, 221, 221);
`;


const ModalSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;


const OpenModalButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`;

const BigOpenModalButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;

`;

const CloseButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;

`;

const ConfirmButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;

`;

const XButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
`;

const ModalOverlay = styled.div`
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
`;

const ModalOverlayTwo = styled.div`
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 400px;
    height: 200px;
`;

const FirstModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
`;

const SecondModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
`;