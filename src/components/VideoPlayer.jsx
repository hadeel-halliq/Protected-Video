import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";


export default function VideoPlayer({ videoSrc, posterSrc }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const initializePlayer = () => {
      if (!playerRef.current && videoRef) {
        playerRef.current = videojs(videoRef.current, {
          autoplay: false,
          controls: true,
          fluid: true,
          preload: "auto",
          poster: posterSrc,
          sources: [{ src: videoSrc, type: "application/x-mpegURL" }],
          controlBar: { pictureInPictureToggle: false },
        });
      }
    };
    const timeId = setTimeout(initializePlayer, 100) ;
    return () => {
      if (playerRef.current) {
        clearTimeout(timeId)
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoSrc, posterSrc]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered vjs-theme-city"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}


  // useLayoutEffect(() => {
  //   if (!videoRef.current) return;

  //   if (!playerRef.current) {
  //     playerRef.current = videojs(videoRef.current, {
  //       autoplay: false,
  //       controls: true,
  //       fluid: true,
  //       preload: "auto",
  //       poster: posterSrc,
  //       sources: [{ src: videoSrc, type: "application/x-mpegURL" }],
  //       controlBar: { pictureInPictureToggle: false },
  //     });
  //   }

  //   return () => {
  //     if (playerRef.current) {
  //       playerRef.current.dispose();
  //       playerRef.current = null;
  //     }
  //   };
  // }, [videoSrc, posterSrc]);