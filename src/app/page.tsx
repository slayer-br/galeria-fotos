"use client";

import { PhotoItem } from "@/src/components/PhotoItem";
import { Modal } from "@/src/components/Modal";
import { photoList } from "@/src/data/photoList";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const openModal = (id: number) => {
    const photo = photoList.find((p) => p.id === id);
    if (photo) {
      setSelectedPhoto(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto("");
  };

  return (
    <div className="">
      <h1>Fotos Intergalácticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)} />
        ))}
      </section>
      {showModal && <Modal image={selectedPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default Page;
