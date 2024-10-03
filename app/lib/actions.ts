export function formatLikes(likes: number): string {
  if (likes >= 1000000) {
    return (likes / 1000000).toFixed(1) + "M"; // For millions
  } else if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + "K"; // For thousands
  } else {
    return likes.toString(); // return as it is
  }
}
export async function fetchThoughts() {
  const response = await fetch(
    "http://localhost:3000/api/thoughts?pageNumber=1",
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch thoughts");
  }

  return response.json();
}
