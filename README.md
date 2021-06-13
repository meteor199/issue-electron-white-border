
Electron sometimes displays a white bar of about 10px in fullscreen mode.

OS: Windows 10 21H1 (19043.1052)
electron version: 12.0.11

Steps to reproduce:
1. When creating a window, set `maximizable` and `resizable` to false.
2. Set these two to `true` later, and then call the `maximize` method 

