import { ChangeEvent, useState } from 'react';
import { Icon } from '../Icon';
import { Container } from './styles';

interface UploadProps {
  onChange: (event: File | null) => void;
}

export function Upload({ onChange }: UploadProps) {
  const [imagePreview, setImagePreview] = useState<string | null>();

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    onChange(file);

    if (file && file.type.includes('image')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  function handleRemoveImage() {
    setImagePreview('');
    onChange(null);
  }

  return (
    <Container>
      {imagePreview ? (
        <>
          <div>
            <img src={imagePreview} />
          </div>
          <button type="button" className="close" onClick={handleRemoveImage}>
            Remover imagem
          </button>
        </>
      ) : (
        <label htmlFor="image">
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChangeImage}
          />
          <Icon type="upload" />
        </label>
      )}
    </Container>
  );
}
