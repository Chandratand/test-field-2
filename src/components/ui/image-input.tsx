import { useState } from 'react';
import Icons from '../Icons';
import { Label } from './label';

const ImageInput = () => {
  return (
    <div className="">
      <Label htmlFor="doc" className="flex items-center flex-col pt-8 pb-7 gap-2 bg-background border cursor-pointer">
        <Icons.uploadImage size={50} />
        <p className="text-sm text-muted-foreground">Pilih gambar dengan ratio 9:16</p>
        <input type="file" id="doc" name="doc" accept="png, jpg" hidden />
      </Label>
    </div>
  );
};

export default ImageInput;
