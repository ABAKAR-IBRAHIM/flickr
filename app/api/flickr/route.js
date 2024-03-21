export async function GET() {
  const res = await fetch(
    `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&size=10`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const data = await res.json();
  // Extracting image URLs from the response
  const imageUrls = data.items.map((item) => item.media.m);
  return Response.json(imageUrls);
}
