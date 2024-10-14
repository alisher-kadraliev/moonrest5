"use client"
import { useGlobalState } from '@/app/_global_states/GlobalStateContext'
import React, { useEffect } from 'react'

const FetchCampaignAction = () => {
    const globalState = useGlobalState()
    const { inputValue, setInputValue } = globalState || { inputValue: '', setInputValue: () => { } }

    useEffect(() => {
        const fetchCampaignAction = async () => {
            try {
                const response = await fetch('/api/templateapi/getCssCampaign')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.text()
                console.log('Fetched data:', data) // Log the fetched data
/*                 const inputValue = data.match(/\.popup-custom\s*{\s*padding:\s*(\d+)px\s*}/)?.[1] || ''
 */                setInputValue(data)
            } catch (error) {
                console.error('Error fetching campaign action:', error) // Log any errors
            }
        }
        fetchCampaignAction()
    }, [setInputValue])


    return (
        <div>
            <label htmlFor="paddingValue" className='block mb-2'>Modal Padding (px):</label>
            <input
                type="number"
                id="paddingValue"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='w-full border border-gray-300 rounded-md p-2'
            />
        </div>
    )
}

export default FetchCampaignAction
