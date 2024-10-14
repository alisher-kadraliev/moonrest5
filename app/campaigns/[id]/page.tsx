"use client"

import { useEffect, useState } from "react"

const CampaignsPageDetail = () => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/templateapi/reciev')
                if (!response.ok) throw new Error('Failed to fetch')
                const data = await response.json()
                setTitle(data[0]?.title || '')
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/templateapi/updateme', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            })
            if (response.ok) {
                console.log('CSS updated successfully')
            } else {
                console.error('Failed to update')
            }
        } catch (error) {
            console.error("Error updating data:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default CampaignsPageDetail