import React, { useState } from 'react';

export function Content({ page }) {
    <div style={{ fontSize: '5em' }}>
        Сторінка №{page}
    </div>
};

export function Color({ page }) {
    <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
        {page}
    </div>
};

export function Pagination({ render, max }) {
    const [page, setPage] = useState(1);
    const Render = render;

    const handleFirst = () => setPage(1);
    const handlePrevious = () => setPage(prev => Math.max(prev - 1, 1));
    const handleNext = () => setPage(prev => Math.min(prev + 1, max));
    const handleLast = () => setPage(max);
    const handlePage = (pageNumber) => setPage(pageNumber);

    const renderPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= max; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePage(i)} disabled={i === page}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div>
            <Render page={page} />
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleFirst} disabled={page === 1}>&lt;&lt;</button>
                <button onClick={handlePrevious} disabled={page === 1}>&lt;</button>
                {renderPageButtons()}
                <button onClick={handleNext} disabled={page === max}>&gt;</button>
                <button onClick={handleLast} disabled={page === max}>&gt;&gt;</button>
            </div>
        </div>
    );
};