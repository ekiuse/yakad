
export const motionScheme = "expressive" as const;

const motionSchemeTokens = {
    standard: {
        fast: {
            spatial: {
                damping: 0.9,
                stiffness: 1400,
            },
            effects: {
                damping: 1,
                stiffness: 3800,
            },
        },
        default: {
            spatial: {
                damping: 0.9,
                stiffness: 700,
            },
            effects: {
                damping: 1,
                stiffness: 1600,
            },
        },
        slow: {
            spatial: {
                damping: 0.9,
                stiffness: 300,
            },
            effects: {
                damping: 1,
                stiffness: 800,
            },
        },
    },
    expressive: {
        fast: {
            spatial: {
                damping: 0.6,
                stiffness: 800,
            },
            effects: {
                damping: 1,
                stiffness: 3800,
            },
        },
        default: {
            spatial: {
                damping: 0.8,
                stiffness: 380,
            },
            effects: {
                damping: 1,
                stiffness: 1600,
            },
        },
        slow: {
            spatial: {
                damping: 0.8,
                stiffness: 200,
            },
            effects: {
                damping: 1,
                stiffness: 800,
            },
        },
    },
} as const;

export const motionTokens = motionSchemeTokens[motionScheme];

export type MotionScheme = keyof typeof motionSchemeTokens;
export type MotionTokens = typeof motionTokens;
export type MotionSpeed = keyof MotionTokens;
export type MotionProperty = keyof MotionTokens[MotionSpeed];
