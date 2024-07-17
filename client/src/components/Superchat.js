"use client";
import React, { useState, useEffect } from 'react';
import abi from '@/contract/Superchat';
import { ethers } from 'ethers';
import Buy from './Buy';
import Memos from './Memos';
import { toast } from 'react-toastify';

const Superchat = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const connectWallet = async () => {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const contractAbi = abi.abi;

    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        if (accounts.length > 0) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
          setState({ provider, signer, contract });

          toast.success('Wallet connected successfully!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.warn('Please connect to MetaMask.', {
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
      } else {
        toast.info('No Ethereum provider found. Install MetaMask or another wallet.', {
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
    } catch (error) {
      toast.error('Failed to connect wallet. Please try again.', {
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
  };

  useEffect(() => {
    if (!state.provider) {
      connectWallet();
    }
  }, [state.provider]);

  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[15vh]'>
      {state.provider ? (
        <>
          <Buy state={state} />
          <Memos state={state} />
        </>
      ) : (
        <div>
          <h1 className='text-white text-4xl mt-[30vh]'>Connect Metamask to send gifts</h1>
        </div>
      )}
    </div>
  );
};

export default Superchat;
