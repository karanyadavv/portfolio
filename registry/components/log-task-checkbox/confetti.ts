type ConfettiOptions = {
  count?: number;
  colors?: string[];
};

const DEFAULT_COLORS = ["#ffd915", "#ffb915", "#fff3b0", "#fde047", "#eab308", "#a16207"];
const DEFAULT_COUNT = 90;

export function fireConfetti(
  canvas: HTMLCanvasElement,
  { count = DEFAULT_COUNT, colors = DEFAULT_COLORS }: ConfettiOptions = {},
): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const particles = Array.from({ length: count }, () => ({
    x: W / 2 + (Math.random() - 0.5) * 8,
    y: H / 2 + (Math.random() - 0.5) * 4,
    vx: (Math.random() - 0.5) * 11,
    vy: -Math.random() * 11 - 4,
    w: 5 + Math.random() * 5,
    h: 3 + Math.random() * 5,
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.35,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 70 + Math.random() * 40,
    age: 0,
  }));

  let rafId = 0;

  const cancel = () => {
    cancelAnimationFrame(rafId);
    ctx.clearRect(0, 0, W, H);
  };

  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    let alive = false;
    for (const p of particles) {
      if (p.age >= p.life) continue;
      alive = true;
      p.age += 1;
      p.vy += 0.28;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;

      const alpha = Math.min(1, (p.life - p.age) / 30);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive) {
      rafId = requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, W, H);
    }
  };
  rafId = requestAnimationFrame(tick);

  return cancel;
}
