/* global AgoraRTC */

import React, { useState, useEffect } from "react";
import AgoraChat from "./AgoraChat";
import "../prova.css";

function AgoraPublisher() {
  const [client, setClient] = useState(null);
  const [audioTrack, setAudioTrack] = useState(null);
  const [videoTrack, setVideoTrack] = useState(null);
  const [isMicPaused, setIsMicPaused] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isVideoStopped, setIsVideoStopped] = useState(false);
  const [videoButtonText, setVideoButtonText] = useState("Pause Video");

  const joinAndDisplayLocalStream = async () => {
    const APP_ID = "7ca068621c7e44f79e19b0f0def488ec";
    const TOKEN =
      "007eJxTYLAQVvqo/P1GsJ3wzvruo5lhYnx+jVd9JvDPnlH3tsu+/YECg3lyooGZhZmRYbJ5qolJmrllqqFlkkGaQUpqmomFRWpyUR5rakMgI4OD6zMmRgYIBPE5GQKK8lPKUouKUxkYAIOCICA=";
    const CHANNEL = "Prodverse";

    // Initialize the Agora RTC client
    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    // Initialize and join a channel
    await client.join(APP_ID, CHANNEL, TOKEN, null);

    // Create and initialize the video and audio tracks
    const [audioTrack, videoTrack] =
      await AgoraRTC.createMicrophoneAndCameraTracks();
    setAudioTrack(audioTrack);
    setVideoTrack(videoTrack);

    // Play the local video track
    videoTrack.play("agora-publisher");

    // Publish the tracks to the channel
    await client.publish([audioTrack, videoTrack]);

    setClient(client);
    setAudioTrack(audioTrack);
    setVideoTrack(videoTrack);
  };
  const toggleMic = () => {
    if (audioTrack) {
      if (isMicPaused) {
        audioTrack.setEnabled(true);
      } else {
        audioTrack.setEnabled(false);
      }
      setIsMicPaused(!isMicPaused);
    }
  };

  const toggleVideo = async () => {
    if (isVideoStopped) {
      await videoTrack.play("agora-publisher");
      setVideoButtonText("Pause Video");
    } else {
      videoTrack.stop();
      setVideoButtonText("Start Video");
    }
    setIsVideoStopped(!isVideoStopped);
  };
  useEffect(() => {
    const joinBtn = document.getElementById("join-btn");
    if (joinBtn) {
      joinBtn.addEventListener("click", async () => {
        await joinAndDisplayLocalStream();
        document.getElementById("join-btn").style.display = "none";
        document.getElementById("stream-controls").style.display = "flex";
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      if (joinBtn) {
        joinBtn.removeEventListener("click", joinAndDisplayLocalStream);
      }
    };
  }, []);

  return (
    <div>
      <div className="video-container">
        <video id="agora-publisher" autoPlay muted />
      </div>
      <button className="text-white" id="join-btn">
        Join Stream
      </button>
      <div id="stream-controls" style={{ display: "none" }}>
        <button className="text-white" onClick={toggleMic}>
          {isMicPaused ? "Unmute Mic" : "Mute Mic"}
        </button>
        <button className="text-white font-bold" onClick={toggleVideo}>
          {isVideoPaused ? "Resume Video" : "Pause Video"}
        </button>
        {/* Add volume controls and other stream controls here */}
      </div>
      <AgoraChat />
    </div>
  );
}

export default AgoraPublisher;
