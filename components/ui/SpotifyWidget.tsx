"use client";

import { useEffect, useState } from "react";

interface SpotifyData {
    isPlaying:  boolean;
    title:      string | null;
    artist:     string;
    albumImage: string;
    songUrl:    string;
}

export function SpotifyWidget() {
    const [data,    setData]    = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSpotify() {
            try {
                const res = await fetch(`/api/spotify?t=${Date.now()}`);
                const json = await res.json();
                if (json.title) setData(json);
            } catch {
                // silently fail
            } finally {
                setLoading(false);
            }
        }
        fetchSpotify();
        const interval = setInterval(fetchSpotify, 10_000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl"
                 style={{ background: "rgba(10,61,107,0.3)", border: "1px solid rgba(86,207,225,0.15)" }}>
                <div className="w-8 h-8 rounded-md animate-pulse" style={{ background: "rgba(86,207,225,0.2)" }} />
                <div className="space-y-1.5">
                    <div className="w-24 h-2 rounded animate-pulse" style={{ background: "rgba(86,207,225,0.2)" }} />
                    <div className="w-16 h-2 rounded animate-pulse" style={{ background: "rgba(86,207,225,0.1)" }} />
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <a href={data.songUrl} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 hover:scale-105 group"
           style={{
               background: "rgba(10,61,107,0.35)",
               border: "1px solid rgba(86,207,225,0.2)",
               backdropFilter: "blur(12px)",
               boxShadow: data.isPlaying ? "0 0 20px rgba(0,245,212,0.1)" : "none",
           }}>
            {/* Album art */}
            <div className="relative w-9 h-9 rounded-md overflow-hidden shrink-0">
                {data.albumImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={data.albumImage} alt={data.title ?? "album"} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--c-mid)" }}>🎵</div>
                )}
            </div>

            {/* Text */}
            <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="#1DB954">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <p className="text-xs font-mono truncate max-w-[140px]" style={{ color: "var(--c-biolum)" }}>
                        {data.isPlaying ? "Now Playing" : "Last Played"}
                    </p>
                </div>
                <p className="text-ocean-sand text-xs font-semibold truncate max-w-[140px] group-hover:text-ocean-foam transition-colors">
                    {data.title}
                </p>
                <p className="text-ocean-mist text-xs truncate max-w-[140px]">{data.artist}</p>
            </div>

            {/* Equalizer bars when playing */}
            {data.isPlaying && (
                <div className="flex items-end gap-0.5 h-4 shrink-0">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-0.5 rounded-full"
                             style={{
                                 background: "var(--c-biolum)",
                                 animation: `equalizerBar${i} ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
                                 height: `${40 + i * 20}%`,
                             }} />
                    ))}
                </div>
            )}
        </a>
    );
}