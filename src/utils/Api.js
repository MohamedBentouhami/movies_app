const API_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

export const fetchData = async (title) => {
  if (!title) return [];
  try {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
