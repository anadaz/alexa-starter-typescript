import { RequestHandler, HandlerInput } from "ask-sdk-core";
import {Response} from "ask-sdk-model";

export const LaunchRequestHandler :RequestHandler = {
  canHandle(handlerInput:HandlerInput):boolean {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput:HandlerInput):Response {
    const speechText:string = "Welcome skill typescript, you can say hello!";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard("Hello World", speechText)
      .getResponse();
  },
};