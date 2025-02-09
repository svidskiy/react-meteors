import {RefObject} from "react";

export type MeteorProps = {
    x: number;
    y: number;
    targetRefs: RefObject<HTMLDivElement | null>[];
}