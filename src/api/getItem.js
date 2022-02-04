export const getItem = async (item) => {
  try {
    const response = await fetch(`http://indecon.space/values/${item}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
