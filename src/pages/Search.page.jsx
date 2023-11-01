import { MainContainer } from "../components/common/MainContainer.component";
import { SearchAppBar } from "../components/search/AppBar.component";
import { RecommandSearch } from "../components/search/Recommand,component";
import { ResentSearch } from "../components/search/Resent.component";

export const SearchPage = () => {
  return (
    <>
      <SearchAppBar />
      <MainContainer>
        <ResentSearch />
        <RecommandSearch />
      </MainContainer>
    </>
  );
};
