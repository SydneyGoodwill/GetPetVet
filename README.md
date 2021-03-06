# Get Pet Vet 
![GitHub top language](https://img.shields.io/github/languages/top/nikolaslenning/GetPetVet)

## Table of Contents

1. [ Project Links ](#links)
2. [ Description ](#description)
3. [ Technologies ](#technologies)
4. [ Screenshots ](#screenshots)
5. [ Credits ](#credits)
6. [ Challenges and Learning ](#challenges/learning)
7. [ License ](#license)

<a name = "links"></a>

### 1. Project Links

#### Deployed Site

The deployed site is hosted on [Heroku](https://evening-stream-63366.herokuapp.com/login).

#### Git Hub Repository

The code can be viewed on our [GitHub repository](https://github.com/nikolaslenning/GetPetVet).

<a name = "description"></a>

### 2. Description

Get Pet Vet was born out of an idea to create an application to help the health of pets while decrease the risk of contracting and spreading Covid-19. Get Pet Vet allows the user to schedule an appointment with a vet for the minor needs that might be needed when caring for a pet. If your pet has a small rash, or other not serious ailment you can schedule an appointment with a veterinarian and get your pet checked out to learn the remedies needed to keep your pets safe.

<a name = "technologies" ></a>

### 3. Technologies

This is a list of all the technologies used in the creation of this application!

1. [Socket.io](https://socket.io/) was used to help create the use of our video chatting.

2. [Simple-Peer](https://www.npmjs.com/package/simple-peer) was used to connect the audio/data/video from one person to another.

3. [Passport.js](http://www.passportjs.org/) was used for our authentication/login services.

4. [Travis CI](https://travis-ci.org/) was used to help us manage our merges.

5. [React Big Calendar](https://www.npmjs.com/package/react-big-calendar) was used to help with our scheduler.

6. [React Date Picker](https://www.npmjs.com/package/react-datepicker) was used with the scheduler to help allow users to pick dates and times.

7. [BCrypt](https://www.npmjs.com/package/bcrypt) was used to user security and the use of hashing passwords.

8. [ESLint](https://eslint.org/) was used in helping make cleaner code.

<a name = "screenshots"></a>

### 4. Screenshots

![Home](client/src/components/assets/readme1.JPG)

![Scheduler](client/src/components/assets/readme2.JPG)

![Video Chat](client/src/components/assets/readme3.JPG)

![Pet Profiles](client/src/components/assets/readme4.JPG)

<a name = "credits"></a>

### 5. Credits

This project could never have been accomplished without the help of.....

1. [Mason Short](https://github.com/LtWilhelm) helping us with our issues with sockets, both on the clock and off, this man made it possible.

2. [Alex Ulfich](https://github.com/alex-117) helping us with our scheduler and making sure that we are getting things done in a timely manner.

<a name = "challenges/learning" >

### 6. Challenges and Learning

[Nikolas Lenning](https://github.com/nikolaslenning) - The biggest challenge for me was implementing the back and forth communication of socket.io from the server and client, in establishing rooms as well as connecting the users to their respective rooms. I learned a great deal about the back and forth communication that might be involved in video conferencing tools connecting users. 

[Seth Martineau](https://github.com/slothings) - The biggest challenge for me was working on sockets.io and getting to understand it and how it interacts with each other in a full stack app and integrating the front end with the back end. This project helped me fully understand the workings of a full stack app with all its integration, process, and problems.

[Sydney Goodwill](https://github.com/SydneyGoodwill) - My biggest challenge, and some of my successes, came from refactoring code. Working with socket.io and react-big-calendar, we tried to understand and implement various templates for our application. I think these templates were integral to the final output of our application, but getting them to work with our already established code/refactoring the code was a process. I think I learned most from pair-programming these challenges with our group.

[Zach LaFleur](https://github.com/MrCartree) - The biggest challenge for me during this project was socket.io. I had worked with it previously on other apps but bring it in here for the use of video and audio proved to be quite the challenge. It was interesting to make the hang up button because you cannot cancel both audio and video at the same time and need to target them individually in order to shut them off. There was so much to learn from this project, from the way things interact with each other in full stack, as well as little stylings that made the whole thing unbearable.

<a name = "license" ></a>

### 7. Licenses

MIT License

Copyright (c) 2020 Team LaFleur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.