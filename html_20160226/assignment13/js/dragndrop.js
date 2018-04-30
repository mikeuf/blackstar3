$(document).ready(function() {


$(init);

$('#deal').click(function () {
    dealCard(randomCard());
});


// intialize global variables
//var cardsInDeck = new Array();
var numberOfCardsInDeck = 52;
var numberOfCardsInHand = 0;
var numberOfRemovedCards = 0;
var cardsInHand = new Array();
var removedCards = new Array();
var bucketNum = 0; // card number relative to suite


function init() {
    $('.drop').droppable({
        drop: handleDropEvent
    });
    
        $('.discard').droppable({
        drop: handleDiscardEvent
    });
}

function dealCard(i) {

    if (numberOfCardsInDeck == 0) return false;

    if (numberOfCardsInHand > 4) {
        alert("Hand is limited to 5 cards.");
        return false;
    }

    // check for duplicates

/*
    for (var j = 0; j < numberOfCardsInHand; ++j) {

        // if the card has already been dealt, deal a different one
        if (cardsInHand[j] == i) {
                        alert("Detested card!")
            dealCard(randomCard());
            return false;
        }

    }

*/
    
        for (var j = 0; j < numberOfRemovedCards; ++j) {

        // if the card has already been dealt, deal a different one
        if (removedCards[j] == i) {
            dealCard(randomCard());
            return false;
        }

    }


    // Distribute cards into buckets for each suite

    //clubs
    if (i <= 13) {
        bucketNum = (i % 13) + 1; // keep the number between 1 and 13
        var img = document.createElement("img");
        img.src = "http://michaelpatrickblack.com/images/PNG-cards-1.3/" + bucketNum + "_of_clubs" + ".png";
    }

    // diamonds
    if (i > 13 && i <= 26) {
        bucketNum = (i % 13) + 1; // keep the number between 1 and 13
        var img = document.createElement("img");
        img.src = "http://michaelpatrickblack.com/images/PNG-cards-1.3/" + bucketNum + "_of_diamonds" + ".png";
    }

    // hearts
    if (i > 26 && i <= 39) {
        bucketNum = (i % 13) + 1; // keep the number between 1 and 13
        var img = document.createElement("img");
        img.src = "http://michaelpatrickblack.com/images/PNG-cards-1.3/" + bucketNum + "_of_hearts" + ".png";
    }

    // spades
    if (i > 39 && i <= 52) {
        bucketNum = (i % 13) + 1; // keep the number between 1 and 13
        var img = document.createElement("img");
        img.src = "http://michaelpatrickblack.com/images/PNG-cards-1.3/" + bucketNum + "_of_spades" + ".png";
    }

    // set image properties for card
    img.height = "109";
    img.width = "75";
    img.id = i;

//    document.getElementByID("main9").appendChild(img);
    $("#main9").append(img);
//    document.body.appendChild(img);
    $("#" + i).draggable();
    
        // add card to hand and remove from deck
    cardsInHand[numberOfCardsInHand] = i;
    ++numberOfCardsInHand;

    removeCard(i);

}

function randomCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);
}

/*


function removeCard(c) {
    // simply make every higher numbered card move down 1
    for (j = c; j <= numberOfCardsInDeck - 2; j++) {
        cardsInDeck[j] = cardsInDeck[j + 1];
    }
    numberOfCardsInDeck--;
}

*/

function removeCard(c) {
 
    removedCards[numberOfRemovedCards] = c;
    ++numberOfRemovedCards;
    
}

function removeCardFromHand(c) {
    // simply make every higher numbered card move down 1
    for (j = c; j <= numberOfCardsInHand - 2; j++) {
        cardsInHand[j] = cardsInHand[j + 1];
    }
    numberOfCardsInHand--;
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  $('#drop').html( 'The card with ID "' + draggable.attr('id') + '" was dropped onto me!' );
    
}

function handleDiscardEvent( event, ui ) {
  var draggable = ui.draggable;
  $('#discard').html( 'Card ID"' + draggable.attr('id') + '" discarded!' );
        removeCardFromHand(draggable.attr('id'));
    
}

});
