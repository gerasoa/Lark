"use client";

import { useEffect, useRef, useState } from "react";

type AudioClipPlayerProps = {
  videoId: string;
  start: number;
  end: number;
  transcript: string;
};

const formatTime = (seconds: number) => {
  const roundedSeconds = Math.round(seconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const remainingSeconds = roundedSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

export default function AudioClipPlayer({ videoId, start, end, transcript }: AudioClipPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsedRef = useRef(0);
  const startedAtRef = useRef(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = end - start;

  const sendCommand = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");
  };

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetClip = () => {
    clearTimer();
    sendCommand("pauseVideo");
    sendCommand("seekTo", [start, true]);
    elapsedRef.current = 0;
    setProgress(0);
    setIsPlaying(false);
  };

  const pauseClip = () => {
    const elapsed = Math.min((performance.now() - startedAtRef.current) / 1000, duration);
    elapsedRef.current = elapsed;
    setProgress((elapsed / duration) * 100);
    clearTimer();
    sendCommand("pauseVideo");
    setIsPlaying(false);
  };

  const playClip = () => {
    if (elapsedRef.current >= duration) elapsedRef.current = 0;
    sendCommand("seekTo", [start + elapsedRef.current, true]);
    sendCommand("playVideo");
    startedAtRef.current = performance.now() - elapsedRef.current * 1000;
    setIsPlaying(true);

    timerRef.current = setInterval(() => {
      const elapsed = Math.min((performance.now() - startedAtRef.current) / 1000, duration);
      elapsedRef.current = elapsed;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) resetClip();
    }, 50);
  };

  useEffect(() => () => clearTimer(), []);

  const toggleClip = () => {
    if (!isReady) return;
    if (isPlaying) pauseClip();
    else playClip();
  };

  return <div className="audio-clip">
    <iframe
      ref={iframeRef}
      className="audio-youtube-source"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&playsinline=1&rel=0`}
      title="Audio source for the listening clip"
      allow="autoplay; encrypted-media"
      aria-hidden="true"
      tabIndex={-1}
      onLoad={() => {
        setIsReady(true);
        sendCommand("seekTo", [start, true]);
      }}
    />

    <div className="audio-player-shell">
      <button type="button" onClick={toggleClip} disabled={!isReady} aria-label={isPlaying ? "Pause audio clip" : "Play audio clip"}>
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
      </button>
      <div className="audio-player-main">
        <div className="audio-player-meta"><strong>{isPlaying ? "Playing clip" : "Listening clip"}</strong><span>{formatTime((progress / 100) * duration)} / {formatTime(duration)}</span></div>
        <div className="audio-progress" role="progressbar" aria-label="Audio clip progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>

    <p className="audio-transcript"><span>Transcript</span>“{transcript}”</p>
  </div>;
}
