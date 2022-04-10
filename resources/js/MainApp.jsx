import ReactDOM from 'react-dom';

import Header from "./components/headerAndFooter/Header"
import {ContextProvider} from "./Context";

ReactDOM.render(
    <ContextProvider>
        <Header/>
    </ContextProvider>,
    document.getElementById("root"));
