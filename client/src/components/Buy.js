"use  client"
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { Button } from './Button';
const Buy = ({ state }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [amount, setAmount] = useState('');

    const buySuperchat = async (e) => {
        e.preventDefault();
        if (!amount.trim() || !message.trim()) {
            toast.warn("enter required field!!!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return;
        }
        const { contract } = state;
        const value = { value: ethers.utils.parseEther(amount) };

        try {
            const transaction = await contract.buySuperChat(name, message, value);
            await transaction.wait();
            toast.success("Transaction completed", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        } catch (error) {
            if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
                const reason = error.error.data.originalError.message;
                toast.error(`Transaction reverted: ${reason}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }

                );
            } else {
                toast.error(`Error: ${error}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    };

    const autoResize = (element) => {
        if (!element.value) {
            element.style.height ='auto';
        }
        const computedHeight = parseInt(window.getComputedStyle(element).getPropertyValue('height'), 10);
        const maxHeight = 150;
    
        if (computedHeight >= maxHeight) {
            return;
        }
        else{
        element.style.height = `${element.scrollHeight}px`;
        }
    };
    
    return (

        <form onSubmit={buySuperchat} className='w-full flex lg:flex lg:flex-row justify-center gap-10 items-center flex-col '>
            <div className='flex flex-col items-center gap-[1vh]'>
                <label htmlFor='name' className='text-white text-xl font-medium'>Name</label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name'
                    className='input-buy'
                    autoFocus
                />
            </div>
            <div className='flex flex-col items-center gap-[1vh]'>
                <label htmlFor='message' className='text-gray-300 text-xl font-medium'>Message*</label>
                <textarea
                    type='text'
                    id='message'
                    rows={1}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                        autoResize(e.target);

                    }}
                    placeholder='Left A message'
                    className='input-buy'
                />
            </div>
            <div className='flex flex-col items-center gap-[1vh]'>
                <label htmlFor='amount' className='text-white text-xl  font-medium'>Amount (ETH)*</label>
                <input
                    type='text'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter amount'
                    className='input-buy'
                />
            </div>
            <Button type='submit' text="Click to Buy" />
        </form>


    );
};

export default Buy;
