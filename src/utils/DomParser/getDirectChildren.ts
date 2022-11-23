export const getDirectChildren = <T extends Element>(elm: T, sel: string) => {
  const ret: Element[] = [];
  Array.from(elm.children, (child) => {
    if (child.matches(sel)) ret.push(child);
    return child;
  });
  return ret;
};
