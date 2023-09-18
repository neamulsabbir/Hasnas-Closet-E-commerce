import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/routes/routes";
import store from "./State/Store/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
