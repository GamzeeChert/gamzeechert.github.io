 /*
Даты (force: null):
  1-5 декабря - 'snow' (Зима)
  25 дек-4 января - 'newyear' (Новый год)
  5 января - 'confetti' (День рождения)
  8-14 февраля - 'hearts' (День Святого Валентина)
  1-5 марта - 'sakura' (Весна)
  1-5 июня - 'summer' (Лето)
  1-5 сентября - 'leaves' (Осень)
  25-31 октября - 'halloween' (Хэллоуин)
  Остальное время - 'none'
 */
(function () {
  'use strict';

  var CONFIG = {
    force: null,
    maxParticles: 150,
    minParticles: 25,
    areaPerParticle: 14000,
    speed: 1
  };

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function makeCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = w; c.height = h;
    return c;
  }

  function makeSnowSprite(rgb) {
    rgb = rgb || '255,255,255';
    var s = 64, c = makeCanvas(s, s), g = c.getContext('2d');
    var grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grad.addColorStop(0,    'rgba(' + rgb + ',1)');
    grad.addColorStop(0.35, 'rgba(' + rgb + ',0.85)');
    grad.addColorStop(0.70, 'rgba(' + rgb + ',0.30)');
    grad.addColorStop(1,    'rgba(' + rgb + ',0)');
    g.fillStyle = grad;
    g.beginPath(); g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); g.fill();
    return c;
  }

  function makeCandyCaneSprite() {
    var w = 32, h = 48, c = makeCanvas(w, h), g = c.getContext('2d');
    g.lineCap = 'round';
    g.lineJoin = 'round';

    var pts = [];
    for (var y = 44; y >= 16; y--) pts.push([12, y]);
    for (var i = 0; i <= 20; i++) {
      var t = i / 20;
      var x = (1-t)*(1-t)*12 + 2*(1-t)*t*12 + t*t*24;
      var y2 = (1-t)*(1-t)*16 + 2*(1-t)*t*4 + t*t*8;
      pts.push([x, y2]);
    }
    for (var y3 = 8; y3 <= 14; y3++) pts.push([24, y3]);

    function tracePath() {
      g.beginPath();
      g.moveTo(pts[0][0], pts[0][1]);
      for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
    }

    g.strokeStyle = '#a01818';
    g.lineWidth = 7;
    tracePath(); g.stroke();

    g.strokeStyle = '#ffffff';
    g.lineWidth = 6;
    tracePath(); g.stroke();

    g.strokeStyle = '#e02020';
    g.lineWidth = 6;
    g.lineCap = 'butt';
    var step = 6;
    for (var i2 = 0; i2 < pts.length - 1; i2 += step * 2) {
      var end = Math.min(i2 + step, pts.length - 1);
      g.beginPath();
      g.moveTo(pts[i2][0], pts[i2][1]);
      for (var j = i2 + 1; j <= end; j++) g.lineTo(pts[j][0], pts[j][1]);
      g.stroke();
    }

    return c;
  }

  function makeGiftSprite(boxColor) {
    var s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
    var bx = 3, by = 8, bw = s - 6, bh = s - 10;
    var ribbon = '#ffd700', ribbonDark = '#a67c00';

    g.fillStyle = 'rgba(0, 0, 0, 0.25)';
    g.fillRect(bx + 1, by + 2, bw, bh);

    g.fillStyle = boxColor;
    g.fillRect(bx, by, bw, bh);
    g.fillStyle = 'rgba(0, 0, 0, 0.15)';
    g.fillRect(bx, by + bh - 4, bw, 4);

    g.fillStyle = ribbon;
    g.fillRect(bx + bw / 2 - 2.5, by, 5, bh);
    g.fillRect(bx, by + bh / 2 - 2.5, bw, 5);

    g.fillStyle = ribbonDark;
    g.fillRect(bx + bw / 2 - 2.5, by, 0.8, bh);
    g.fillRect(bx + bw / 2 + 1.7, by, 0.8, bh);
    g.fillRect(bx, by + bh / 2 - 2.5, bw, 0.8);
    g.fillRect(bx, by + bh / 2 + 1.7, bw, 0.8);

    var cx = s / 2, cy = by - 1;
    g.fillStyle = ribbon;
    g.beginPath();
    g.ellipse(cx - 4, cy, 5, 3, -0.35, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.ellipse(cx + 4, cy, 5, 3, 0.35, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.arc(cx, cy, 2.5, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = ribbonDark;
    g.lineWidth = 0.6;
    g.beginPath();
    g.arc(cx, cy, 2.5, 0, Math.PI * 2);
    g.stroke();

    return c;
  }

  function makeBatSprite() {
    var w = 64, h = 32, c = makeCanvas(w, h), g = c.getContext('2d');
    var cx = w / 2, cy = h / 2;

    var glow = g.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45);
    glow.addColorStop(0,   'rgba(200, 130, 255, 0.55)');
    glow.addColorStop(0.6, 'rgba(160, 80, 220, 0.20)');
    glow.addColorStop(1,   'rgba(160, 80, 220, 0)');
    g.fillStyle = glow;
    g.fillRect(0, 0, w, h);

    g.fillStyle   = 'rgba(110, 55, 160, 0.98)';
    g.strokeStyle = 'rgba(220, 170, 255, 0.9)';
    g.lineWidth = 1.1;
    g.lineJoin = 'round';

    g.beginPath();
    g.moveTo(cx, cy);
    g.bezierCurveTo(cx - 8, cy - 12, cx - 22, cy - 10, cx - 30, cy - 4);
    g.lineTo(cx - 22, cy + 2);
    g.lineTo(cx - 16, cy - 2);
    g.lineTo(cx - 10, cy + 4);
    g.closePath(); g.fill(); g.stroke();

    g.beginPath();
    g.moveTo(cx, cy);
    g.bezierCurveTo(cx + 8, cy - 12, cx + 22, cy - 10, cx + 30, cy - 4);
    g.lineTo(cx + 22, cy + 2);
    g.lineTo(cx + 16, cy - 2);
    g.lineTo(cx + 10, cy + 4);
    g.closePath(); g.fill(); g.stroke();

    g.beginPath();
    g.ellipse(cx, cy + 2, 4, 6, 0, 0, Math.PI * 2);
    g.fill(); g.stroke();

    g.beginPath();
    g.moveTo(cx - 4, cy - 3); g.lineTo(cx - 2, cy - 8); g.lineTo(cx - 1, cy - 2);
    g.closePath(); g.fill(); g.stroke();
    g.beginPath();
    g.moveTo(cx + 4, cy - 3); g.lineTo(cx + 2, cy - 8); g.lineTo(cx + 1, cy - 2);
    g.closePath(); g.fill(); g.stroke();

    return c;
  }

  function makeHeartSprite() {
    var s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
    var cx = s / 2, cy = s / 2 + 2;
    var grad = g.createRadialGradient(cx, cy - 4, 1, cx, cy, s / 2);
    grad.addColorStop(0,    '#ffd6dd');
    grad.addColorStop(0.50, '#ef3d5b');
    grad.addColorStop(1,    '#a4142e');
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(cx, cy + s * 0.28);
    g.bezierCurveTo(cx - s * 0.55, cy - s * 0.10, cx - s * 0.42, cy - s * 0.48, cx, cy - s * 0.22);
    g.bezierCurveTo(cx + s * 0.42, cy - s * 0.48, cx + s * 0.55, cy - s * 0.10, cx, cy + s * 0.28);
    g.fill();
    return c;
  }

  function makePetalSprite() {
    var s = 24, c = makeCanvas(s, s), g = c.getContext('2d');
    g.fillStyle = 'rgba(255, 183, 206, 0.95)';
    g.beginPath();
    g.ellipse(s / 2, s / 2, s * 0.38, s * 0.16, Math.PI / 6, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(255, 230, 240, 0.85)';
    g.beginPath();
    g.ellipse(s / 2 - 2, s / 2 - 1, s * 0.20, s * 0.07, Math.PI / 6, 0, Math.PI * 2);
    g.fill();
    return c;
  }

  function makeLeafSprite(color) {
    var s = 28, c = makeCanvas(s, s), g = c.getContext('2d');
    g.fillStyle = color;
    g.beginPath();
    g.moveTo(s / 2, s * 0.08);
    g.lineTo(s * 0.68, s * 0.38);
    g.lineTo(s * 0.92, s * 0.34);
    g.lineTo(s * 0.76, s * 0.58);
    g.lineTo(s * 0.86, s * 0.88);
    g.lineTo(s * 0.56, s * 0.76);
    g.lineTo(s / 2, s * 0.96);
    g.lineTo(s * 0.44, s * 0.76);
    g.lineTo(s * 0.14, s * 0.88);
    g.lineTo(s * 0.24, s * 0.58);
    g.lineTo(s * 0.08, s * 0.34);
    g.lineTo(s * 0.32, s * 0.38);
    g.closePath(); g.fill();
    g.strokeStyle = 'rgba(0, 0, 0, 0.22)';
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(s / 2, s * 0.16);
    g.lineTo(s / 2, s * 0.86);
    g.stroke();
    return c;
  }

  function makeOakLeafSprite(color) {
    var s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
    var cx = s / 2;

    g.fillStyle = color;
    g.beginPath();
    g.moveTo(cx, s * 0.90);

    g.quadraticCurveTo(cx - 6, s * 0.82, cx - 7,  s * 0.74);
    g.quadraticCurveTo(cx - 2, s * 0.68, cx - 3,  s * 0.64);
    g.quadraticCurveTo(cx - 10, s * 0.56, cx - 10, s * 0.48);
    g.quadraticCurveTo(cx - 3, s * 0.42, cx - 4,  s * 0.38);
    g.quadraticCurveTo(cx - 9, s * 0.30, cx - 7,  s * 0.24);
    g.quadraticCurveTo(cx - 2, s * 0.18, cx,      s * 0.08);

    g.quadraticCurveTo(cx + 2,  s * 0.18, cx + 7,  s * 0.24);
    g.quadraticCurveTo(cx + 9,  s * 0.30, cx + 4,  s * 0.38);
    g.quadraticCurveTo(cx + 3,  s * 0.42, cx + 10, s * 0.48);
    g.quadraticCurveTo(cx + 10, s * 0.56, cx + 3,  s * 0.64);
    g.quadraticCurveTo(cx + 2,  s * 0.68, cx + 7,  s * 0.74);
    g.quadraticCurveTo(cx + 6,  s * 0.82, cx,      s * 0.90);
    g.closePath();
    g.fill();

    g.strokeStyle = 'rgba(0, 0, 0, 0.22)';
    g.lineWidth = 0.9;
    g.beginPath();
    g.moveTo(cx, s * 0.88);
    g.lineTo(cx, s * 0.12);
    g.stroke();

    g.strokeStyle = 'rgba(0, 0, 0, 0.14)';
    g.lineWidth = 0.5;
    for (var i = 0; i < 4; i++) {
      var yy = 0.26 + i * 0.16;
      g.beginPath();
      g.moveTo(cx, s * yy);
      g.lineTo(cx - 5, s * (yy - 0.03));
      g.stroke();
      g.beginPath();
      g.moveTo(cx, s * yy);
      g.lineTo(cx + 5, s * (yy - 0.03));
      g.stroke();
    }

    return c;
  }

  function makeConfettiSprite(color) {
    var w = 12, h = 6, c = makeCanvas(w, h), g = c.getContext('2d');
    g.fillStyle = color;
    g.fillRect(0, 0, w, h);
    return c;
  }

  function pickCount(W, H) {
    var n = Math.round((W * H) / CONFIG.areaPerParticle);
    n = Math.max(CONFIG.minParticles, Math.min(CONFIG.maxParticles, n));
    if (W < 640) n = Math.round(n * 0.6);
    return n;
  }

  var THEMES = {

    /* ----- ЗИМА ----- */
    snow: {
      sprites: [makeSnowSprite()],
      count: function (W, H) { return pickCount(W, H); },
      spawn: function (W, H, fromTop) {
        var r = rand(1.1, 3.6);
        return {
          s: 0,
          x: Math.random() * W,
          y: fromTop ? -r * 2 : Math.random() * H,
          r: r,
          vy: rand(18, 50) * (0.7 + r / 6),
          vx: rand(-8, 8),
          amp: rand(5, 22),
          freq: rand(0.4, 1.2),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.35, 0.9)
        };
      },
      update: function (p, dt, now, W, H) {
        var wind = Math.sin(now / 9000) * 14;
        p.y += p.vy * dt * CONFIG.speed;
        p.x += (p.vx + wind + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
        if (p.y - p.r > H) { p.y = -p.r * 2; p.x = Math.random() * W; }
        if (p.x < -p.r * 4) p.x = W + p.r * 4;
        else if (p.x > W + p.r * 4) p.x = -p.r * 4;
      },
      draw: function (ctx, p, now, sprite) {
        ctx.globalAlpha = p.alpha;
        ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
      }
    },

    /* ----- НОВЫЙ ГОД ----- */
    newyear: {
      sprites: [
        makeSnowSprite(),
        makeCandyCaneSprite(),
        makeGiftSprite('#1e6091'),
        makeGiftSprite('#2d6a4f'),
        makeGiftSprite('#7b2cbf'),
        makeGiftSprite('#d97706')
      ],

      count: function (W, H) { return pickCount(W, H); },

      spawn: function (W, H, fromTop) {
        var t = Math.random();

        if (t < 0.85) {
          var r = rand(1.1, 3.6);
          return {
            kind: 'snow', s: 0,
            x: Math.random() * W,
            y: fromTop ? -r * 2 : Math.random() * H,
            r: r,
            vy: rand(18, 50) * (0.7 + r / 6),
            vx: rand(-8, 8),
            amp: rand(5, 22),
            freq: rand(0.4, 1.2),
            phase: Math.random() * Math.PI * 2,
            alpha: rand(0.35, 0.9)
          };
        }

        if (t < 0.95) {
          return {
            kind: 'candycane', s: 1,
            x: Math.random() * W,
            y: fromTop ? -50 : Math.random() * H,
            scale: rand(0.55, 1.0),
            vy: rand(24, 45),
            vx: rand(-10, 10),
            rot: rand(0, Math.PI * 2),
            vr: rand(-1.5, 1.5),
            amp: rand(5, 15),
            freq: rand(0.4, 1.2),
            phase: Math.random() * Math.PI * 2,
            alpha: rand(0.85, 1)
          };
        }

        return {
          kind: 'gift', s: 2 + Math.floor(Math.random() * 4),
          x: Math.random() * W,
          y: fromTop ? -40 : Math.random() * H,
          scale: rand(0.55, 1.0),
          vy: rand(22, 40),
          vx: rand(-10, 10),
          rot: rand(0, Math.PI * 2),
          vr: rand(-1, 1),
          amp: rand(4, 12),
          freq: rand(0.4, 1.0),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.9, 1)
        };
      },

      update: function (p, dt, now, W, H) {
        var wind = Math.sin(now / 9000) * 14;

        if (p.kind === 'snow') {
          p.y += p.vy * dt * CONFIG.speed;
          p.x += (p.vx + wind + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
          if (p.y - p.r > H) { p.y = -p.r * 2; p.x = Math.random() * W; }
          if (p.x < -p.r * 4) p.x = W + p.r * 4;
          else if (p.x > W + p.r * 4) p.x = -p.r * 4;
        } else {
          p.y += p.vy * dt * CONFIG.speed;
          p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
          p.rot += p.vr * dt;
          var size = (p.kind === 'candycane' ? 46 : 36) * p.scale;
          if (p.y > H + size) { p.y = -size; p.x = Math.random() * W; }
          if (p.x < -size * 2) p.x = W + size * 2;
          else if (p.x > W + size * 2) p.x = -size * 2;
        }
      },

      draw: function (ctx, p, now, sprite) {
        if (p.kind === 'snow') {
          ctx.globalAlpha = p.alpha;
          ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
          return;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.kind === 'candycane') {
          var h = 46 * p.scale;
          var w = h * (32 / 48);
          ctx.drawImage(sprite, -w / 2, -h / 2, w, h);
        } else {
          var s = 36 * p.scale;
          ctx.drawImage(sprite, -s / 2, -s / 2, s, s);
        }
        ctx.restore();
      }
    },

    /* ----- ХЭЛЛОУИН ----- */
    halloween: {
      sprites: [
        makeBatSprite(),
        makeLeafSprite('#8b4513'),
        makeLeafSprite('#c25400'),
        makeSnowSprite('130, 220, 90')
      ],
      count: function (W, H) { return Math.round(pickCount(W, H) * 0.85); },
            spawn: function (W, H, fromTop) {
        var t = Math.random();

        if (t < 0.10) {
          return {
            kind: 'bat', s: 0,
            x: Math.random() * W,
            y: fromTop ? -40 : Math.random() * H,
            scale: rand(0.5, 1.1),
            vy: rand(10, 25),
            vx: rand(-30, 30),
            wingPhase: Math.random() * Math.PI * 2,
            wingSpeed: rand(8, 14),
            alpha: rand(0.6, 0.95)
          };
        }

        if (t < 0.30) {
          return {
            kind: 'leaf', s: Math.random() < 0.5 ? 1 : 2,
            x: Math.random() * W,
            y: fromTop ? -40 : Math.random() * H,
            scale: rand(0.5, 1.0),
            vy: rand(25, 45),
            vx: rand(-15, 15),
            rot: rand(0, Math.PI * 2),
            vr: rand(-2, 2),
            amp: rand(5, 20),
            freq: rand(0.5, 1.5),
            phase: Math.random() * Math.PI * 2,
            alpha: rand(0.55, 0.85)
          };
        }

        var r = rand(1.2, 3.4);
        return {
          kind: 'greenflake', s: 3,
          x: Math.random() * W,
          y: fromTop ? -r * 2 : Math.random() * H,
          r: r,
          vy: rand(18, 45) * (0.7 + r / 6),
          vx: rand(-8, 8),
          amp: rand(5, 20),
          freq: rand(0.4, 1.2),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.55, 0.95)
        };
      },

      update: function (p, dt, now, W, H) {
        if (p.kind === 'bat') {
          p.y += p.vy * dt * CONFIG.speed;
          p.x += (p.vx + Math.sin(now / 2000 + p.wingPhase) * 20) * dt;
          var bsize = 44 * p.scale;
          if (p.y > H + bsize) { p.y = -bsize; p.x = Math.random() * W; }
          if (p.x < -bsize * 2) p.x = W + bsize * 2;
          else if (p.x > W + bsize * 2) p.x = -bsize * 2;
        } else if (p.kind === 'leaf') {
          p.y += p.vy * dt * CONFIG.speed;
          p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
          p.rot += p.vr * dt;
          var lsize = 44 * p.scale;
          if (p.y > H + lsize) { p.y = -lsize; p.x = Math.random() * W; }
          if (p.x < -lsize * 2) p.x = W + lsize * 2;
          else if (p.x > W + lsize * 2) p.x = -lsize * 2;
        } else {
          // greenflake — как обычный снег
          var wind = Math.sin(now / 9000) * 14;
          p.y += p.vy * dt * CONFIG.speed;
          p.x += (p.vx + wind + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
          if (p.y - p.r > H) { p.y = -p.r * 2; p.x = Math.random() * W; }
          if (p.x < -p.r * 4) p.x = W + p.r * 4;
          else if (p.x > W + p.r * 4) p.x = -p.r * 4;
        }
      },

      draw: function (ctx, p, now, sprite) {
        if (p.kind === 'bat') {
          var bsize = 44 * p.scale;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          var flap = Math.sin(now / 1000 * p.wingSpeed + p.wingPhase);
          var sx = 0.5 + Math.abs(flap) * 0.7;
          ctx.scale(sx, 1);
          ctx.drawImage(sprite, -bsize / 2, -bsize / 4, bsize, bsize / 2);
          ctx.restore();
        } else if (p.kind === 'leaf') {
          var lsize = 44 * p.scale;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.drawImage(sprite, -lsize / 2, -lsize / 2, lsize, lsize);
          ctx.restore();
        } else {
          // greenflake
          ctx.globalAlpha = p.alpha;
          ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        }
      }
    },

    /* ----- ДЕНЬ СВЯТОГО ВАЛЕНТИНА ----- */
    hearts: {
      sprites: [makeHeartSprite()],
      count: function (W, H) { return Math.round(pickCount(W, H) * 0.65); },
      spawn: function (W, H, fromTop) {
        return {
          s: 0,
          x: Math.random() * W,
          y: fromTop ? -30 : Math.random() * H,
          scale: rand(0.5, 1.2),
          vy: rand(20, 45),
          vx: rand(-10, 10),
          amp: rand(8, 20),
          freq: rand(0.5, 1.5),
          phase: Math.random() * Math.PI * 2,
          pulse: Math.random() * Math.PI * 2,
          alpha: rand(0.55, 0.9)
        };
      },
      update: function (p, dt, now, W, H) {
        p.y += p.vy * dt * CONFIG.speed;
        p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
        var size = 32 * p.scale;
        if (p.y > H + size) { p.y = -size; p.x = Math.random() * W; }
        if (p.x < -size * 2) p.x = W + size * 2;
        else if (p.x > W + size * 2) p.x = -size * 2;
      },
      draw: function (ctx, p, now, sprite) {
        var size = 32 * p.scale * (1 + Math.sin(now / 400 + p.pulse) * 0.15);
        ctx.globalAlpha = p.alpha;
        ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
      }
    },

    /* ----- ВЕСНА ----- */
    sakura: {
      sprites: [makePetalSprite()],
      count: function (W, H) { return pickCount(W, H); },
      spawn: function (W, H, fromTop) {
        return {
          s: 0,
          x: Math.random() * W,
          y: fromTop ? -30 : Math.random() * H,
          scale: rand(0.6, 1.3),
          vy: rand(15, 40),
          vx: rand(-15, 15),
          rot: rand(0, Math.PI * 2),
          vr: rand(-3, 3),
          amp: rand(6, 18),
          freq: rand(0.5, 1.5),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.6, 0.95)
        };
      },
      update: function (p, dt, now, W, H) {
        p.y += p.vy * dt * CONFIG.speed;
        p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
        p.rot += p.vr * dt;
        var size = 24 * p.scale;
        if (p.y > H + size) { p.y = -size; p.x = Math.random() * W; }
        if (p.x < -size * 2) p.x = W + size * 2;
        else if (p.x > W + size * 2) p.x = -size * 2;
      },
      draw: function (ctx, p, now, sprite) {
        var size = 24 * p.scale;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
    },

    /* ----- ОСЕНЬ ----- */
    leaves: {
      sprites: [
        makeLeafSprite('#e8a020'),
        makeLeafSprite('#d2411e'),
        makeLeafSprite('#a86b2a')
      ],
      count: function (W, H) { return Math.round(pickCount(W, H) * 0.85); },
      spawn: function (W, H, fromTop) {
        return {
          s: Math.floor(Math.random() * 3),
          x: Math.random() * W,
          y: fromTop ? -30 : Math.random() * H,
          scale: rand(0.6, 1.3),
          vy: rand(25, 50),
          vx: rand(-20, 20),
          rot: rand(0, Math.PI * 2),
          vr: rand(-2.5, 2.5),
          amp: rand(8, 25),
          freq: rand(0.4, 1.3),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.6, 0.95)
        };
      },
      update: function (p, dt, now, W, H) {
        p.y += p.vy * dt * CONFIG.speed;
        p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
        p.rot += p.vr * dt;
        var size = 28 * p.scale;
        if (p.y > H + size) { p.y = -size; p.x = Math.random() * W; }
        if (p.x < -size * 2) p.x = W + size * 2;
        else if (p.x > W + size * 2) p.x = -size * 2;
      },
      draw: function (ctx, p, now, sprite) {
        var size = 28 * p.scale;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
    },

    /* ----- ДЕНЬ РОЖДЕНИЯ ----- */
    confetti: {
      sprites: [
        makeConfettiSprite('#ff4d4d'),
        makeConfettiSprite('#ffb800'),
        makeConfettiSprite('#4dd2ff'),
        makeConfettiSprite('#7dff4d'),
        makeConfettiSprite('#ff4dd2'),
        makeConfettiSprite('#b84dff')
      ],
      count: function (W, H) { return pickCount(W, H); },
      spawn: function (W, H, fromTop) {
        return {
          s: Math.floor(Math.random() * 6),
          x: Math.random() * W,
          y: fromTop ? -20 : Math.random() * H,
          scale: rand(0.7, 1.4),
          vy: rand(40, 80),
          vx: rand(-40, 40),
          rot: rand(0, Math.PI * 2),
          vr: rand(-4, 4),
          alpha: rand(0.7, 1)
        };
      },
      update: function (p, dt, now, W, H) {
        p.y += p.vy * dt * CONFIG.speed;
        p.x += p.vx * dt;
        p.rot += p.vr * dt;
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
        if (p.x < -20) p.x = W + 20;
        else if (p.x > W + 20) p.x = -20;
      },
      draw: function (ctx, p, now, sprite) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(p.scale, p.scale);
        ctx.drawImage(sprite, -6, -3);
        ctx.restore();
      }
    },

    /* ----- ЛЕТО ----- */
    summer: {
      sprites: [
        makeOakLeafSprite('#2d6a4f'),
        makeOakLeafSprite('#52b788'),
        makeOakLeafSprite('#95d5b2')
      ],
      count: function (W, H) { return Math.round(pickCount(W, H) * 0.85); },
      spawn: function (W, H, fromTop) {
        return {
          s: Math.floor(Math.random() * 3),
          x: Math.random() * W,
          y: fromTop ? -30 : Math.random() * H,
          scale: rand(0.6, 1.3),
          vy: rand(20, 42),
          vx: rand(-15, 15),
          rot: rand(0, Math.PI * 2),
          vr: rand(-2.2, 2.2),
          amp: rand(8, 22),
          freq: rand(0.4, 1.3),
          phase: Math.random() * Math.PI * 2,
          alpha: rand(0.6, 0.95)
        };
      },
      update: function (p, dt, now, W, H) {
        p.y += p.vy * dt * CONFIG.speed;
        p.x += (p.vx + Math.sin(now / 1000 * p.freq + p.phase) * p.amp) * dt;
        p.rot += p.vr * dt;
        var size = 28 * p.scale;
        if (p.y > H + size) { p.y = -size; p.x = Math.random() * W; }
        if (p.x < -size * 2) p.x = W + size * 2;
        else if (p.x > W + size * 2) p.x = -size * 2;
      },
      draw: function (ctx, p, now, sprite) {
        var size = 28 * p.scale;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
    }
  };

  function pickThemeByDate() {
    var d = new Date();
    var m = d.getMonth() + 1;
    var day = d.getDate();

    if (m === 12 && day >= 25) return 'newyear';
    if (m === 1 && day <= 4)   return 'newyear';
    if (m === 1 && day === 5) return 'confetti';
    if (m === 2 && day >= 8 && day <= 14) return 'hearts';
    if (m === 10 && day >= 25 && day <= 31) return 'halloween';

    if (m === 12 && day <= 5) return 'snow';
    if (m === 3  && day <= 5) return 'sakura';
    if (m === 6  && day <= 5) return 'summer';
    if (m === 9  && day <= 5) return 'leaves';

    return 'none';
  }

  var themeName = CONFIG.force || pickThemeByDate();
  if (themeName === 'none' || !THEMES[themeName]) return;
  var theme = THEMES[themeName];

  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;' +
    'pointer-events:none;z-index:-1;display:block;';

  var body = document.body;
  body.insertBefore(canvas, body.firstChild);

  var bs = window.getComputedStyle(body);
  if (bs.position === 'static') body.style.position = 'relative';
  if (bs.zIndex === 'auto') body.style.zIndex = '0';

  var ctx = canvas.getContext('2d');
  if (!ctx) { canvas.parentNode.removeChild(canvas); return; }

  var W = 0, H = 0, dpr = 1;
  var particles = [];
  var raf = null;
  var last = 0;
  var rt;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var target = theme.count(W, H);
    particles.length = 0;
    for (var i = 0; i < target; i++) particles.push(theme.spawn(W, H, false));
  }

  function frame(now) {
    raf = window.requestAnimationFrame(frame);
    var dt = last ? (now - last) / 1000 : 0;
    last = now;
    if (dt > 0.05) dt = 0.05;

    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      theme.update(p, dt, now, W, H);
      theme.draw(ctx, p, now, theme.sprites[p.s]);
    }
    ctx.globalAlpha = 1;
  }

  function start() {
    if (raf !== null) return;
    last = 0;
    raf = window.requestAnimationFrame(frame);
  }
  function stop() {
    if (raf === null) return;
    window.cancelAnimationFrame(raf);
    raf = null;
  }

  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(resize, 150);
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  resize();
  start();
})();