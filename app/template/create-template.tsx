"use client"
import { useState } from 'react';

export default function CreateTemplate() {
    const [domain, setDomain] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch(`/api/save-template`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ domain, title }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Domain:</label>
                <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
            </div>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <button type="submit">Save Template</button>
        </form>
    );
}