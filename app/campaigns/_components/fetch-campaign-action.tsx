"use client"
import React, { useEffect, useState } from 'react'

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
    const handleSubmit = async () => { // Move handleSubmit here
        try {
            const response = await fetch('/api/templateapi/updateCss', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputValue }),
            })
            if (response.ok) {
                console.log('CSS updated successfully')
            }
        } catch (error) {
            console.error('Error updating CSS:', error)
        }
    }
  

    return (
        <div>
                <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                    className='w-full border border-gray-300 rounded-md p-2'
                />
            <button onClick={handleSubmit} type='submit'>Save</button>


        </div>
    )
}

export default FetchCampaignAction
