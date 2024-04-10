```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: Note right of browser: SPA JavaScript file. Handles client-side interactions and note rendering. Loads data from '/exampleapp/data.json' on initialization, renders notes on the page. submits new notes to '/exampleapp/new_note_spa'. Logs server responses.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "this is new ", "date": "2024-04-10T16:18:11.026Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes