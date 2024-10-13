# Taylor Series Expansion of Pi

This website calculates Pi through 20 iterations of a Taylor Series using the formulas:

$$\arctan(x) = \sum_{i \in \{1, 3, 5, \dots\}} \frac{(-1)^{\frac{i-1}{2}} \cdot x^i}{i}$$
and
$$\arctan(1) = \frac{\pi}{4}$$

At each estimate, the error of the estimate is also displayed.
The logic of this calculation is defined in the script.js file, while the website is built in HTML and CSS. 
Though the iterations would normally occur in a fraction of a second, a one second interval in the script.js file ensures that
each estimate and its error is displayed to the user iteratively rather than suddenly.
