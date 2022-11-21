const htmlText2json = (text: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  return doc.getElementsByTagName('h3');
};

export default htmlText2json;
