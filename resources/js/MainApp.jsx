import ReactDOM from 'react-dom';
import MainMenssangerBody from './components/admin-components/Messanger/MainMessangerBody';

import Header from "./components/headerAndFooter/Header"
import {ContextProvider} from "./Context";

ReactDOM.render(
    <ContextProvider>
        <Header/>,

    </ContextProvider>,
    document.getElementById("root"));
