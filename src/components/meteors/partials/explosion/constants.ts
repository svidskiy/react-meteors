import type {Particle, ParticleShape} from "./types.ts";
import type {CSSProperties} from "react";

export const shapes: Record<
    Exclude<ParticleShape, "random">,
    (particle: Particle) => CSSProperties
> = {
    square: (particle) => ({
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
    }),
    circle: (particle) => ({
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        borderRadius: '50%',
    }),
    triangle: (particle) => ({
        width: 0,
        height: 0,
        borderLeft: `${particle.size / 2}px solid transparent`,
        borderRight: `${particle.size / 2}px solid transparent`,
        borderBottom: `${particle.size}px solid ${particle.color}`,
    }),
}