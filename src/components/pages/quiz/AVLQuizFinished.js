import React from "react";
import Header from "../../navbar/Header";
import { useLocation } from "react-router-dom";

const AVLQuizFinalPage = () => {

    const location = useLocation();
    const { from } = location.state;

    return(
        <>
            <div className="Page-Container">
                <Header />
                <div className="Page-Content">
                    <h1>
                        AVL Quiz Finished
                    </h1>
                    <br />

                    <h3>Your final score was: {from}</h3>

                    <p>
                        You can head back to the learning section to learn more about other data structures!
                    </p>
                </div>
            </div>
        </>
        );
}

export default AVLQuizFinalPage;
