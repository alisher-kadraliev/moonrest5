"use client"
import { useGlobalState } from '@/app/_global_states/GlobalStateContext';
import React from 'react'

const UpdateCampaignAction = () => {
    const { inputValue } = useGlobalState() || { inputValue: '' }; // Default to an empty string if null
   
    return (
        <>
            <form>
                <input type="hidden" name="hiddenInput" value={inputValue} />
                <div>Current Input Value: {inputValue}</div>
            </form>
        </>
    )
}

export default UpdateCampaignAction
