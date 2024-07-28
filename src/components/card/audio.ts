const getAudioDuration = (audioSrc: string) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(audioSrc);

    const setAudioDuration = () => {
      resolve(audio.duration);
    };

    const handleError = (error: any) => {
      reject(error);
    };

    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("error", handleError);
  });
};

// Usage example:
getAudioDuration("path/to/your/audio/file.mp3")
  .then((duration) => {
    console.log(`Audio duration: ${duration} seconds`);
  })
  .catch((error) => {
    console.error("Error getting audio duration:", error);
  });
