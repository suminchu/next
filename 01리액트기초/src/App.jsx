import { useState } from "react";

import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // 상태값이 true인경우 : 로딩시 모달창 띄워져 있음  / false인 경우: 로딩시 모달창 바로 안뜸

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandle() {
    setModalIsVisible(false);
}


  return(
  <>
  <MainHeader onCreatePost={showModalHandler}/>
    <main>
        <PostsList 
        isPosting={modalIsVisible} 
        onStopPosting={hideModalHandle}
        />
    </main>
  </>
  )
}

export default App;
