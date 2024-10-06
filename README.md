# NASA_web-app

## Project Live Demo Link
https://drive.google.com/file/d/1sf_UghYoTlSCViZLD1Q4ar2Vyhi3Dv4i/view?t=4

## High-Level Summary

We have developed an immersive, interactive web app that allows users to explore planetary systems and complete missions, leveraging a first-person perspective for an engaging experience.
Our platform features two modes: **Explore**, where users can freely navigate and discover celestial bodies, and **Game**, which offers mission-based challenges to deepen understanding of the solar system.
We’ve integrated a dynamic orrery that includes planetary orbits and Near-Earth Objects (NEOs), along with a filtering function that allows users to focus on specific celestial bodies of interest.
Through a user-friendly interface, participants can control their perspective, engage in missions, and enjoy a visually compelling and educational experience as they navigate celestial bodies.

## Deployment/Run locally

If you want to run locally, you need to follow these steps.
Clone the repository:
```
$ git clone https://github.com/OWO1430/NASA_web-app.git
```
Install the dependencies:
```
$ npm install
```
Run:
```
$ npm run dev
```
Open Google Chrome and go to http://localhost:3000/
Enjoy!

## External links/ resources used
Planets’ Texture:
https://www.solarsystemscope.com/textures/
Sun’s Texture: https://www.vecteezy.com/video/40076818-seamless-loop-animated-beautiful-background
HUDTex:
https://www.citypng.com/photo/31943/hd-blue-glowing-technology-futuristic-frame-png#google_vignette


## How do users use NASA web app?

Users can choose between two modes: **Explore** and **Game**.
Users can control their movement using the following keys:
**WASD**: Control flight direction.
**Q** and **E**: Adjust vertical perspective.
**R**: Return to the starting point (Earth).

###Game Mode:

In this mode, users assume the role of an explorer aboard a spaceship.
Players progress through a series of missions that introduce them to the eight major planets of the solar system.

###Explore Mode:

This mode allows users to freely navigate the solar system at their own pace,  observing various celestial bodies such as planets, asteroids, and comets within the solar system.
Users can also display orbital paths and filter celestial bodies based on size for a tailored exploration experience.


## What are the corresponding datasets?
​​WISE NEA/COMET DISCOVERY STATISTICS API: 
https://data.nasa.gov/Space-Science/WISE-NEA-COMET-DISCOVERY-STATISTICS-API/4x8h-nmkz/about_data

Horizons API:
https://ssd-api.jpl.nasa.gov/doc/horizons.html

Planetary science:
https://nssdc.gsfc.nasa.gov/planetary/
### Asteroid data
Asteroid data includes state vectors, which provide the position vector (x, y, z in km) and velocity vector (Vx, Vy, Vz in km/s) of the asteroid, along with the timestamp (Julian Date or UTC) and the reference frame (e.g., J2000). The source of this data is NASA's HORIZONS system. Additionally, orbital elements describe the asteroid's orbit, including parameters like semi-major axis, eccentricity, inclination, and orbital period. The observer ephemeris contains information on the asteroid's position from a specific observer's perspective, aiding in mission planning and observations.

### Celestial body information
Celestial body information can be sourced from NASA Science for Kids, which provides engaging introductions to various planets in our solar system. Each planet is described with key facts, such as its size, distance from the Sun, surface conditions, atmosphere, and notable features. For example, you can find details about Mercury being the closest planet to the Sun and having extreme temperature variations, while Jupiter is highlighted as the largest planet, known for its Great Red Spot and numerous moons. This resource is designed to make learning about celestial bodies fun and accessible for younger audiences.


## Aims:

Create an Interactive Orrery Web App: Visualize orbits of celestial bodies using NASA data, featuring a first-person perspective for immersive exploration.
Boost Public Engagement: Offer an educational tool with orbit visualization, object labels, and timeline controls, enhanced by a first-person view for dynamic exploration, including game mode and explore mode.