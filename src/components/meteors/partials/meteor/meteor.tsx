import {motion, useAnimation} from "framer-motion";

import type {MeteorProps} from "./types.ts";

export const Meteor = ({ targetRefs, x, y }: MeteorProps) => {
    const controls = useAnimation();

    const handleUpdate = () => {
        for (const targetRef of targetRefs) {
            console.log(targetRef.current);
        }
    }

    return (
        <motion.div
            animate={controls}
            onUpdate={handleUpdate}
        />
    );
}