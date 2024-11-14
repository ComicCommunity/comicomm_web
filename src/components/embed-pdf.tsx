import React, { useEffect } from 'react';

const EmbedPdf = ({ src, width, height }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://deno.land/x/embed_pdf@v1.2.0/mod.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <embed src={src} type="application/pdf" width={width} height={height} />
  );
};

export default EmbedPdf;