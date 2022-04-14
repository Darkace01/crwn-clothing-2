import { compose, createStore, appluMiddleware } from "redux";
import logger from "redux-logger";

//root-reducer
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(appluMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
