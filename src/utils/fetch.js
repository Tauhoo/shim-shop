export default async () =>
  fetch("https://panjs.com/ywc.json")
    .then(async res => await res.json())
    .then(result => ({ status: "success", result }))
    .catch(detail => ({ status: "error", detail }))
