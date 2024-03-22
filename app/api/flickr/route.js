export async function GET(req) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);

  const apiUrl = searchParams.get("tag")
    ? `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&size=10&tags=${searchParams.get(
        "tag"
      )}`
    : `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&size=10`;

  const res = await fetch(apiUrl, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();
  // Extracting image URLs from the response
  const imageUrls = data.items.map((item) => item.media.m);
  return Response.json(imageUrls);
}
