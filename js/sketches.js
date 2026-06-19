// P5.js Sketches - Dashboard Items

// Sketch 1: Geometria (Formas Geométricas)
let sketch1 = (p) => {
    p.setup = function() {
        const container = document.getElementById('sketch-1');
        p.createCanvas(container.offsetWidth, 200);
        p.noStroke();
    };

    p.draw = function() {
        p.background(20, 33, 62);
        p.fill(102, 126, 234, 200);
        
        let time = p.frameCount * 0.02;
        
        // Círculos animados
        for (let i = 0; i < 3; i++) {
            let x = p.width / 4 + (i * p.width / 4);
            let y = p.height / 2 + p.sin(time + i) * 30;
            p.circle(x, y, 40 + p.sin(time + i) * 20);
        }
        
        // Retângulos
        p.fill(240, 147, 251, 150);
        for (let i = 0; i < 2; i++) {
            let x = p.width / 3 + (i * p.width / 3);
            let size = 30 + p.cos(time + i * 2) * 15;
            p.rectMode(p.CENTER);
            p.push();
            p.translate(x, p.height / 2);
            p.rotate(time + i);
            p.rect(0, 0, size, size);
            p.pop();
        }
    };

    p.windowResized = function() {
        const container = document.getElementById('sketch-1');
        if (container && container.offsetParent !== null) {
            p.resizeCanvas(container.offsetWidth, 200);
        }
    };
};

// Sketch 2: Animação (Ondas)
let sketch2 = (p) => {
    let waveHeight = [];

    p.setup = function() {
        const container = document.getElementById('sketch-2');
        p.createCanvas(container.offsetWidth, 200);
        
        // Inicializar array de alturas
        for (let i = 0; i < p.width; i++) {
            waveHeight[i] = 0;
        }
    };

    p.draw = function() {
        p.background(20, 33, 62);
        
        // Atualizar alturas das ondas
        for (let i = 0; i < p.width; i++) {
            waveHeight[i] = p.sin(i * 0.01 + p.frameCount * 0.05) * 40 +
                           p.sin(i * 0.005 + p.frameCount * 0.03) * 30;
        }
        
        // Desenhar onda
        p.stroke(102, 126, 234);
        p.strokeWeight(2);
        p.fill(102, 126, 234, 100);
        p.beginShape();
        
        p.vertex(0, p.height);
        for (let i = 0; i < p.width; i++) {
            p.vertex(i, p.height / 2 + waveHeight[i]);
        }
        p.vertex(p.width, p.height);
        p.endShape(p.CLOSE);
        
        // Segunda onda
        p.stroke(240, 147, 251);
        p.fill(240, 147, 251, 50);
        p.beginShape();
        
        p.vertex(0, p.height);
        for (let i = 0; i < p.width; i++) {
            let wave2 = p.sin(i * 0.015 + p.frameCount * 0.04) * 35;
            p.vertex(i, p.height / 2 + wave2 - 30);
        }
        p.vertex(p.width, p.height);
        p.endShape(p.CLOSE);
    };

    p.windowResized = function() {
        const container = document.getElementById('sketch-2');
        if (container && container.offsetParent !== null) {
            p.resizeCanvas(container.offsetWidth, 200);
        }
    };
};

// Sketch 3: Interativo (Segue o Mouse)
let sketch3 = (p) => {
    let particles = [];

    p.setup = function() {
        const container = document.getElementById('sketch-3');
        p.createCanvas(container.offsetWidth, 200);
        
        // Criar partículas
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: p.random(p.width),
                y: p.random(p.height),
                vx: p.random(-2, 2),
                vy: p.random(-2, 2),
                size: p.random(3, 8)
            });
        }
    };

    p.draw = function() {
        p.background(20, 33, 62);
        
        // Atualizar e desenhar partículas
        for (let particle of particles) {
            // Movimento
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce nas bordas
            if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;
            
            // Manter dentro da tela
            particle.x = p.constrain(particle.x, 0, p.width);
            particle.y = p.constrain(particle.y, 0, p.height);
            
            // Desenhar
            let distance = p.dist(particle.x, particle.y, p.mouseX, p.mouseY);
            let alpha = p.map(distance, 0, 100, 255, 0);
            p.fill(102, 126, 234, p.constrain(alpha, 0, 255));
            p.noStroke();
            p.circle(particle.x, particle.y, particle.size);
            
            // Conectar próximas partículas
            for (let other of particles) {
                let d = p.dist(particle.x, particle.y, other.x, other.y);
                if (d < 50) {
                    p.stroke(240, 147, 251, 100);
                    p.line(particle.x, particle.y, other.x, other.y);
                }
            }
        }
    };

    p.windowResized = function() {
        const container = document.getElementById('sketch-3');
        if (container && container.offsetParent !== null) {
            p.resizeCanvas(container.offsetWidth, 200);
        }
    };
};

// Sketch 4: Cores Dinâmicas (HSB Rainbow)
let sketch4 = (p) => {
    p.setup = function() {
        const container = document.getElementById('sketch-4');
        p.createCanvas(container.offsetWidth, 200);
        p.colorMode(p.HSB, 360, 100, 100);
    };

    p.draw = function() {
        p.background(20, 33, 62);
        
        let time = p.frameCount * 0.5;
        
        p.noStroke();
        
        // Desenhar retângulos com gradiente de cores
        for (let x = 0; x < p.width; x += 20) {
            for (let y = 0; y < p.height; y += 20) {
                let hue = (x + y + time) % 360;
                let saturation = 80 + p.sin(time * 0.01 + x * 0.05) * 20;
                let brightness = 70 + p.cos(time * 0.01 + y * 0.05) * 30;
                
                p.fill(hue, saturation, brightness);
                p.rect(x, y, 20, 20);
            }
        }
        
        // Círculos pulsantes no centro
        p.strokeWeight(2);
        for (let i = 0; i < 3; i++) {
            let size = 50 + p.sin(time * 0.05 + i * 120) * 40;
            let hue = (time + i * 120) % 360;
            p.stroke(hue, 100, 100);
            p.noFill();
            p.circle(p.width / 2, p.height / 2, size);
        }
    };

    p.windowResized = function() {
        const container = document.getElementById('sketch-4');
        if (container && container.offsetParent !== null) {
            p.resizeCanvas(container.offsetWidth, 200);
        }
    };
};

// Inicializar sketches
new p5(sketch1);
new p5(sketch2);
new p5(sketch3);
new p5(sketch4);

console.log('🎨 Todos os sketches carregados com sucesso!');
