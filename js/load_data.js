// Function to fetch and parse the JSON data
async function loadJSON(filePath) {
  try {
    const response = await fetch(filePath);

    // Check if the response was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON (returns the JavaScript object Promise)
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Could not load JSON file:", error);
  }
}

export { loadJSON };
