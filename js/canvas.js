function initCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let spots = [];
    const mouse = {
        x: undefined,
        y: undefined
    };
    canvas.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        for (let i = 0; i < 3; i++) {
            spots.push(new Particle());
        };
    });
    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 9 + 3.1;
            this.speedX = Math.random() * 9 - 1;
            this.speedY = Math.random() * 9 - 1;
            this.color = eval("document.querySelector('#root').getAttribute('root')")
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.3;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticle() {
        for (let i = 0; i < spots.length; i++) {
            spots[i].update();
            spots[i].draw();
            for (let j = 0; j < spots.length; j++) {
                const dx = spots[i].x - spots[i].x;
                const dy = spots[i].y - spots[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 90) {
                    ctx.beginPath();
                    ctx.strokeStyle = spots[i].color;
                    ctx.lineWidth = spots[i].size;
                    ctx.moveTo(spots[i].x, spots[i].y);
                    ctx.lineTo(spots[i].x, spots[i].y);
                    ctx.stroke();
                }
            }
            if (spots[i].size <= 0.3) {
                spots.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticle();
        requestAnimationFrame(animate);
    };
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });
    animate();
}
export {
    initCanvas
}