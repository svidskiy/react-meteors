import {RefObject} from "react";

import type {ExplosionProps} from "./partials/explosion";
import type {MeteorProps} from "./partials/meteor";

type MeteorsSlotProps = {
    explosion?: ExplosionProps;
    meteor?: MeteorProps;
}

export type MeteorsOptionsProps = {
    count?: number;
}

export type MeteorsProps = {
    options?: MeteorsOptionsProps;
    targetRefs?: RefObject<HTMLElement | null>[];
    slotProps?: MeteorsSlotProps;
}
