import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = ({ isLoading }) =>
    isLoading ? <div style={{
        zIndex: '1000',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#4D6777',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <MoonLoader />
    </div>
        : null

export default Loading;