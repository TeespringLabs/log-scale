# log-scale

Logarithmic scale class that helps with conversions and calculations

## Usage

Create a LogScale by passing in your min and max values:

    var logScale = new LogScale(1, 100);

You can then convert from a 0 to 1 linear scale and the logarithmic scale and vice versa.  For example, if you want the value at the middle of the scale:

    logScale.linearToLogarithmic(.5); // 10

And going the other way:

    logScale.logarithmicToLinear(1); // 0
    logScale.logarithmicToLinear(10); // .5
    logScale.logarithmicToLinear(100); // 1

## Testing

You can run the tests with the following command:

    jasmine

## License

This project is licensed under the Apache v2.0 license.  See the LICENSE file for more.
