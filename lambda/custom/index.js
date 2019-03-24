"use strict";
/* eslint-disable  func-names */
/* eslint-disable  no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_core_1 = require("ask-sdk-core");
const AllHandlers_1 = require("./handlers/AllHandlers");
exports.handler = ask_sdk_core_1.SkillBuilders.custom()
    .addRequestHandlers(AllHandlers_1.LaunchRequestHandler, AllHandlers_1.HelloWorldIntentHandler, AllHandlers_1.HelpIntentHandler, AllHandlers_1.CancelAndStopIntentHandler, AllHandlers_1.SessionEndedRequestHandler)
    .addErrorHandlers(AllHandlers_1.ErrorEventHandler)
    .lambda();
