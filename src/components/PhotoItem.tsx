import { Photo } from '@/src/types/Photo';

type Props = {
  photo: Photo;
  onClick: () => void;
};
export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className='cursor-pointer hover:opacity-80 relative h-48 overflow-hidden'>
      <img
        src={photo.url}
        alt={photo.id.toString()}
        className="w-full h-full object-cover"
      />
    </div>
  );
};