export async function getParadas(data, turno) {
  let url = "http://localhost:5000/api/paradas/";

  const params = new URLSearchParams();
  if (data) params.append("data", data);
  if (turno) params.append("turno", turno);

  if (params.toString()) {
    url += "?" + params.toString();
  }

  const response = await fetch(url);
  const dataJson = await response.json();
  return dataJson;
}
