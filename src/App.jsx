import { Provider } from "react-redux";
import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import Watchpage from "./components/Watchpage";
import Maincontainer from "./components/Maincontainer";
import { createBrowserRouter, RouterProvider } from "react-router";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
      ],
    },
  ],
  { basename: "/Youtube_Clone" },
);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
