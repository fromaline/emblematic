function base64SVG(svgContents) {
  return Buffer.from(
    svgContents
      .replace('\n', ''),
  ).toString('base64')
}

export default base64SVG
