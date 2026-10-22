import Image from "next/image";

// The author's actual public Google avatar; their name is rendered alongside it.
export default function ReviewAvatar({ src }: { src: string }) {
  return <Image className="review-avatar" src={src} alt="" width={48} height={48} unoptimized />;
}
