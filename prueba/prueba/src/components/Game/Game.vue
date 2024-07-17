<template>
    <div class="relative w-full h-screen bg-[url('https://wallpaperaccess.com/full/9070139.png')] overflow-hidden "
        @keydown="handleKeydown" tabindex="0">
        <Ship :positionX="shipX" />
        <Projectile v-for="(projectile, index) in projectiles" :key="index" :positionX="projectile.x"
            :positionY="projectile.y" />
        <Asteroid v-for="(asteroid, index) in asteroids" :key="index" :positionX="asteroid.x" :positionY="asteroid.y" />
        <div v-if="gameOver"
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-3xl">
            Game Over
        </div>
    </div>
</template>

<script>
import Ship from './Ship.vue';
import Asteroid from './Asteroid.vue';
import Projectile from './Projectile.vue';

export default {
    components: { Ship, Asteroid, Projectile },
    data() {
        return {
            shipX: 200,
            shipSpeed: 20,
            asteroids: [],
            projectiles: [],
            gameOver: false,
        };
    },
    methods: {
        handleKeydown(event) {
            if (this.gameOver) return;
            if (event.key === 'ArrowLeft' && this.shipX > 0) {
                this.shipX -= this.shipSpeed;
            } else if (event.key === 'ArrowRight' && this.shipX < window.innerWidth - 50) {
                this.shipX += this.shipSpeed;
            } else if (event.key === ' ') {
                this.fireProjectile();
            }
        },
        fireProjectile() {
            this.projectiles.push({ x: this.shipX + 40, y: window.innerHeight - 80 });
        },
        spawnAsteroid() {
            const newAsteroid = {
                x: Math.random() * (window.innerWidth - 50),
                y: -20,
            };
            this.asteroids.push(newAsteroid);
        },
        moveAsteroids() {
            this.asteroids.forEach(asteroid => {
                asteroid.y += 5;
            });
            this.asteroids = this.asteroids.filter(asteroid => asteroid.y < window.innerHeight);
        },
        moveProjectiles() {
            this.projectiles.forEach(projectile => {
                projectile.y -= 10;
            });
            this.projectiles = this.projectiles.filter(projectile => projectile.y > 0);
        },
        checkCollisions() {
            this.asteroids.forEach((asteroid, aIndex) => {
                // Check collision with the ship
                if (this.checkCollision(this.shipX, window.innerHeight - 50, 40, 40, asteroid.x, asteroid.y, 40, 40)) {
                    this.gameOver = true;
                }

                // Check collision with projectiles
                this.projectiles.forEach((projectile, pIndex) => {
                    if (this.checkCollision(projectile.x, projectile.y, 5, 10, asteroid.x, asteroid.y, 40, 40)) {
                        this.asteroids.splice(aIndex, 1);
                        this.projectiles.splice(pIndex, 1);
                    }
                });
            });
        },
        checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
            return (
                x1 < x2 + w2 &&
                x1 + w1 > x2 &&
                y1 < y2 + h2 &&
                y1 + h1 > y2
            );
        },
    },
    mounted() {
        setInterval(() => {
            if (this.gameOver) return;
            this.spawnAsteroid();
            this.moveAsteroids();
            this.moveProjectiles();
            this.checkCollisions();
        }, 100);
    },
}
</script>

<style scoped></style>
