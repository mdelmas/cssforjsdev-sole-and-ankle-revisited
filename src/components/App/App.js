import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

import { ThemeProvider } from "styled-components";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ThemeProvider theme={{ queries: QUERIES, color: "red" }}>
      <AppWrapper>
        <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
        </Main>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  --color-white: ${COLORS.white};

  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};

  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};

  --weight-normal: ${WEIGHTS.normal};
  --weight-medium: ${WEIGHTS.medium};
  --weight-bold: ${WEIGHTS.bold};
`;

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
