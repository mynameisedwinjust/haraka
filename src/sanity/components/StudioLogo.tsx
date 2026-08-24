import React from 'react'

export const StudioLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px' }}>
      {/* Haraka Orange Logo Box */}
      <div style={{ 
        backgroundColor: '#F97316', // Haraka Orange
        color: 'white', 
        fontWeight: '900', 
        padding: '2px 8px', 
        borderRadius: '4px',
        fontSize: '18px',
        fontFamily: 'sans-serif'
      }}>
        H
      </div>
      <span style={{ fontWeight: 'bold', fontSize: '16px', fontFamily: 'sans-serif' }}>
        HARAKA
      </span>
    </div>
  )
}
