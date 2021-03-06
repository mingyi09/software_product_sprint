// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I enjoy eating spicy food', 'I like to watch CAT videos', 
      'I can sleep up to 12 hours a day', 'Sometimes I write fanfictions for my favorite games and movies',
      'My most proficient language is Sichuanese', 'When I cook, I add different ingredients based on my mood',
      'I dream a lot', 'I love rain','My MBTI personality type is ENFJ','I can play Go game',
      'The best place in the world is my bed', 'I wanted to be an astronaut'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function sayHello(){
    var text = document.getElementById("theInput");
    //document.getElementById("words").innerHTML = "You are writing: "+ text.nodeValue;
    document.getElementById("words").innerText = "Have a good day!";
}

function translateIt(){
    const text = document.getElementById("sentence").value;
    const languageCode = document.getElementById("lang").value;

    const resultContainer = document.getElementById("result");
    resultContainer.innerText = "Loading...";    

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
      method: 'POST',
      body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
      resultContainer.innerHTML = translatedMessage;
    });
}