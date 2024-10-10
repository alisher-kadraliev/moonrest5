"use client"
import React, { useEffect, useState } from 'react'

const FetchCampaignAction = () => {
    const [campaignAction, setCampaignAction] = useState([])
    useEffect(() => {
        const fetchCampaignAction = async () => {
            const response = await fetch('/api/templateapi/getCssCampaign')
            const data = await response.json()
            setCampaignAction(data)
        }
        fetchCampaignAction()
    }, [])
    console.log(campaignAction)
  return (
      <div>
    </div>
  )
}

export default FetchCampaignAction