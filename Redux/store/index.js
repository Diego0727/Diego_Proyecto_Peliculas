import { configureStore } from "@reduxjs/toolkit";
import accionesReducer from "../features/acciones";
import accionesSeries from "../features/accionesSeries";

export default configureStore({
    reducer: {
        acciones: accionesReducer,
        accionesSerie: accionesSeries,
    }
})