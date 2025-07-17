Extension to add is Live Server

Connect both your PC and Android to the same Wi-Fi network.

Find your computer’s local IP address:

On Windows: Run ipconfig in Command Prompt and look for something like IPv4 Address.
On macOS/Linux: Use ifconfig or ip a.
Start Live Server in VS Code:

Right-click your index.html and choose "Open with Live Server".
It will open something like http://127.0.0.1:5500.
Replace 127.0.0.1 with your local IP address:

For example: http://192.168.1.100:5500.
Open that URL on your Android phone’s browser (Chrome or Edge recommended).

If your PWA is properly configured (with a manifest.json and service worker), you should see an “Install” or “Add to Home Screen” prompt.