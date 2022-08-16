import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import { Modal } from "./Modal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false);

  return (
    <>
    <div>
      <h2>Modal 1</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Lorem ipsum dolor</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
    </div>

    <div>
      <h2>Modal Contact</h2>
      <button onClick={openModalContact}>Modal Contact</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
    </div>
    </>
  );
};
