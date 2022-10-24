export const getApiResource = async url => {
  try {
    const results = await fetch(url);

    if (!results.ok) {
      console.error('Error api: ', results.status);
    }
  
    return await results.json();
  } catch(error) {
    console.error('Error api: ', error);
  }
}