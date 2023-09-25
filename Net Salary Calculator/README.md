<!-- ABOUT THE PROJECT -->
## About The Project

This JavaScript code computes an employee's net wage using their basic pay, benefits, and a variety of deductions, including PAYE, NHIF, and NSSF. The user is prompted to enter their basic compensation and benefits before the program does the required calculations and displays the net wage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project was built using: 

1. HTML
2. JavaScript



<!-- GETTING STARTED -->
## How it Works
This is how the program works:

1. The user is prompted to enter their basic salary and benefits, which are stored in variables basicSalary and benefits.

2. The input values are converted to floating-point numbers for accurate calculations using the parseFloat function.

3. The gross pay is calculated by adding the basic salary and benefits and stored in the grossPay variable.

4. Using conditional statements, The code determines the appropriate PAYE (Pay As You Earn) deduction based on the gross pay. The calculated PAYE amount is stored in the paye variable.

4. An array of NHIF rates is defined, specifying income ranges and corresponding deductions. The code iterates over this array to find the NHIF rate that matches the gross pay. The corresponding deduction is stored in the nhifDeduction variable.

5. Similarly, an array of NSSF rates is defined, and the code finds the NSSF rate that matches the gross pay. The NSSF deduction is calculated as 6% of the gross pay and stored in the nssfDeductions variable.

6. The net salary is calculated by subtracting the total deductions (PAYE, NHIF, and NSSF) from the gross pay and stored in the netSalary variable.

7. The net salary is displayed in the browser's console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Installation

1. Optional git software in vscode can be installed in order to clone a repository to the local machine.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use this code, you can follow these steps:

1. Clone the repository or download the code files.

2. Open the index.html file in a web browser.

3. The browser will display a prompt asking you to enter your basic salary without commas. Enter the value and click "OK".

4. Another prompt will ask you to enter your benefits. Enter the value and click "OK".

5. The net salary will be displayed in the browser's console.

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

Project Link: [https://github.com/computeman/](https://github.com/computeman/phase-1-toy-problem)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

The following are resources that I used.

* [mdn web docs](https://developer.mozilla.org/en-US/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
