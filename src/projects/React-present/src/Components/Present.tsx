/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Component that opens a present when clicked and shows another image.
 * 
 */
import { useState } from 'react'

const PresentOpener = () => {
  const ORIGINAL_IMAGE = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
  const NEW_IMAGE_URL = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

  const [imageSrc, setImageSrc] = useState(ORIGINAL_IMAGE);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (!isOpened) {
      setImageSrc(NEW_IMAGE_URL);
      setIsOpened(true);
    } else {
      setImageSrc(ORIGINAL_IMAGE);
      setIsOpened(false);
    }
  };
  return (
    <img
      src={imageSrc}
      onClick={handleClick}
    />
  );
};

export default PresentOpener;