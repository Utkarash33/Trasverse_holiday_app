# **Traverse Travel Website**


The main motive behind creating this website is to showcase the skills that we learned in Unit 3 of Masai School's program. We used the following technology stacks: HTML, CSS, JavaScript, and the animation library, AOS (https://github.com/michalsnik/aos). We created a JSON server for all the data we needed and worked on that data according to our requirements. The link of JSON server is (https://frail-show.onrender.com/data)

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/screencapture-127-0-0-1-5501-index-html-2023-05-08-21_05_38.png">

The website has two sides: the admin and the user. To visit the admin side, users must use "Utkarsh@Trasverse.com" as the username and "Traverse" as the password.



## **Admin Side**

The admin side has three pages: Home, AddProduct, and Product. The Home page displays all the booking data. In the AddProduct page, admins can add new tourist sites to the website. In the Product page, admins can see all the tourist locations available on the website and can edit or delete them.

## **User Side**

If the user is new to the website, they have to register in the Sign In section with the required details. Otherwise, they can log in to the user side by entering their username and password. If the details are correct, the user will be redirected to the home page.

The home page is mostly static, and the nav bar's "Holiday" tag leads users to all the available locations where they can book their visits. The "My Booking" section allows users to view all their bookings. Note that if the user is not logged in to the system, they have to log in first to access the "My Booking" page.

We added animations using the AOS library to the home page. In the middle section of the page, there are glimpses of the available locations. By clicking on them, users can be redirected to the destinations' pages.

In the Holidays page, all the locations are shown to the user. Another nav bar is added here, and users can filter the locations by different categories. In the right side of the page, there are the highlighted locations, and by clicking on them, users can add tourist locations to their bookings in the middle section by clicking on "Book Now." If the user is logged in to the system, they will be redirected to a form; otherwise, they must log in to book a location.

In the booking details form, users must fill in details like their name, email, phone number, city, number of people, age, and date of the journey. After filling in all the required details, the user can click on "Proceed to Checkout." If the user hasn't filled in all the details, an alert will appear that they need to do so.

If everything is successful, the user will be redirected to the payment page, where they must fill in their card number, cardholder name, expiration month and year, and CVV. After filling in all the details, the user can proceed to checkout, and a top-up generated. After filling in the OTP, the user can successfully book the holiday destination, and they can view their booking details by visiting the "My Booking" page.

## **Admin Side Features and Functionality**

**Login:** To access the admin side, users must use "Admin@Trasverse.com" as the username and "Traverse" as the password.

**Home Page:** The Home page displays all the booking data.

**Add Product Page:** In the Add Product page, admins can add new tourist sites to the website by filling in details like name, description, image, and price.

**Product Page:** In the Product page, admins can see all the tourist locations available on the website and can edit or delete them.

**JSON Server:** A JSON server is used to store and retrieve all the data needed on the admin side.

 ## **User Side Features and Functionality**

**Register:** New users can register by filling in details like name, email, password, and phone number in the Sign In section.
<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 210002.png">

**Login:**  Returning users can log in to the user side by entering their username and password.
<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 205951.png">


**Admin Login Page**


<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 205929.png">

**Home Page:** The home page is mostly static, and the nav bar's "Holiday" tag leads users to all the available locations where they can book their visits.


**AOS Animations:** We added animations using the AOS library to the home page.

**Holiday Page:** In the Holidays page, all the locations are shown to the user. Another nav bar is added here, and users can filter the locations by different categories. And also filter by the price ranges and the ratings . And sort by the price form low to high and vice versa. also user can search by name of the destination.

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 210645.png">

**Booking a Location:** In the right side of the page, there are the highlighted locations, and by clicking on them, users can add tourist locations to their bookings in the middle section by clicking on "Book Now." If the user is logged in to the system, they will be redirected to a form; otherwise, they must log in to book a location.

**Booking Details Form:** In the booking details form, users must fill in details like their name, email, phone number, city, number of people, age, and date of the journey. After filling in all the required details, the user can click on "Proceed to Checkout." If the user hasn't filled in all the details, an alert will appear that they need to do so.

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 210703.png">

**Payment Page:** If everything is successful, the user will be redirected to the payment page, where they must fill in their card number, cardholder name, expiration month and year, and CVV. After filling in all the details, the user can proceed to checkout, and a top-up generated.

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 210722.png">



**Booking Confirmation:** After filling in the OTP, the user can successfully book the holiday destination, and they can view their booking details by visiting the "My Booking" page.

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 210751.png">

**My Booking Page:** The "My Booking" section allows users to view all their bookings. Note that if the user is not logged in to the system, they have to log in first to access the "My Booking" page.

<img width="100%" alt="Screenshot 2022-06-10 at 3 12 26 PM" src="./Imgs/readme/Screenshot 2023-05-08 221053.png">
