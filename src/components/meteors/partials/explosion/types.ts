export type ParticleShape = 'circle' | 'square' | 'triangle' | 'random';

export type ExplosionProps = {
    /**
     * X coordinate of the explosion center
     */
    x: number;

    /**
     * Y coordinate of the explosion center
     */
    y: number;

    /**
     * Number of particles
     *
     * @default 10
     */
    count?: number;

    /**
     * Maximum angle deviation from vertical (degrees)
     *
     * @default 60
     */
    angleRange?: number;

    /**
     * Minimum particle speed (pixels per second)
     *
     * @default 80
     */
    minSpeed?: number;

    /**
     * Maximum particle speed (pixels per second)
     *
     * @default 180
     */
    maxSpeed?: number;

    /**
     * Duration of the particle animation (seconds)
     *
     * @default 1
     */
    duration?: number;

    /**
     * Shape of the particles
     *
     * @default random
     */
    shape?: ParticleShape;

    /**
     * Color of the particles
     */
    color?: string[];

    /**
     * Callback function called when all particles finish their animation
     */
    onComplete?: () => void;
}

export type Particle = {
    /**
     * Unique identifier
     */
    id: number;

    /**
     * X coordinate of the particle start
     */
    startX: number;

    /**
     * Y coordinate of the particle start
     */
    startY: number;

    /**
     * X coordinate of the particle end
     */
    endX: number;

    /**
     * Y coordinate of the particle end
     */
    endY: number;

    /**
     * Particle size (pixels)
     */
    size: number;

    /**
     * Particle colors
     */
    color: string;

    /**
     * Particle shape
     */
    shape: ParticleShape;
}