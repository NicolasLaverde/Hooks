import { useRef, useState } from "react"
import Modal from "./Modal"

export default function Places ({
  title,
  places,
  fallbackText,
  onSelectPlace,
  isLoading,
  loadingText
}) {
  const modalRef = useRef(null)
  const [isOpenModal, setIsOpenModal] = useState()

  const handleOnClose = () => {
    setIsOpenModal(false)
  }
  return (
    <section className="places-category">
      <h2>{title}</h2>
        <button onClick={() => setIsOpenModal(prevValue => !prevValue)}>
          Use of Ref ---
        </button>
      <Modal ref={modalRef} open={isOpenModal} onClose={handleOnClose} >
          Hi this is a test
      </Modal>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
