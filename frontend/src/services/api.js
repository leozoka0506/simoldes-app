export async function getParadas() {
    const response = await fetch("http://localhost:5000/api/paradas/");
    const data = await response.json();
    return data;
  }
  