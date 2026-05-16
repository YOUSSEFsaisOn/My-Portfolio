'use client'

import React, { useId } from 'react'

interface TextVideoMaskProps {
  videoUrl?: string
  text?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string | number
  fontStyle?: string
  letterSpacing?: string
  backgroundColor?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
}

export default function TextVideoMask(props: TextVideoMaskProps) {
  const {
    videoUrl = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    text = "VIDEO",
    fontSize = "120px",
    fontFamily = "var(--font-kanit), sans-serif",
    fontWeight = 900,
    fontStyle = "normal",
    letterSpacing = "-0.05em",
    backgroundColor = "transparent",
    autoplay = true,
    loop = true,
    muted = true,
    className
  } = props

  const id = useId()
  const maskId = `mask-${id.replace(/:/g, '')}`

  return (
    <div 
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{
                fontSize,
                fontFamily,
                fontWeight,
                fontStyle,
                letterSpacing
              }}
            >
              {text}
            </text>
          </mask>
        </defs>
      </svg>
      <video
        src={videoUrl}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mask: `url(#${maskId})`,
          WebkitMask: `url(#${maskId})`
        }}
      />
    </div>
  )
}
