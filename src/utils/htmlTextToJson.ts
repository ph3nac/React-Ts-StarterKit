const htmlTextToJson = (text: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const bodyElement = doc.querySelector('dl');
  const Bars = bodyElement?.childNodes;
  // Bars?.forEach()
  return bodyElement;
};

export default htmlTextToJson;
