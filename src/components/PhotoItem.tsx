import { Photo } from '@/src/types/Photo';
import Image from "next/image"; // Adicionar import do Image

type Props = {
  photo: Photo;
  onClick: () => void;
};
export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className='cursor-pointer hover:opacity-80 relative'>
      <Image
        src={photo.url}
        alt={photo.id.toString()} // Usar photo.id para o alt
        fill
        className="object-cover"
      />
    </div>
  );
};