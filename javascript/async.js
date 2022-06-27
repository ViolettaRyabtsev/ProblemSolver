console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

const getApi = () => {
  return new Promise((res, rej) => {
    if (res) {
      console.log("do it ");
    }
  });
};

console.log(getApi());

const promise1 = new Promise((resolve, rej) => {
  setTimeout(resolve, 100, "hi");
});

const promise2 = new Promise((resolve, rej) => {
  setTimeout(resolve, 1000, "hi 2");
});

const promise3 = new Promise((resolve, rej) => {
  setTimeout(resolve, 10000, "hi 3");
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => response.json());
  })
).then((results) => console.log(results[0]));
