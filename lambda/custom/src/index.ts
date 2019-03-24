/* eslint-disable  func-names */
/* eslint-disable  no-console */

import { SkillBuilders, } from "ask-sdk-core";
import {LaunchRequestHandler, HelloWorldIntentHandler, HelpIntentHandler,
   CancelAndStopIntentHandler, SessionEndedRequestHandler, ErrorEventHandler} from "./handlers/AllHandlers";
exports.handler = SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorEventHandler)
  .lambda();
