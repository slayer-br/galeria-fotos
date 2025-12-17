

type Props = {
  image: string;
  closeModal: () => void;
};
export const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div
        onClick={closeModal}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 50,
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={image}
            alt="Imagem em tela cheia"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div
        onClick={closeModal}
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.25rem',
          width: '2.5rem',
          height: '2.5rem',
          cursor: 'pointer',
          color: 'white',
          fontSize: '3rem',
          zIndex: 50,
        }}
      >
        x
      </div>
    </>
  );
};
