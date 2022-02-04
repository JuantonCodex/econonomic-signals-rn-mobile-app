export const getList = async () => {
  try {
    const response = await fetch('http://indecon.space/last');
    const json = await response.json();
    return json;
  } catch (error) {
    return (error);
  }
}