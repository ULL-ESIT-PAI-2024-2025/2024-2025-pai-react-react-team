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
    }
    if (isOpened) {
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