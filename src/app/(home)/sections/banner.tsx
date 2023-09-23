import Image from 'next/image';
import BannerImage from '/public/banner.png';

export default function Banner() {
  return <Image src={BannerImage} alt='banner' width={1920} height={400} />;
}
