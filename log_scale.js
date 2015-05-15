/**
 * Constructor
 * @param {Number} minValue
 * @param {Number} maxValue
 */
function LogScale(minValue, maxValue) {
  this.minValue = minValue;
  this.maxValue = maxValue;
}

/**
 * Gets the range between the min and max values
 * @returns {Number}
 */
LogScale.prototype.getRange = function() {
  return this.maxValue - this.minValue;
};

/** 
 * Maps linear 0-1 point to logarithmic scale between min and max
 * f(0) = minValue
 * f(1) = maxValue
 * f(x) = (range + 1)^x + minValue
 * @param linearValue {Number} from 0 to 1 in linear scale
 * @returns {Number} between min and max inclusive
 */
LogScale.prototype.linearToLogarithmic = function(linearValue) {
  var value = Math.round(Math.pow(this.getRange() + 1, linearValue) + this.minValue - 1); 

  if (value < this.minValue) {
    value = this.minValue;
  } else if (value > this.maxValue) {
    value = this.maxValue;
  }   

  return value;
},  

/** 
 * Maps a logarithmic value to a fractional point between 0-1 on the scale
 * g(minValue) = 0
 * g(maxValue) = 1
 * g(x) = log(base range + 1)(x)
 * @param value {Number}
 * @returns {Number} 0 to 1
 */
LogScale.prototype.logarithmicToLinear = function(value) {
  var normalizedValue = value - this.minValue + 1;

  if (normalizedValue <= 0) {
    return 0;
  } else if (value >= this.maxValue) {
    return 1;
  } else {
    return Math.log(normalizedValue) / Math.log(this.getRange() + 1);
  }   
}

module.exports = LogScale;
