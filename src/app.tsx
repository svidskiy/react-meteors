import {useRef} from "react";

import { Meteors } from './components/meteors';

export const App = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className='relative w-screen h-screen bg-gray-200'>
            <div ref={containerRef}>
                This is the container for the meteors
            </div>

            <Meteors
                options={{
                    count: 10
                }}
                targetRefs={[containerRef]}
            />
        </div>
    )
}