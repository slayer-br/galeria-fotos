

type Props = {
  image: string;
  closeModal: () => void;
};
export const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 flex justify-center items-center bg-black/90 z-50"
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="Imagem em tela cheia"
            className="object-contain w-full h-full"
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
