var LogScale = require('../log_scale.js');

describe('LogScale', function() {
  var logScale;
  beforeEach(function() {
    logScale = new LogScale(1, 100);
  });

  describe('constructor', function() {
    it('saves the range values given', function() {

      expect(logScale.minValue).toBe(1);
      expect(logScale.maxValue).toBe(100);
    });
  });

  describe('getRange', function() {
    it('returns the range of the min/max values', function() {
      expect(logScale.getRange()).toBe(99);
    });
  });

  describe('linearToLogarithmic', function() {
    it('converts a 0-1 point in a linear scale to the value between min-max on the logarithmic scale', function() {
      expect(logScale.linearToLogarithmic(0)).toBe(1);
      expect(logScale.linearToLogarithmic(1)).toBe(100);
      expect(logScale.linearToLogarithmic(.5)).toBe(10);
      expect(logScale.linearToLogarithmic(.1)).toBe(2);
    });
  });

  describe('logarithmicToLinear', function() {
    it('converts a value between min-max on the logarithmic scale to a point 0-1 on a linear scale', function() {
      expect(logScale.logarithmicToLinear(10)).toBe(.5);
      expect(logScale.logarithmicToLinear(100)).toBe(1);
      expect(logScale.logarithmicToLinear(1)).toBe(0);
    });
  });
});
