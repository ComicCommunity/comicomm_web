import React, { useEffect } from 'react';

const EmbedPdf = ({ src, width, height }) => {
  return (
    <iframe src={src} width={width} height={height} />
  );
};

export default EmbedPdf;
