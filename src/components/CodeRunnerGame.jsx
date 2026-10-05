import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const WIDTH = 560;
const HEIGHT = 390;
const PLAYER_WIDTH = 88;

const CodeRunnerGame = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const playerXRef = useRef(WIDTH / 2 - PLAYER_WIDTH / 2);
  const itemsRef = useRef([]);
  const lastSpawnRef = useRef(0);
  const lastFrameRef = useRef(0);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState("ready");

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, "#090b1c");
    gradient.addColorStop(1, "#17102f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.strokeStyle = "rgba(125, 211, 252, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < WIDTH; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y < HEIGHT; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(WIDTH, y);
      ctx.stroke();
    }

    itemsRef.current.forEach((item) => {
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = item.kind === "commit" ? "#38bdf8" : "#fb7185";
      ctx.fillStyle = item.kind === "commit" ? "#38bdf8" : "#fb7185";
      ctx.beginPath();
      ctx.roundRect(item.x, item.y, item.size, item.size, 8);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#050816";
      ctx.font = "800 12px Poppins, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.kind === "commit" ? "+1" : "BUG", item.x + item.size / 2, item.y + item.size / 2 + 4);
      ctx.restore();
    });

    const playerX = playerXRef.current;
    ctx.save();
    ctx.shadowBlur = 24;
    ctx.shadowColor = "#915eff";
    ctx.fillStyle = "#915eff";
    ctx.beginPath();
    ctx.roundRect(playerX, HEIGHT - 38, PLAYER_WIDTH, 18, 8);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "800 11px Poppins, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SHIP", playerX + PLAYER_WIDTH / 2, HEIGHT - 25);
    ctx.restore();
  }, []);

  const movePlayer = useCallback((direction) => {
    playerXRef.current = Math.max(0, Math.min(WIDTH - PLAYER_WIDTH, playerXRef.current + direction * 42));
    draw();
  }, [draw]);

  const endGame = useCallback(() => {
    setStatus("over");
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  const gameLoop = useCallback((time) => {
    if (!lastFrameRef.current) lastFrameRef.current = time;
    const delta = Math.min((time - lastFrameRef.current) / 16.67, 2);
    lastFrameRef.current = time;

    if (time - lastSpawnRef.current > Math.max(430, 920 - scoreRef.current * 18)) {
      const isCommit = Math.random() > 0.28;
      const size = isCommit ? 38 : 46;
      itemsRef.current.push({
        x: Math.random() * (WIDTH - size),
        y: -size,
        size,
        kind: isCommit ? "commit" : "bug",
        speed: 2.6 + Math.random() * 1.8 + scoreRef.current * 0.035,
      });
      lastSpawnRef.current = time;
    }

    const playerY = HEIGHT - 42;
    itemsRef.current = itemsRef.current.filter((item) => {
      item.y += item.speed * delta;
      const hit = item.y + item.size >= playerY && item.y <= HEIGHT - 18 && item.x + item.size >= playerXRef.current && item.x <= playerXRef.current + PLAYER_WIDTH;
      if (hit) {
        if (item.kind === "commit") {
          scoreRef.current += 1;
          setScore(scoreRef.current);
        } else {
          livesRef.current -= 1;
          setLives(livesRef.current);
          if (livesRef.current <= 0) endGame();
        }
        return false;
      }
      return item.y < HEIGHT + item.size;
    });

    draw();
    if (livesRef.current > 0) frameRef.current = requestAnimationFrame(gameLoop);
  }, [draw, endGame]);

  const startGame = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    itemsRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 3;
    playerXRef.current = WIDTH / 2 - PLAYER_WIDTH / 2;
    lastSpawnRef.current = 0;
    lastFrameRef.current = 0;
    setScore(0);
    setLives(3);
    setStatus("playing");
    frameRef.current = requestAnimationFrame(gameLoop);
  }, [gameLoop]);

  useEffect(() => {
    draw();
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.matches("input, textarea, select") || target.isContentEditable);

      if (isTyping) return;

      if (["ArrowLeft", "ArrowRight", "a", "A", "d", "D"].includes(event.key)) {
        event.preventDefault();
        movePlayer(["ArrowLeft", "a", "A"].includes(event.key) ? -1 : 1);
      }
      if ((event.key === " " || event.key === "Enter") && status !== "playing") {
        event.preventDefault();
        startGame();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [draw, movePlayer, startGame, status]);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  const handlePointerMove = (event) => {
    if (status !== "playing") return;
    const rect = canvasRef.current.getBoundingClientRect();
    const canvasX = ((event.clientX - rect.left) / rect.width) * WIDTH;
    playerXRef.current = Math.max(0, Math.min(WIDTH - PLAYER_WIDTH, canvasX - PLAYER_WIDTH / 2));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="game-shell relative w-full max-w-[640px] overflow-hidden rounded-[30px] border border-white/10 bg-[#090b1c]/90 p-3 shadow-2xl shadow-electric-purple/20 backdrop-blur-xl">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Ship It!</span>
        </div>
        <div className="flex gap-3 text-xs font-bold"><span className="text-sky-300">Commits {score}</span><span className="text-rose-300">Lives {"♥".repeat(lives)}{"♡".repeat(3 - lives)}</span></div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} onPointerMove={handlePointerMove} aria-label="Ship It game: collect blue commits and avoid red bugs" className="block aspect-[560/390] w-full touch-none" />
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050816]/75 p-6 text-center backdrop-blur-sm">
            <span className="mb-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-200">Playable portfolio</span>
            <h2 className="text-3xl font-black text-white">{status === "over" ? `You shipped ${score} commits.` : "Can you ship without bugs?"}</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">Collect blue commits. Avoid red bugs. Use ← →, A/D, your mouse, or the touch controls.</p>
            <button type="button" onClick={startGame} className="mt-6 rounded-xl bg-gradient-to-r from-sky-400 to-electric-purple px-6 py-3 text-sm font-black text-white shadow-lg shadow-electric-purple/30">{status === "over" ? "Play again" : "Start game"}</button>
          </div>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
        <button type="button" aria-label="Move left" onPointerDown={() => movePlayer(-1)} className="rounded-xl border border-white/10 bg-white/5 py-3 text-lg font-black text-white">←</button>
        <button type="button" aria-label="Move right" onPointerDown={() => movePlayer(1)} className="rounded-xl border border-white/10 bg-white/5 py-3 text-lg font-black text-white">→</button>
      </div>
      <p className="px-3 pb-1 pt-3 text-center text-[11px] font-medium text-white/40">A tiny game about the real job: ship value, catch regressions.</p>
    </motion.div>
  );
};

export default CodeRunnerGame;
