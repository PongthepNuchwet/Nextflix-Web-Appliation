"use client";
import React from 'react'
import YouTube from 'react-youtube';

type MovieYoutubeEmbedProps = {
    videoId: string
}

const opts = {
    width: '100%',
    height: '400px',
    playerVars: {
        autoplay: 1,
    },
};
export default function MovieYoutubeEmbed({ videoId }: MovieYoutubeEmbedProps) {
    return (
        <YouTube videoId={videoId} opts={opts} />
    )
}
