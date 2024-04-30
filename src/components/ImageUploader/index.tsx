import Icons from '../Icons';

interface ImageUploaderProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader = ({ onChange }: ImageUploaderProps) => {
  return (
    <div className="">
      <label htmlFor="doc" className="flex items-center flex-col pt-8 pb-7 gap-2 bg-background border cursor-pointer">
        <Icons.uploadImage size={50} />
        <p className="text-sm text-muted-foreground">Pilih gambar dengan ratio 9:16</p>
        <input type="file" id="doc" name="doc" accept="image/*" hidden onChange={onChange} />
      </label>
    </div>
  );
};

export default ImageUploader;
