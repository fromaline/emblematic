const base64SVG = (svgContents) =>
  Buffer.from(
    svgContents
      .replace('\n', ''),
  ).toString('base64');

export default base64SVG;
