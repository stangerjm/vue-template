export default function (promise) {
  return promise
    .then(data => [data, null])
    .catch(err => [null, err]);
}
