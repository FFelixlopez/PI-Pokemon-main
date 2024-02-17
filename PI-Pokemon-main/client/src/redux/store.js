import{createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Este linea conecta con la appi

const store = createStore(
    rootReducer,
    composeEnhance(applyMiddleware(thunk)) // esta linea es para hacer peticion a un server
);

export default store;