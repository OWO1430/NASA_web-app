import { texture } from "three/webgpu"

export const planets = [
    {
        name: "Earth",
        a: 1.00000261,
        e: 0.01671123,
        I: -0.00001531,
        L: 100.46457166,
        longPeri: 102.93768193,
        longNode: 0,
        size: 6371,
        texurl: '/texture/8k_earth_daymap.jpg',
        axialTilt: 23.5,
        rotationPeriod: 1,
    },

    {
        name: "Weird Planet",
        a: 1.30010361,
        e: 0.12771123,
        I: -0.00001331,
        L: 1014.46457166,
        longPeri: 140.93768193,
        longNode: 0,
        size: 15000,
        texurl: '/texture/8k_sun.jpg',
        axialTilt: 0.5,
        rotationPeriod: 1.5,
    }
]

export const asteroids = [
    { name: "PP-Cool", },
]