# serve-react-build

This is just an express app that will serve a react build, with compression and cors enabled (can be disabled in `.env`)

This script also supports browser side routing and stop `404` errors when users refresh or visit a spicific route, by checking if a file exist with the asked route, if no file is present for that route unstead of returning `404` this script will send `index.html`.