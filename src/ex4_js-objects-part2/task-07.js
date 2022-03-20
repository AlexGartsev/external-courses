const restrictionLengthLine = (line, numeric) => {
  if (line.length > numeric) {
    return (line.slice(0, numeric - 1) + '\u2026'); //eslint-disable-line
  }
  return line;
};

module.exports = restrictionLengthLine;
