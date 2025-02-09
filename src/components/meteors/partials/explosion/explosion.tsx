import {useMemo, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

import type { ExplosionProps } from "./types.ts";
import {
    calculateSize,
    calculateSpeed,
    calculateAngle,
    calculateDelta,
    getShape,
    getColor,
} from "./utils";

export const Explosion = (props: ExplosionProps) => {
    const {
        x,
        y,
        count = 10,
        angleRange = 90,
        minSpeed = 100,
        maxSpeed = 200,
        duration = 1,
        shape = "circle",
        color = ["#ffc04c", "#fd8443"],
        onComplete,
    } = props;

    const [finishedCount, setFinishedCount] = useState<number>(0);

    useEffect(() => {
        if (finishedCount === count) {
            onComplete?.();
        }
    }, [finishedCount, count, onComplete]);

    /**
     * Callback when a particle completes its animation
     */
    const handleParticleComplete = useCallback(() => {
        setFinishedCount((prev) => prev + 1);
    }, []);

    /**
     * Generate the particles
     */
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, index) => {
            const size = calculateSize(2, 8);
            const speed = calculateSpeed(minSpeed, maxSpeed);
            const { angleRad } = calculateAngle(angleRange);
            const { dx, dy } = calculateDelta(speed, angleRad);

            return {
                id: index,
                startX: x,
                startY: y,
                endX: x + dx,
                endY: y + dy,
                size,
                shape,
                color: getColor(color),
            };
        });
    }, [count, x, y, minSpeed, maxSpeed, angleRange, color, shape]);

    return particles.map((particle) => (
        <motion.div
            key={particle.id}
            initial={{ x: particle.startX, y: particle.startY, opacity: 1, scale: 1 }}
            animate={{ x: particle.endX, y: particle.endY, opacity: 0, scale: 0.5 }}
            transition={{ duration, ease: "easeOut" }}
            onAnimationComplete={handleParticleComplete}
            style={{
                position: "absolute",
                ...getShape({ ...particle, shape })
            }}
        />
    )
    );
};