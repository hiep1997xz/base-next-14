import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import classNames from 'classnames';

type Props = {
  src: string | StaticImport;
  alt?: string;
  className?: string;
  imageClass?: string;
  aspectRatio: string;
};

const ImageCustom = (props: Props) => {
  const { src = '', alt = '', className, imageClass, aspectRatio } = props;

  return (
    <div
      className={classNames(
        'relative w-full h-auto',
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}>
      <Image
        src={src}
        priority
        alt={alt}
        fill
        className={classNames('object-cover', imageClass)}
        sizes="(max-width: 600px) 100%, (max-width: 1024px) 70vw, 50vw"
      />
    </div>
  );
};

export default ImageCustom;
