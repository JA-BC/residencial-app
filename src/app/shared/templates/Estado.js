import React from 'react'

export default function Estado({ isActive }) {
  const bgClass = isActive ? 'bg-success' : 'bg-secondary';
  const label = isActive ? 'Activo' : 'Inactivo';

  return (
    <>
      <span className={'bullet bullet-dot p-1 me-1 ' + bgClass}></span>
      {label}
    </>
  );
}
