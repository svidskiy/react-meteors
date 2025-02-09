import type {Particle} from "./types.ts";

import {shapes} from "./constants.ts";

/**
 * Calculate a random speed between minSpeed and maxSpeed
 */
export const calculateSpeed = (minSpeed: number, maxSpeed: number) => {
    return minSpeed + Math.random() * (maxSpeed - minSpeed);
};

/**
 * Calculate the delta x and y based on the speed and angle
 */
export const calculateDelta = (
    speed: number,
    angleRadians: number,
    scaleFactor: number = 1
) => {
    const dx = scaleFactor * speed * Math.cos(angleRadians);
    const dy = scaleFactor * speed * Math.sin(angleRadians);

    return { dx, dy };
};

/**
 * Calculate a random angle within the angle range
 */
export const calculateAngle = (angleRange: number, baseAngle: number = -90) => {
    const angleOffset = Math.random() * angleRange - angleRange / 2;

    const angleDeg = baseAngle + angleOffset;

    const angleRad = (angleDeg * Math.PI) / 180;

    return { angleDeg, angleRad };
};

/**
 * Calculate a random size between minSize and maxSize
 */
export const calculateSize = (minSize: number, maxSize: number) => {
    return minSize + Math.random() * (maxSize - minSize);
}

/**
 * Get the shape function for the particle
 */
export const getShape = (particle: Particle) => {
    const { shape } = particle;

    const availableShapes = Object.keys(shapes) as Array<keyof typeof shapes>;

    const selectedShape = shape === "random" ? availableShapes[Math.floor(Math.random() * availableShapes.length)] : shape;

    return shapes[selectedShape](particle);
}

/**
 * Get a random color from the list of colors
 *
 * @throws Error if no valid colors are provided (no hex colors)
 */
export const getColor = (colors: string[]): string => {
    const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

    const hexColors = colors.filter(color => hexRegex.test(color));

    if (!hexColors.length) {
        throw new Error("No valid colors provided");
    }

    return hexColors[Math.floor(Math.random() * hexColors.length)];
};