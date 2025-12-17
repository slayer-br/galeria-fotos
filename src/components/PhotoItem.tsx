import { Photo } from '@/src/types/Photo';
import Image from "next/image";

type Props = {
  photo: Photo;
  onClick: () => void;
};
export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className='cursor-pointer hover:opacity-80 relative'>
      <Image
        src={photo.url} // Usar a URL diretamente
        alt={photo.id.toString()}
        fill
        className="object-cover"
      />
    </div>
  );
};