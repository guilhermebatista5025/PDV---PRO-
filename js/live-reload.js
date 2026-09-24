(() => {
  if (!("EventSource" in window)) return;
  const source = new EventSource("/__live-reload");
  let timer;
  source.onmessage = event => {
    if (event.data !== "reload") return;
    clearTimeout(timer);
    timer = setTimeout(() => window.location.reload(), 120);
  };
})();
