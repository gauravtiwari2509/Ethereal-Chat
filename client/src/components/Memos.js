"use client"
import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Memos = ({ state }) => {
    const [memos, setmemos] = useState([])
    const { contract } = state;
    useEffect(() => {
        //console.log(contract)
        const memoMessage = async () => {
            const memos = await contract.getMemos()
            setmemos(memos)
        }
        contract && memoMessage();
    }, [contract])

    return (
        <div className="rounded-md mb-[3vh] w-full flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
            <InfiniteMovingCards
                items={memos}
                direction="right"
                speed="normal"
            />
        </div>
    )
}

export default Memos