import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { SnackbarProvider } from "notistack";

import { Viewer3D } from "./components/Viewer/Viewer3D";
import { UiComp } from "./userInterface/UiState/UiComp";

import { MainContextProvider } from "./hook/useMainContext";
import { Router } from "./userInterface/Router/Router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App = observer(() => {
  return <Router />;
});

export const SingleInstanceApp = observer(() => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MainContextProvider>
          <UiComp />
          <Viewer3D />
        </MainContextProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
});
