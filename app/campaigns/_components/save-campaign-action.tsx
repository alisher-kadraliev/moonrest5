"use client"
import { useGlobalState } from '@/app/_global_states/GlobalStateContext';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import { useState } from 'react'; // Import useState

const SaveCampaignAction = () => {
    const { inputValue } = useGlobalState() || { inputValue: '' }; // Default to an empty string if null
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSubmit = async() => {
        if (!inputValue) return; // Early return if inputValue is empty or null
        setLoading(true); // Set loading to true
        try {
            const response = await fetch('/api/templateapi/updateCss', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputValue:`.popup-custom{padding:${inputValue}px}` }),
            });

            if (response.ok) {
                console.log('Data updated successfully');
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Network error:', error); // Handle network errors
        } finally {
            setLoading(false); // Reset loading state
        }
    }

    return (
        <>
            <Button
                variant="default"
                size="sm"
                className="ml-auto gap-1.5 text-sm"
                onClick={handleSubmit}
                disabled={loading} // Disable button while loading
            >
                <Share className="size-3.5" />
                {loading ? 'Loading...' : 'Kaydet ve Kapat'} 
            </Button>
        </>
    )
}

export default SaveCampaignAction
