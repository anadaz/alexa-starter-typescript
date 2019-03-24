"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LaunchRequestHandler_1 = require("./LaunchRequestHandler");
exports.LaunchRequestHandler = LaunchRequestHandler_1.LaunchRequestHandler;
exports.HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && handlerInput.requestEnvelope.request.intent.name === "HelloWorldIntent";
    },
    handle(handlerInput) {
        const speechText = "Hello World!";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    },
};
exports.HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent";
    },
    handle(handlerInput) {
        const speechText = "You can say hello to me!";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    },
};
exports.CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "IntentRequest"
            && (handlerInput.requestEnvelope.request.intent.name === "AMAZON.CancelIntent"
                || handlerInput.requestEnvelope.request.intent.name === "AMAZON.StopIntent");
    },
    handle(handlerInput) {
        const speechText = "Goodbye!";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard("Hello World", speechText)
            .getResponse();
    },
};
exports.SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request).reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};
exports.ErrorEventHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder
            .speak("Sorry, I can't understand the command. Please say again.")
            .reprompt("Sorry, I can't understand the command. Please say again.")
            .getResponse();
    },
};
