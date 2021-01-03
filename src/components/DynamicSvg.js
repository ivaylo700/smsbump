import React, { useState, useEffect, useRef } from 'react';

export const DynamicSvg = ({ name, width, height }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../static/formPreview/${name}.svg`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <img src={ImportedIcon} alt="themeImage" width={width} height={height} />;
  }

  return null;
};