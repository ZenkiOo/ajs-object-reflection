const object = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(obj, sortList) {
  const orderedProps = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      orderedProps.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  orderedProps.sort((a, b) => {
    const keyA = a.key.toLowerCase(),
      keyB = b.key.toLowerCase();
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  sortList.reverse().forEach((item) => {
    const prop = orderedProps.find((el) => el.key === item);
    if (prop) {
      const propIdx = orderedProps.indexOf(prop);
      orderedProps.splice(propIdx, 1);
      orderedProps.unshift(prop);
    }
  });
  return orderedProps;
}
