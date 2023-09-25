<-- ABOUT THE PROJECT -->
## About The Project

Based on the total number of demerit points accrued, this JavaScript code calculates the demerit points at a specific speed and determines whether the license should be suspended. The algorithm makes the necessary calculations by comparing the input speed with a predetermined speed limit.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project was build using: 

1. HTML
2. JavaScript



<!-- GETTING STARTED -->
## How it Works
This is how the program works:

1. The speed parameter, which represents the speed in kilometers per hour, is passed to the calculateSpeed function.
2. SpeedLimit and demeritPoints are initialized in the function with values of 70 and 0, respectively.
3. The code reports "Ok" to the console, indicating that the speed is within the restriction, if the input speed is less than the speed limit.
4. The code determines the demerit points if the input speed is greater than the speed limit by deducting the speed limit from the input speed and dividing the result by five. The demerit points are rounded down to the nearest full number using the Math.floor method.
5. Using a template string, the calculated demerit points are recorded to the terminal.
6. The code reports "License suspended" to the console if there are more than 12 demerit points, which indicates a severe violaion.



### Installation

1. Optional git software in vscode can be installed in order to clone a repsitory to the local machine.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use this code, you can follow these steps:

1. Clone the repository or download the code files.

2. Open the index.html file in a web browser.

3. A prompt will appear asking you to enter your marks. Enter a number between 0 and 100 and click "OK".

4. An alert will display your calculated grade.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@DaudiKM](https://twitter.com/DaudiKM) - daudimwanzia@gmail.com

Project Link: [https://github.com/computeman/](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

The following are resources that I used.

* [mdn web docs](https://developer.mozilla.org/en-US/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
