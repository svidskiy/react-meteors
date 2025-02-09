import type {MeteorsProps} from "./types.ts";

import {Explosion} from './partials/explosion';

export const Meteors = ({ settings, slotProps }: MeteorsProps) => {
    return (
        <Explosion
            x={1000}
            y={400}
            count={10}
            angleRange={120}
            duration={5}
            onComplete={() => console.log("Explosion completed!")}
            shape='circle'
        />
    );
}