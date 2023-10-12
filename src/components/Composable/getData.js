export default async function getData(
  url,
  MountedCheck,
  container,
  MountedResult
) {
  try {
    const waitMounting = false;
    await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        container.value = data;
        MountedCheck
          ? (MountedResult.value = true)
          : waitMounting;
      });
  } catch (error) {
    console.log(error.message);
  }
}
