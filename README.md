## Project Demo Video

You can watch the demo video of the project [here](https://drive.google.com/file/d/17jqfw-RPl7EutB_rEtJcBCdxDiB81gh2/view?usp=drivesdk)

## Steps Followed in the Video

1. User Registration :
New users can sign up by providing their details (e.g., name, email, password) using a registration form.
Once the user registers, the information is securely stored in MongoDB.
The user's password is hashed using bcrypt before being stored for security.
  ![WhatsApp Image 2024-09-17 at 2 07 09 PM](https://github.com/user-attachments/assets/825dcb03-d311-4de1-bedf-2eea2ee86c65)


2. User Login :
Existing users can log in using their registered credentials (email and password).
On successful login, the user is authenticated using JWT (JSON Web Token) for secure session management.
The user is redirected to the dashboard where they can see a list of other users who are currently online.
![WhatsApp Image 2024-09-17 at 2 07 53 PM](https://github.com/user-attachments/assets/d99107e8-3e46-4e37-b9af-64887877b163)


4. Search and Messaging :
After logging in, the user can search for other registered users using the search bar.
The search functionality is implemented with a real-time search, where the user can enter the name of another user.
Once found, the user can initiate a private chat with any online user using Socket.IO for real-time communication.
Messages are exchanged in real-time and displayed in the chat window.

![WhatsApp Image 2024-09-17 at 2 08 38 PM](https://github.com/user-attachments/assets/264795ef-bc64-4c0e-92b9-4ecda2fdbae5)
![WhatsApp Image 2024-09-17 at 2 09 26 PM](https://github.com/user-attachments/assets/86fd0888-1e2a-4912-89c5-3d71eedf3fc2)


6. Logout and Re-login :
The user can log out at any time, which clears the session (JWT token).
The logout button is readily available on the dashboard for easy access.
The user can log back in using the same credentials, and all previous messages and information remain intact in the database.
![WhatsApp Image 2024-09-17 at 2 10 14 PM](https://github.com/user-attachments/assets/2c9b2381-c2aa-4a91-9d86-fe98b3b0e002)
