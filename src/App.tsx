import React from 'react';
import './App.css';
import Head from "./components/Head";
import Button from "./components/Button";
import Input from "./components/Input";
import ReducerButtons from "./components/ReducerButtons";
import ClassComponent from "./components/ClassComponent";
import { GlobalProvider } from "./components/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <div className="App">
                <ClassComponent text={"ClassComponent"}/>
                <Head title={'Hi'}/>
                <Button
                    onClick={e => e.preventDefault()}
                >
                    I am button
                </Button>
                <Input/>
                <ReducerButtons/>
            </div>
        </GlobalProvider>
    );
}

export default App;
