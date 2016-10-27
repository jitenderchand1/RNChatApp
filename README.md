# RNChatApp
Simple socket based chat application

## Getting started
* Make sure `nodejs` is installed
* React Native CLI is needed, do `npm install -g react-native-cli`
* clone the repo `git clone https://github.com/jitenderchand1/RNChatApp.git`
* move into the project directory `cd RNChatApp`
* Run `npm install` to install the dependencies

> We also need to update the codebase with current `IP` of the system. (_you can find out by doing `ifconfig`_).

The IP needs to be updated inside the `src/component/input.component.js` (_line 15_)

It needs to be like this `let url ='http://{your ip here}:3000';`


## Running in the simlulator
* Make sure you have a simulator running, or
* from your terminal run `react-native run-ios`

## Running on Device
* Open up `XCode`, open up th `.xcodeproj` file from the `ios` directory
* Select the device from the run menu and hot the `run` button



# Running the Server for socket communication
* In a new terminal window, run `node server/server.js` (_this will start up a node server which will communicate with our app_)
