import React from "react";
import Header from "../../navbar/Header";
import "./Practice.css"
import vis1 from "../Images/Visualizer_Launch.gif"
import vis2 from "../Images/Visualizer_Insert.gif"
import vis3 from "../Images/Visualizer_Delete.gif"
import vis4 from "../Images/Visualizer_Find.gif"
import vis5 from "../Images/Visualizer_Traverse.gif"
import vis6 from "../Images/Visualizer_Skip.gif"
import vis7 from "../Images/Visualizer_Speed.gif"
import vis8 from "../Images/Visualizer_Reset.gif"
import vis9 from "../Images/Visualizer_Size.gif"
import vis10 from "../Images/Visualizer_Bar.gif"

export default class PracticePage extends React.Component{

    render(){
        return(
            <div className="Page-Container">
                <Header />

                <div className="Page-Content">
                    <h1>
                        Tree Visualizers
                    </h1>

                    <p>
                        The visualizer tool is one of the best ways to apply what we learned in the learning pages to get familiar with the data structures
                        themselves. The tool will elevate your learning experience and aid with the matieral more in-depth. You can choose from a list of data
                        structures we have visualizers for just down below. Once you choose which visualizer you want to open, a new tab will be opened in
                        the browers for you to start exploring!
                    </p>
                    <img className="gif" src={vis1} alt="vis1"></img>
                    <p>
                        There are a few limitations that the visualizer has currently, one of which is that you can only insert integers in the range of
                        0 to 1000 only. Below is a guide on some of the main features of the visualizer and how to use them.
                    </p>

                    <ul>
                        <li>
                            <b>Inserting:</b> <br/>
                            You can insert one or multiple elements separated by a comma (,) or a space( ). It's important that there are no other characters
                            besides numbers and the separators. Additionally, the last character should be a number as well. <br />
                            There may be a case, if the list of inputs is too large, that the lines between the nodes might become incorrect. If this happens,
                            it would be best to split the inputs into smaller sections and try the insertion once again. <br />
                            You can take a look at the gif below to see how you can insert multiple numbers into the AVL tree visualizer as an example:

                            <img className="gif" src={vis2} alt="vis2"></img>
                        </li>
                        <li>
                            <b>Deletion:</b> <br />
                            When we want to delete elements from the table, we can only do so one at a time. This means that only a single number can be
                            input into the box at any one time. <br />
                            You can take a look at the gif below to see how you can delete a node from the AVL tree visualizer as an example:

                            <img className="gif" src={vis3} alt="vis3"></img>
                        </li>
                        <li>
                            <b>Find:</b> <br />
                            Just like with deletion, if we want to find a particular element in the tree, we can only do so one at a time. Finding many items
                            at once woundn't really make much sense anyways. Make sure that, once again, only numbers go in the input box. <br />

                            <img className="gif" src={vis4} alt="vis4"></img>
                        </li>
                        <li>
                            <b>Traverse:</b> <br />
                            If we want to traverse the tree from the top down to list all the elements, we can press the "Traverse" button at the top to
                            list all the elements. <br />
                            You can take a look at the gif below to see how this works:

                            <img className="gif" src={vis5} alt="vis5"></img>
                        </li>
                        <li>
                            <b>Animation Control:</b> <br />
                            There are some visual settings we can use to customize the visualizer to a certain exent. You can take a look at some of those below:
                            <ul>
                                <li>
                                    <b>Animation Toggle Tool:</b> <br />
                                    We can pause, skip forwards to the end of the animation and back to the beginning if we wanted to either skip or replay an
                                    animation; we can stop and break the animation into single steps that we can move through at our own pace if we want to get
                                    a better idea of what the tree is doing. We can do all of the above steps with both insertion and deletion. <br />
                                    Take a look at the gif below to see an example of this with the AVL tree visualizer:

                                    <img className="gif" src={vis6} alt="vis6"></img>
                                </li>
                                <li>
                                    <b>Animation Speed:</b> <br />
                                    You can change the animation speed using the slider to speed up and slow down the entire animation process. <br />
                                    Sometimes, the animation speed might be a bit buggy due to the original implementation, so we recommend using an animation speed of 75 for best results. <br />
                                    Take a look at the gif below to see an example of this with the AVL tree visualizer:

                                    <img className="gif" src={vis7} alt="vis7"></img>
                                </li>
                                <li>
                                    <b>Reset Canvas Button:</b> <br />
                                    Instead of removing nodes from our tree one by one to clear the canvas, we can hit the reset button to clear the entire
                                    canvas automatically. A prompt will show up just to make sure you want to delete everything where you can back out if
                                    there's a misclick, or proceed to remove all elements.<br />
                                    Take a look at the gif below to see this in action:

                                    <img className="gif" src={vis8} alt="vis8"></img>
                                </li>
                                <li>
                                    <b>Toggling Canvas Size:</b> <br />
                                    We can change the size of the canvas using boxes labelled "w" and "h" for width and height respectively. We can enter the
                                    new values we want our canvas to be and hit the "Change Canvas Size" button to apply our changes. The standard size of our
                                    canvas is 1000w x 500h if we want to change it back to the default. <br />
                                    Take a look at the gif below to see this in action:

                                    <img className="gif" src={vis9} alt="vis9"></img>
                                </li>
                                <li>
                                    <b>Moving the Control Bar:</b> <br />
                                    If we want to move the control bar to the top or bottom of the screen we can use the "Move Controls" button in the bottom
                                    right of the toolbar. This will swap the toolbar to either the top or the bottom of the screen. <br />
                                    Take a look at the gif below to see this in action:

                                    <img className="gif" src={vis10} alt="vis10"></img>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <hr></hr>
                    <br />
                </div>

                <h1>Choose Your Visualizer</h1>
                <div className="button-bar">
                    
                    <a href="https://quantumeffect42.github.io/BST.html" target="_blank" rel="noreferrer">
                        <button className="visualizer">
                            Binary Search Tree
                        </button>
                    </a> <br />
                    <a href="https://quantumeffect42.github.io/AVLtree.html" target="_blank"  rel="noreferrer">
                        <button className="visualizer">
                            AVL Tree
                        </button>
                    </a> <br />
                    <a href="https://quantumeffect42.github.io/RedBlack.html" target="_blank"  rel="noreferrer">
                        <button className="visualizer">
                            Red-Black Tree
                        </button>    
                    </a> <br />
                    <a href="https://quantumeffect42.github.io/BPlusTree.html" target="_blank"  rel="noreferrer">
                        <button className="visualizer">
                            B+ Tree
                        </button>
                    </a> <br />
                </div>
            </div>
        );
    }
}
