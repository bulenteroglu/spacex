export default async function fetchLaunches() {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/launches');

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
