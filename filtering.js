let allData;
const fetchData = async (callback) => {
  await fetch("https://63aa73707d7edb3ae628645c.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

fetchData((data) => ((allData = data), console.log(allData)));

// let allData;

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://63aa73707d7edb3ae628645c.mockapi.io/users"
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     allData = data;
//     console.log(allData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();
