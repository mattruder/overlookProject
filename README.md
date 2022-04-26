# Overlook Hotel Project

Overlook Hotel is a web application that allows users to login to the Overlook Hotel application, view their past room bookings,
and book rooms for the future.

### **Downloading the files**

1. click on this [link](https://github.com/mattruder/overlookProject)

2. hit this green box that says `Code`

3. Copy the SSH

4. Open the terminal
5. Type `git clone` + paste the SSH link


### **To Run the Application and View the Webpage**


1. In the main-directory, run `npm start`

You should see a similar screen below.

![View Website](https://user-images.githubusercontent.com/89413678/161453492-049643ab-135d-4d7a-a86a-7802d8468ac8.png)

2. To view the webpage, copy and paste the first link in your console under `webpack server` into the input field in the window.

![View Website](https://user-images.githubusercontent.com/89413678/161453609-03cf671a-359b-4668-af50-85df2e7f1f25.png)

![application-gif](https://user-images.githubusercontent.com/36666973/165350930-fe6664d3-1dc9-46c2-9a7f-47f350d251e3.gif)



### **Using the Application**

**_To Log In_**
To login, choose a username (customer1 - customer50) and type in the password (overlook2021)

**_View Past Bookings_**
There is a scrolling box to the left of the screen labeled Past Bookings where you can view all past hotel bookings.


**_View Future Bookings_**
There is a scrolling box to the right of the screen labeled Future Bookings where you can view all future hotel bookings.

**_To Book A Room_**
To book a room, search for the date in the calendar at the top right of the header. Then click the search button. A screen will appear with all available rooms for that date. You may filter by room type above the listings. Click "Book Room" on the room you would like to book. Once booked, it will appear on the homepage in your Future Bookings section.

### **To Close Down the Application**

In the terminal where the app is running, use `control` + `c` to stop the application.

### **Accessibility**

Lighthouse and Wave evaluation app were used to evaluate the app for accessibility.

### **Technologies Used**
- JavaScript
- Mocha
- Chai
- Webpack
- CSS
- HTML

### **Challenges**
-  I didn't run into many challenges while developing this web app, but the greatest was with the DOM Updates file. I am new to doing DOM updates this way so it was tricky at times.

### **Wins**
- Accessibility of the app was at 95% when I initially ran `Lighthouse` and became 100% after refactoring our app to make it more accessible.

### **Contributors**
- Matt Ruder [GitHub](https://github.com/mattruder)

### **Future Additions**
- Allow users to book hotels for multiple dates.
- Allow users to create their login credentials.
- Allow a manager to log in and perform managerial duties.
