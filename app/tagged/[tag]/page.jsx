import Gallery from "@/app/components/Gallery/Gallery";

export default function Tagged(searchTag) {
  return <Gallery tag={searchTag.params.tag} />;
}
