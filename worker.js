const { exec } = require("child_process");

function convertToHLS(input, output) {
  exec(
    `ffmpeg -i "${input}" \
    -preset veryfast \
    -c:v libx264 \
    -c:a aac \
    -f hls \
    -hls_time 6 \
    -hls_playlist_type vod \
    "${output}/master.m3u8"`,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log("HLS oluşturuldu.");
    }
  );
}

convertToHLS("./video.mp4", "./output");
