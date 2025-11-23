// Main app code
import { loadJSON } from "./load_data.js";
import { seededShuffle } from "./seeded_shuffle.js";

// Hide unused screens
$("#s2_new_match").hide();
$("#s3_pick_categories").hide();

// Initial app variables and constants
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;
const CATEGORIES_TO_DISPLAY = 5;

let playersCount = 2;
let selectedCategories = [];

const SEED = 12345;

// First functions
let categories = await loadJSON("../data/categories.json");
let questions = await loadJSON("../data/trivia.json");

let categoriesList = Object.keys(categories);
categoriesList = seededShuffle(categoriesList, SEED);

// Button handlers
$("#btnNewGame").on("click", function () {
  $("#s1_main").hide();
  $("#s2_new_match").show();
});

$("#btnS2PlayersDecr").on("click", function () {
  playersCount = Math.max(MIN_PLAYERS, playersCount - 1);
  $("#playersCount").text(playersCount);
});

$("#btnS2PlayersIncr").on("click", function () {
  playersCount = Math.min(MAX_PLAYERS, playersCount + 1);
  $("#playersCount").text(playersCount);
});

$("#btnS2Continue").on("click", function () {
  $("#s2_new_match").hide();
  $("#s3_pick_categories").show();

  s3DisplayCategories();
  // TODO: Animate text appearance
});

// Functions

var s3DisplayCategories = function () {
  // Get the N categories from these available
  if (categoriesList.length < CATEGORIES_TO_DISPLAY) {
    console.error("Not enough categories to display");
    return;
  }

  let categoriesToShow = categoriesList.slice(0, CATEGORIES_TO_DISPLAY);

  $("#btnS3Cat1").text(categories[categoriesToShow[0]]);
  $("#btnS3Cat2").text(categories[categoriesToShow[1]]);
  $("#btnS3Cat3").text(categories[categoriesToShow[2]]);
  $("#btnS3Cat4").text(categories[categoriesToShow[3]]);
  $("#btnS3Cat5").text(categories[categoriesToShow[4]]);
};

/*
let history = []; // Stores last 5 steps
let currentPlace = "inicio";
$("#history").hide();

setPlace = function (placeKey) {
  currentPlace = placeKey;
  let placeCapitalized = placeKey[0].toUpperCase() + placeKey.substring(1);
  $("#place").text(`Estás en: ${placeCapitalized}`);
};

// Create a UUID and store it in local storage
let uuid = localStorage.getItem("uuid");
if (uuid == null) {
  uuid = generateUuid();
  localStorage.setItem("uuid", uuid);
}
console.log(uuid);
*/

var twShowText = function (text_to_show, show_title = false, callback) {
  var tw = new TypeIt("#tw", {
    strings: [text_to_show],
    speed: 30,
    nextStringDelay: 50,
    cursor: false,
    lifeLike: true,

    afterComplete: function (instance) {
      if (typeof callback === "function") {
        callback();
      }
    },
    afterString: function (step, queue, instance) {
      //$('html,body').animate({ scrollTop: document.body.scrollHeight }, 'slow')
    },
  });
};

//scramble(document.querySelector('#btn_start')).run()

/*
jQuery(function ($) {
  var $form = $("#form_game");

  // Submit the word
  $form.submit(function (event) {
    return submitWord();
  });
});
*/

/*
//$('#header').hide()
// $("#btn_start").hide();
//$("#txt_word").show();

// twShowText(`Escribe cualquier palabra`);

/**
 * Return an array if the word is found in the keys
 * 0 {number} Index of the base command
 * 1 {string} Base command
 */
/*
lookForWord = function (command) {
  // Try with the base word
  if (command in keys_dict) {
    console.log(`Key '${command}' exists`);
    return [keys_dict[command], command];
  }

  // Try with synonyms
  if (command in synonyms) {
    console.log(`Synonym '${command}' exists`);
    if (synonyms[command] in keys_dict) {
      console.log(`Key '${synonyms[command]}' exists`);
      return [keys_dict[synonyms[command]], synonyms[command]];
    }

    console.log(`Problem with synonym ${command}`);
  }

  return [false, false];
};

goTo = function (elementIdx, elementWord, originalWord) {
  // Check if we can go to that place
  console.log(elementIdx, elementWord, originalWord);
  console.log("Actions available in this place");
  console.log(places[currentPlace]);
  if (!(elementWord in places[currentPlace])) {
    console.log("Word doesn't exist... Show error");
    twShowText(
      `${originalWord} - No puedes verlo en este lugar, o está muy lejos`
    );
    return;
  }

  console.log(`Go to #${elementIdx}`);
  addHistory(elementIdx);

  if (elementWord in places) {
    console.log(`Found ${elementWord} as a valid place`);
    twShowText(`Ve al #${elementIdx}`);
    setPlace(elementWord);
  } else {
    twShowText(`${originalWord} - Ve al #${elementIdx}`);
    console.log(`${elementWord} is not a place`);
  }
};

submitWord = function () {
  let command = $("#txt_word").val().trim();
  $("#txt_word").val("").blur();
  original = command;
  command = replaceCharacters(command);
  console.log(`Received command: ${command}`);

  if (command === "resolver") {
    // Go to trial
    window.location.href = "trial.html";
    return;
  }

  var [word_idx, baseCommand] = lookForWord(command);
  if (word_idx !== false) {
    goTo(word_idx, baseCommand, original);
    return;
  }

  // Remove plurals
  if (command.endsWith("es")) {
    command = command.slice(0, -2);
  } else if (command.endsWith("s")) {
    command = command.slice(0, -1);
  }

  var [word_idx, baseCommand] = lookForWord(command);
  if (word_idx !== false) {
    goTo(word_idx, baseCommand, original);
    return;
  }

  console.log("Word does not exist... Show error");
  twShowText(`${command} - Esa palabra no te lleva a nada relevante`);
};
*/
