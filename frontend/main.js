import {
  html,
  render,
  useEffect,
  useState,
} from "./htm@3.1.1-preact-standalone.module.js"; // https://unpkg.com/htm@3.1.1/preact/standalone.module.js

const wsUri =
  `ws://${window.location.host}${window.location.pathname}api/events-ws`;

function updateOnEvent(setWsOk, setLastTs) {
  const socket = new WebSocket(wsUri);
  socket.addEventListener("open", (event) => {
    console.log("WebSocket: open");
    setWsOk(true);
  });
  socket.addEventListener("message", (event) => {
    console.log("WebSocket: message from server");
    setLastTs?.(event.data);
  });
  socket.addEventListener("error", (event) => {
    console.log("WebSocket: error event", event);
    setWsOk(false);
  });
  socket.addEventListener("close", (event) => {
    console.log("WebSocket: close event", event);
    setWsOk(false);
    // reload in 1s
    setTimeout(() => window.location.reload(), 1000);
  });
}

function Btn({ id }) {
  const onclick = () =>
    fetch(`/api/element/${id}`).then(async (resp) =>
      console.log(await resp.text())
    );
  return html`<button onclick=${onclick}>Button #${id}</button>`;
}

function App() {
  const [wsOk, setWsOk] = useState(true);
  // example
  const [lastTs, setLastTs] = useState(0);

  useEffect(async () => {
    updateOnEvent(setWsOk, setLastTs);
  }, []);
  const backendKo = wsOk
    ? null
    : html`<div class="ko">The backend is down !</div>`;
  return html`
    ${backendKo}
    <div class="app">Last = ${lastTs}</div>
    <${Btn} id="1"/>
    <${Btn} id="22"/>
  `;
}

render(html`<${App}/>`, document.body);
