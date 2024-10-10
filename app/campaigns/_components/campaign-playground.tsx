import prisma from '@/lib/PrismaConnect'
import React from 'react'

const CampaignPlayground = async () => {
    const campaignAction = await prisma.campaignAction.findMany()
    return (
        <>
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px',padding: '20px', zIndex: '1000' }}>
                <div style={{ backgroundColor: campaignAction[0].bgColor }}>
                    <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '20px' }}>&times;</span>
                    <h2>{campaignAction[0].title}</h2>
                    <p style={{ color: campaignAction[0].textColor }}>{campaignAction[0].description}</p>
                    <a href={campaignAction[0].buttonUrl} style={{ backgroundColor: campaignAction[0].bgColor }}>{campaignAction[0].buttonText}</a>
                </div>
            </div>
        </>
    )
}

export default CampaignPlayground