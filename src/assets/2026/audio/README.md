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

## Menu sound effects

`sfx-confirm.*` plays when going forward in the menu (the Food and Drinks buttons on the home page). `sfx-back.*` plays on the "TurtleCon 2026" back link. `sfx-cursor.*` plays on the jump links on the drinks page. They only play while sound is on (the button in the top-right corner).

Source: [Interface SFX Pack 1](https://obsydianx.itch.io/interface-sfx-pack-1) by obsydianx, CC0. We use `Confirm_tones/style2/confirm_style_2_echo_001.ogg`, `Back_tones/style2/back_style_2_echo_001.ogg` and `Cursor_tones/cursor_style_2.ogg`.

The originals are 6 s long but fade out by about 2 s (the cursor blip by about 0.8 s), so we trim to 2 s (0.8 s for the cursor) with a short fade-out and encode each as Opus (48 kbps, about 16-18 KB) plus an AAC fallback (64 kbps), for the same reason as the music:

```sh
ffmpeg -i original.ogg -t 2 -af "afade=t=out:st=1.7:d=0.3" -map_metadata -1 -c:a libopus -b:a 48k -vbr on -application audio sfx-NAME.opus
ffmpeg -i original.ogg -t 2 -af "afade=t=out:st=1.7:d=0.3" -map_metadata -1 -c:a aac -b:a 64k -movflags +faststart sfx-NAME.m4a
```
