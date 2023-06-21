import React from 'react'

interface TrackProgresProps {
    left: number;
    right: number;
    onChange: () => void;
}

const TrackProgres: React.FC<TrackProgresProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                onChange={onChange}
                type='range'
                min={0}
                value={left}
                max={right}
            />
            <div>
                {left}/{right}
            </div>
        </div>
    )
}

export default TrackProgres