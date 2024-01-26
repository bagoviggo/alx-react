const getImmutableObject = require('./0-fromjs'); // Assuming the file is in the same directory

describe('getImmutableObject', () => {
  it('should convert a plain object to an Immutable Map', () => {
    const inputObject = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132,
    };

    const result = getImmutableObject(inputObject);

    expect(result).toHaveProperty('size', 4);
    expect(result.get('fear')).toBe(true);
    expect(result.get('smell')).toBe(-1033575916.9145899);
    expect(result.get('wall')).toBe(false);
    expect(result.get('thing')).toBe(-914767132);
  });

  // Add more test cases as needed
});

