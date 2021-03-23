import React from 'react';
import './App.css';
import Head from "./components/Head";
import Button from "./components/Button";
import Input from "./components/Input";
import ReducerButtons from "./components/ReducerButtons";

function App() {
    return (
        <div className="App">
            <Head title={'Hi'}/>
            <Button
                onClick={e => e.preventDefault()}
            >
                I am button
            </Button>
            <Input/>
            <ReducerButtons/>
        </div>
    );
}

export default App;
