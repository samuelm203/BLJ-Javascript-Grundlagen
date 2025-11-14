Javascript Grundlagen – Übungen und Beispiele

Overview
This repository contains small, focused exercises used to learn the basics of JavaScript, HTML, and CSS. Each exercise lives in its own folder and is usually driven by a standalone HTML file that you can open directly in a browser. No build tools or external dependencies are required.

How to run
- Use a modern browser (Chrome, Edge, Firefox, or Safari).
- Navigate to the desired exercise folder and open its HTML file (usually index.html) by double‑clicking it or via File > Open in your browser.
- Because these examples are static, you can run them from the local filesystem; no server is needed.

Folder overview (selected)
- 00_Node/ – Intro scripts for Node basics (if used in your class context).
- 01_HelloWorld/ – Basic “Hello World” example. Open 01_HelloWorld/index.html.
- 02_Sprachelemente/ – Language elements demonstration. Open 02_Sprachelemente/index.html.
- 03_Ereignisbehandlung/ – Event handling demos. Open 03_Ereignisbehandlung/index.html or event_bubbling.html.
- 04_DOM/ – DOM manipulation tasks:
  - Einkaufsliste/ – Simple shopping list app (index.html, script.js, style.css).
  - Parser/ – Parsing demo (index.html, parser.js, style.css).
- 05_Formulare/ – Form handling demos (Tickets, Teste_dich).
- 06_WebStorage/ – Local storage usage (index.html, script.js, style.css, Pictures/).
- 07_Canvas/ – Canvas drawings and playground (Medaillen, Playground).
- 08_AsynchroneProgrammierung/ – Async programming examples (index.html).
- 09_AufgabeSchachbrett/ – Programmatically generated chessboard grid.
- 10_AufgabeFarbenAendern/ – Live background and text color picker.
- 11_Pizza/ – Pizza configuration exercise (pizza.html, script.js).
- 12_Bälle/ – Simple ball/asset interaction demo (baelle.html with images).
- 13_Notizen/ – UI mockup for a notes app (HTML/CSS only).

Exercise notes and usage
- 09_AufgabeSchachbrett
  - Open 09_AufgabeSchachbrett/index.html.
  - script.js dynamically creates an 8×8 grid of divs with alternating classes "white" and "black"; style.css arranges the grid and colors the squares.
  - Tip: The current .black color is set to a red tone (#f86a6a). Change it in style.css if you want traditional colors.

- 10_AufgabeFarbenAendern
  - Open 10_AufgabeFarbenAendern/index.html.
  - Move the two color pickers to change the page background and text colors live. Logic is in script.js using input event listeners.

- 11_Pizza
  - Open 11_Pizza/pizza.html.
  - Interactions are handled in script.js. This exercise demonstrates basic DOM access and event handling for a small UI.

- 12_Bälle
  - Open 12_Bälle/baelle.html.
  - Uses local image assets (ball.png, kreuz.png). Ensure these images remain in the same folder as the HTML.

- 13_Notizen (UI only)
  - Open 13_Notizen/index.html.
  - The UI is implemented purely with HTML and CSS (style.css). There is no JavaScript logic to persist or add notes; it’s a visual mockup.

Troubleshooting
- If styles do not load, verify that index.html links to the correct stylesheet name and that files are in the expected folders.
- If scripts seem inactive, check the browser console (F12) for errors. Ensure file names and paths (including spaces and umlauts) match exactly.
- Some browser extensions or security settings can block local file access; try a different browser if assets don’t appear.

Recent changes (2025‑11‑13)
- 09_AufgabeSchachbrett/script.js: Implemented dynamic 8×8 board generation with alternating colors.
- 10_AufgabeFarbenAendern/script.js: Simplified and fixed the live color update logic.
- 13_Notizen: Moved inline styles into 13_Notizen/style.css and cleaned up the HTML; UI remains the same.

License
This repository is intended for educational use in a classroom or self‑study context. Unless a specific license is provided by your institution, treat this as instructional material.
