export default async function fetchLaunches(value?: string) {
  try {
    const response = await fetch(
      value
        ? `https://api.spacexdata.com/v3/launches?launch_year=${value}`
        : 'https://api.spacexdata.com/v3/launches',
    );

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
