import Image from "next/image";

type Props = {
  image: string;
  closeModal: () => void;
};
export const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90 z-50"
      >
        <div className="relative w-full h-full">
          <Image
            src={image} // Usar a URL diretamente
            alt="Imagem em tela cheia"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        onClick={closeModal}
        className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl z-50"
      >
        x
      </div>
    </>
  );
};
