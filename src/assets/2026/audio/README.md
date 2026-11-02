# Audio

"Morning Coffee" by lesiakower, from Pixabay: https://pixabay.com/music/beats-morning-coffee-396750/ (credited in the site footer). Licensed for use under the [Pixabay Content License](https://pixabay.com/service/license-summary/). Original file: `lesiakower-morning-coffee-396750.mp3`, 256 kbps MP3, 2:33, 4.9 MB.

## Encoded files

- `morning-coffee.opus` is Ogg Opus at 64 kbps VBR, 1.4 MB. This is the primary source.
- `morning-coffee.m4a` is AAC-LC at 96 kbps, 1.9 MB. It is the fallback for browsers that can't play Ogg Opus (older Safari). It is kept on purpose; see `../../README.md`.

Metadata was stripped. Encoded with ffmpeg:

```sh
ffmpeg -i original.mp3 -map_metadata -1 -c:a libopus -b:a 64k -vbr on -application audio morning-coffee.opus
ffmpeg -i original.mp3 -map_metadata -1 -c:a aac -b:a 96k -movflags +faststart morning-coffee.m4a
```
