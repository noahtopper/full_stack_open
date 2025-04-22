```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser executes the callback function that adds a new note and redraws the list

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

```