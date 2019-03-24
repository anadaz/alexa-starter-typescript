import {LaunchRequestHandler} from "./LaunchRequestHandler";
import { RequestHandler, HandlerInput, ErrorHandler } from "ask-sdk-core";
import { SessionEndedRequest, Response } from "ask-sdk-model";

export {LaunchRequestHandler};


export const HelloWorldIntentHandler:RequestHandler = {
  canHandle(handlerInput:HandlerInput):boolean {
    return handlerInput.requestEnvelope.request.type === "IntentRequest"
      && handlerInput.requestEnvelope.request.intent.name === "HelloWorldIntent";
  },
  handle(handlerInput:HandlerInput):Response {
    const speechText:string = "Hello World!";

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard("Hello World", speechText)
      .getResponse();
  },
};

export const HelpIntentHandler:RequestHandler = {
  canHandle(handlerInput:HandlerInput):boolean {
    return handlerInput.requestEnvelope.request.type === "IntentRequest"
      && handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent";
  },
  handle(handlerInput:HandlerInput):Response {
    const speechText:string = "You can say hello to me!";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard("Hello World", speechText)
      .getResponse();
  },
};

export const CancelAndStopIntentHandler:RequestHandler = {
  canHandle(handlerInput:HandlerInput):boolean {
    return handlerInput.requestEnvelope.request.type === "IntentRequest"
      && (handlerInput.requestEnvelope.request.intent.name === "AMAZON.CancelIntent"
        || handlerInput.requestEnvelope.request.intent.name === "AMAZON.StopIntent");
  },
  handle(handlerInput:HandlerInput):Response {
    const speechText:string = "Goodbye!";

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard("Hello World", speechText)
      .getResponse();
  },
};

export const SessionEndedRequestHandler:RequestHandler = {
  canHandle(handlerInput:HandlerInput):boolean {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput:HandlerInput):Response {
    console.log(`Session ended with reason: ${((handlerInput.requestEnvelope.request) as SessionEndedRequest).reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

export const ErrorEventHandler:ErrorHandler = {
  canHandle():boolean {
    return true;
  },
  handle(handlerInput:HandlerInput, error:Error):Response {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak("Sorry, I can't understand the command. Please say again.")
      .reprompt("Sorry, I can't understand the command. Please say again.")
      .getResponse();
  },
};