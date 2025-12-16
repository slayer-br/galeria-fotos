import { Photo } from '@/src/types/Photo';
import Image from "next/image";
// import imageLoader from '@/src/utils/imageLoader'; // Remover este import

type Props = {
  photo: Photo;
  onClick: () => void;
};
export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className='cursor-pointer hover:opacity-80 relative'>
      <Image
        src={photo.url}
        alt={photo.id.toString()}
        fill
        className="object-cover"
        // loader={imageLoader} // Remover esta prop
      />
    </div>
  );
};