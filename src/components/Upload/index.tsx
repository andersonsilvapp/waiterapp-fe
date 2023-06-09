import { ChangeEvent, useState } from 'react';
import { Icon } from '../Icon';
import { Container } from './styles';

export function Upload() {
  const [imagePreview, setImagePreview] = useState<string | null>();

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    if (file && file.type.includes('image')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <Container>
      {imagePreview ? (
        <>
          <div>
            <img src={imagePreview} />
          </div>
          <button
            type="button"
            className="close"
            onClick={() => setImagePreview('')}>
            Remover imagem
          </button>
        </>
      ) : (
        <label htmlFor="file">
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChangeImage}
          />
          <Icon type="upload" />
        </label>
      )}
    </Container>
  );
}
