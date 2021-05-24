# SocialCodeRN

**Requirements**

* Yarn
* Android SDK
* JAVA
* Npm 16.1.0
* Visual Studio Code

**Set up**  

(This project has been developed in Ubuntu, so is suitable to run in it)

First of all, you may need to clone the reporitory on your own pc:

```bash
git clone https://github.com/SocialCodeTFC/SocialCodeRN.git
````
Then, open the project folder _SocialCodeRN_ with an IDE, as could be Visual Studio Code.
After this, open a new terminal inside the IDE and type the following command:

```bash
cd SocialCodeRN
````
Now, you may download the dependencies:
```bash
yarn install
````

**Running applications**

To run the application, you need to be on the previous directory and type the following commands:

This command will download the aplication on your android emulator. If it fails, try again.
```bash
yarn android
```` 
When the previous command ends, the emulator will show an error about metro server. To launch metro, you need to run the following command: 
```bash
yarn start
````
Then, press **R**. If metro don't recognize the aplication at first, press again R.

**Important**

This guide is only for the **Frontend** if you want to run the server, the instructions are in **Backend** repository.
This app was developed in android enviroment, so is probably than in iOS does not work.

**Common mistakes**

*If you are running the metro server with another app and you try to run this app, it may return an error.
*If you want to use the app, run the backend too.
