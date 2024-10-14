"use client"
import React, { useEffect, useState } from 'react'
export const dynamic = 'force-dynamic'; // Add this line to force dynamic rendering

const FetchCampaignAction = () => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const fetchCampaignAction = async () => {
            try {
                const response = await fetch('/api/templateapi/getCssCampaign')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.text()
                console.log('Fetched data:', data) // Log the fetched data
                const inputValue = data.match(/\.popup-custom\s*{\s*padding:\s*(\d+)px\s*}/)?.[1] || ''
                console.log('Extracted input value:', inputValue)
                setInputValue(inputValue)
            } catch (error) {
                console.error('Error fetching campaign action:', error)
            }
        }
        fetchCampaignAction()
    }, [setInputValue])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('/api/templateapi/updateCss', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputValue: `.popup-custom{padding:${inputValue}px}` }),
        })
        if (response.ok) {
            console.log('CSS updated successfully')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="paddingValue" className='block mb-2'>Modal Padding (px):</label>
                <input
                type="number"
                id="paddingValue"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                    className='w-full border border-gray-300 rounded-md p-2'
                />
                <button type='submit'>Save</button>
            </form>


        </div>
    )
}

export default FetchCampaignAction
