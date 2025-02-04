export async function get(url: string) {
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  //unknown type is more type safely than any
  const data = (await response.json()) as unknown;
  return data;
}
