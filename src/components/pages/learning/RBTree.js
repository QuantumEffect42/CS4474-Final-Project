import React from "react";
import Header from "../../navbar/Header"
import Progressbar from "../../progressbar/Progressbar";
import TableOfContents from "../../tableofcontents/TableOfContents";
import "./LearningPage.css";

const LearnRBPage = () =>{
    return(
        <>
            <div className="Page-Container">
                <Header />
                <div className="utility">
                    <Progressbar />
                    <TableOfContents />
                </div>

                <div className="Page-Content">
                    <h1>
                        Red-Black Trees
                    </h1>
                    <div className="Intro">
                        <h2 id="RB-Intro">Introduction</h2>
                        <p>A Red-Black tree, like an AVL Tree, is a self balancing tree structure that uses a piece of data
                            to make sure that the tree is balanced. Instead of using a balance factor of -1, 0, and 1 like in
                            AVL Trees, a Red-Black tree colors each of the nodes Red or Black. This means that Red-Black tree
                            nodes contain 5 pieces of information: Colour, key, left child, right child, and parent. Only the
                            root node has no parent value.
                        </p>
                        <p>
                            In order for a tree to be considered a Red-Black Tree, the tree needs to use the following 5
                            properties:
                        </p>
                        <ul>
                            <li>
                                Red-Black Property: Every node is coloured either red or black.
                            </li>
                            <li>
                                Root Property: The root of the tree is always black.
                            </li>
                            <li>
                                Leaf Property: Every leaf node contains the value (NIL) and every leaf node is black.
                            </li>
                            <li>
                                Red Property: If a red node has children, then those children are always coloured black.
                            </li>
                            <li>
                                Depth Property: For every node in the tree, a simple path from this node to any of the leafs
                                in its subtrees has the same number of black nodes (black-depth).
                            </li>
                        </ul>
                        <br />
                        <p>
                            We can see below here an example of a Red-Black tree:
                        </p>
                        <figure>
                            <img src="https://algorithmtutor.com/images/RBTreeExample.png" alt="Example of a Red-Black Tree" className="center"></img>
                            <figcaption>
                                Example of a Red-Black Tree.
                            </figcaption>
                        </figure>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Balancing">
                        <h2 id="RB-Balance">Balancing</h2>
                        <p>Just like in AVL trees, we need to have some method of rotating elements in order to rebalance the tree
                            if it becomes unbalanced from an insertion or a deletion. We use similar rotation techniques from AVL
                            trees that we will cover below.
                        </p>

                        <h3 id="RB-Case1">Left Rotate</h3>
                        <p>We will cover how to do left rotations here. We will assume that the initial
                            initial tree is the one shown below:
                        </p>
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/avl-tree_leftrotate-1.png" alt="Inital AVL Tree" className="center"></img>
                            <figcaption>
                                We will perform a left rotate on this basic tree. Alpha, Beta, and Gamma can all be subtrees while P is a node.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            We will use the following steps to perform the left rotation:
                        </p>
                        <ul>
                            <li>
                                Remove the connection from Node X to Node Y and make the Beta subtree from Node Y
                                the right child of Node X.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_leftrotate-2.png" alt="Part 1 AVL Tree" className="center"></img>
                                    <figcaption>
                                        Tree after above step.
                                    </figcaption>
                                </figure>
                            </li>
                            <br />
                            <li>
                                If Node X has no parent, then make Node Y the new root of the tree.
                            </li>
                            <br />
                            <li>
                                Else if Node X has a parent and Node X is the left child of Node P, make Node Y the
                                left child of Node P and remove the connection to Node X.
                            </li>
                            <br />
                            <li>
                                Else if Node X has a parent and Node X is the right child of Node P, make Node Y the
                                right child of Node P and remove the connection to Node X.
                            </li>
                            <br />
                            <li>
                                Make Node Y the parent of Node X.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_leftrotate-4.png" alt="Final AVL Tree" className="center"></img>
                                    <figcaption>
                                        Tree after doing the all above steps.
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>

                        <br />

                        <h3 id="RB-Case2">Right Rotate</h3>
                        <p>We will cover how to do right rotations here. We will assume that the initial tree is
                            similar to the one used in the last section, shown below:
                        </p>
                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_rightrotate-1.png" alt="Inital AVL Tree for RR" className="center"></img>
                            <figcaption>
                                We will perform a right rotate on this basic tree. Alpha, Beta, and Gamma can all be subtrees while P is a node.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            We will use the following steps to perform the right rotation:
                        </p>
                        <ul>
                            <li>
                                Remove the connection from Node Y to Node X and make the Beta subtree from Node X the left child of
                                Node Y.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_rightrotate-2.png" alt="Part 1 AVL Tree RR" className="center"></img>
                                    <figcaption>
                                        Tree after above step.
                                    </figcaption>
                                </figure>
                            </li>
                            <br />

                            <li>
                                If Node Y has no parent, then make Node X the new root of the tree.
                            </li>
                            <br />

                            <li>
                                Else if Node Y has a parent and Node Y is the left child of Node P, make Node Y the left child of Node P and
                                remove the connection to Node X.
                            </li>
                            <br />

                            <li>
                                Else if Node Y has a parent and Node Y is the right child of Node P, make Node X the right child of Node P and
                                remove the connection to Node Y.
                            </li>
                            <br />

                            <li>
                                Make Node X the parent of Node Y.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_rightrotate-4.png" alt="Final AVL Tree RR" className="center"></img>
                                    <figcaption>
                                        Tree after doing the all above steps.
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                        <br />

                        <p>
                            We can see below an animation of a left and right roation to see the whole process at once:
                        </p>
                        <figure>
                            <img src="https://wkdtjsgur100.github.io/images/posts/rotation.gif" alt="RR + LL Rotate" className="center"></img>
                            <figcaption>
                                Right Rotation and a Left Rotation in action.
                            </figcaption>
                        </figure>
                        <br />

                        <h3 id="RB-Case3">Left-Right Rotate</h3>
                        <p>Now we will cover some more complex rotations. Both Left-Right and Right-Left rotations involve
                            combinations of the above Left and Right rotations.
                        </p>
                        <p>
                            We can follow the below steps to perform a Left-Right Rotation:
                        </p>

                        <ul>
                            <li>
                                If we have an initial tree like the one below, we first perform a left rotation on Node X
                                and Y to make all the nodes into a line.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree-leftright-rotate-1.png" alt="LR Rotate 1" className="center"></img>
                                    <figcaption>
                                        First Left Rotation on the tree.
                                    </figcaption>
                                </figure>
                            </li>
                            <br />

                            <li>
                                Now, we need to perform a right rotation on Nodes Y and Z to rebalance the tree.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree-leftright-rotate-2.png" alt="LR Rotate 2" className="center"></img>
                                    <figcaption>
                                        Second Right Rotation to balance the tree.
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    
                        <br />

                        <h3 id="RB-Case4">Right-Left Rotate</h3>
                        <p>Right-Left Rotations are very similar to the Left-Right rotations, we just simply reverse the order in which
                            we apply the sub operations.
                        </p>
                        <p>
                            We can follow the below steps to perform a Right-Left Rotation.
                        </p>

                        <ul>
                            <li>
                                If we have an initial tree like the one below, we first perform a right rotation on Node X
                                and Y to, once again, make all the nodes into a line.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree-rightleft-rotate-1.png" alt="RL Rotate 1" className="center"></img>
                                    <figcaption>
                                        First Right Rotation on the tree.
                                    </figcaption>
                                </figure>
                            </li>
                            <br />

                            <li>
                                Now, we need to perform a left rotation on Nodes Y and Z to rebalance the tree.

                                <figure>
                                    <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree-rightleft-rotate-2.png" alt="RL Rotate 2" className="center"></img>
                                    <figcaption>
                                        Second Left Rotation on the tree.
                                    </figcaption>
                                </figure>
                            </li>
                            <br />
                        </ul>
                    

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Inserting">
                        <h2 id="RB-Inserting">Insertion</h2>
                        <p>Initially when we insert a new node into a Red-Black tree, this new node will always be coloured
                            red. Once we use the standard Binary Search Tree insertion and insert the new red node, we need
                            to check if the tree still holds to all the properties of Red-Black tress we outlined at the
                            beginning of this section. If we find that one or more of the properties are being violted,
                            we need to perform a recolour and then some rotation.
                        </p>
                        <p>
                            We can use the following algorithm to insert a new node. We will define X to be the root of the
                            tree, and Y will be the leaf where we are inserting the new node:
                        </p>
                        <ul>
                            <li>
                                First, check if the tree is empty. If it is empty, isnert the newnode as the root and colour
                                it black.
                            </li>
                            <li>
                                If the tree is not empty, traverse left if the value we want to insert is less than the value
                                stored at the current node we are at, and right if the value is larger; Just like with a Binary
                                Search Tree.
                            </li>
                            <li>
                                Assign to the new node the parent of the leaf Y where we will be inserting the new node.
                            </li>
                            <li>
                                Create NIL leaves of the new node we just inserted.
                            </li>
                            <li>
                                Assign the colour red to the new node.
                            </li>
                            <li>
                                Rebalance the tree if it violates the Red-Black tree properties by calling an insertFix algorithm.
                            </li>
                        </ul>
                        <br />

                        <p>
                            We always insert new nodes as red due to the black-height property that Red-Black trees have.
                            Adding a new red node doesn't change the number of black nodes on the simple path from the parent
                            to the leaves. 
                        </p>
                        <br />

                        <p>
                            Now we will show the algorithm that will help us rebalance the treee and remove any violations of
                            the Red-Black tree properties. We can use the algorithm below:
                        </p>

                        <ul>
                            <li>
                                We will define some terms here: p is the parent of the node that caused the violation. gP is the
                                grandparent of the node that caused the violation, the parent of p. uP is the sibling node of the
                                parent that caused the violation, the other child node of gp that isn't p.
                            </li>
                            <li>
                                <b>Case 1:</b><br />
                                If the uP and p are both red, we change both children of gP to black and we change the color of gP
                                to red.
                            </li>
                            <li>
                                <b>Case 2:</b><br />
                                If uP is black and p is red and the violating node is red and the violating node is the left child of p,
                                perform a right roation on p with the violating node.
                            </li>
                            <li>
                                <b>Case 3:</b><br />
                                If uP is black and p is red and the violating node is red and the violating node is the right child of p,
                                perform a left rotation on gp with p. Then colour p to black, and gp to red.
                            </li>
                        </ul>
                        <br />
                        <p>
                            Here's a video from Michael Sambol below illustrating the different cases with an animation to give an idea for how this all works.
                        </p>
                        <br />
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/A3JZinzkMpk" title="RB-Tree Insertion"></iframe>
                        <br />
                        
                        <p>
                            The time complexity analysis for Red-Black trees is very similar to that of AVL trees. Since we know that the
                            tree is balanced and it can't degenerate into a Linked-List, and we know that we have to first search for
                            and find the correct spot to insert our new node, the majority of the time this algorithm will run will be
                            dominated by searching. When we search for a node in Red-Black trees, we discard half of the nodes at each level
                            thus, it will take us <code>O(log<sub>2</sub>(n))</code> time to find the correct location of our node and insert
                            it into the tree.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Deleting">
                        <h2 id="RB-Delete">Deletion</h2>
                        <p>Now we can take a look at how to delete a node from a Red-Black tree. Once again, it's a bit more tricky since
                            we need to make sure that all the properties are adhered to.
                        </p>
                        <p>
                            We can use the following algorithm to delete a node from the Red-Black Tree.
                        </p>

                        <ul>
                            <li>
                                When the node we want to delete has a left child that is NIL, do the following:
                                <ul>
                                    <li>
                                        First, we store the original colour of the node we want to delete in a variable called
                                        originalColour.
                                    </li>
                                    <li>
                                        Replace the node we want to delet with it's right child. Meaning that the parent of the node
                                        we wanted to delete will now connect with it's right child.
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </li>
                            <li>
                                When the node we want to delete has a right child that is NIL, do the following:
                                <ul>
                                    <li>
                                        First, we store the original colour of the node we want to delete in a variable called
                                        originalColour.
                                    </li>
                                    <li>
                                        Replace the node we want to delete with it's left child. Meaning that the parent of the node
                                        we wanted to delete will now connect with it's left child
                                    </li>
                                </ul>
                            </li>
                            <li>
                                When the node we want to delete has no NIL children, do the follwing:
                                <ul>
                                    <li>
                                        First, we store the original colour of the node we want to delete in a variable called
                                        originalColour.
                                    </li>
                                    <li>
                                        Find the smallest node in the right subtree of the node we want to delete. We will label this node
                                        Y.
                                    </li>
                                    <li>
                                        We store the originalColour of Node Y in another variable and label the right child of Y as X.
                                    </li>
                                    <li>
                                        Replace node Y with node X and Set the right child node Y to be the right child of the node we
                                        want to delete.
                                    </li>
                                    <li>
                                        Replace node Z with node Y.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <br />
                        <p>
                            Here's another video from Michael Sambol below illustrating the different cases with an animation to give an idea for how this all works.
                        </p>
                        <br />
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/lU99loSvD8s" title="RB-Tree Insertion"></iframe>
                        <br />

                        <p>
                            Now that we have the node deleted, we can recolour the tree using the algorithm below:
                        </p>
                        <ul>
                            <li>
                                There are 4 cases that we will have to consider:
                            </li>
                            <li>
                                <b>Case 1:</b><br />
                                When W is red.
                                <ul>
                                    <li>
                                        Change the colour of W to black.
                                    </li>
                                    <li>
                                        Set the parent of X to red.
                                    </li>
                                    <li>
                                        Perform a left rotation on the parent of X.
                                    </li>
                                    <li>
                                        Change W to point to the new sibling of X, wherever X ended up after the rotation.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Case 2:</b><br />
                                When W is black and both children of W are black.
                                <ul>
                                    <li>
                                        Change W to Red.
                                    </li>
                                    <li>
                                        Change X to point to it's parent.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Case 3:</b><br />
                                When W is black, and the left child of W is red, and the right child of W is black.
                                <ul>
                                    <li>
                                        Change the color of the left child of W to black.
                                    </li>
                                    <li>
                                        Change the color of W to red.
                                    </li>
                                    <li>
                                        Perform a right rotation on W.
                                    </li>
                                    <li>
                                        Change W to be pointing to the sibling of X.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Case 4:</b><br />
                                When W is black, and the right child of W is red.<br />
                                If we do type 3, then we will have to 2 type 4 as well.
                                <ul>
                                    <li>
                                        Change W to the same colour as it's parent.
                                    </li>
                                    <li>
                                        Change the parent of X to be black.
                                    </li>
                                    <li>
                                        Change the colour of the right child of w to be black.
                                    </li>
                                    <li>
                                        Perform a left rotation on the parent of X.
                                    </li>
                                    <li>
                                        Change X to point to the root of the tree.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                At the very end, change the colour of X to black.
                            </li>
                        </ul>
                        <br />
                        <p>
                            It's important to remember that we may need to the above fixes a number of times as we go through the tree.
                            It is not guaranteed that applying 1 case will fix all the problems and it is likely that a combination of the
                            cases above will need to be applied to restore the Red-Black properties.
                        </p>
                        <br />

                        <p>
                            Here's a final video from Michael Sambol below illustrating the different cases with an animation to give an idea for how this all works.
                        </p>
                        <br />
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/iw8N1_keEWA" title="RB-Tree Insertion"></iframe>
                        <br />

                        <p>
                            The time complexity of the delete algorithm is very similar to the insertion algorithm. Since we will spend most
                            of our time searching for the node to delete in this algorithm, and we know that the tree is balanced and thus
                            can't degenerate into a Linked-List, we know that every time we move down a level, we can discard half the nodes
                            the tree, meaning that the algorithm will take <code>O(log<sub>2</sub>(n))</code> time in the worst case.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                        
                    </div>

                    <div className="complexity-analysis">
                        <h2 id="complexity-table">Time Complexity Comparisons</h2>
                        <p>
                            We can see how Red-Black Trees stack up against some of the other tree structures in the table below.
                        </p>
                        
                        <table>
                            <tr>
                                <th>Data Structure</th>
                                <th>Searching</th>
                                <th>Insertion</th>
                                <th>Deletion</th>
                            </tr>
                            <tr>
                                <td>BST</td>
                                <td>O(h)</td>
                                <td>O(h)</td>
                                <td>O(h)</td>
                            </tr>
                            <tr>
                                <td>AVL Tree</td>
                                <td>O(log<sub>2</sub>(n))</td>
                                <td>O(log<sub>2</sub>(n))</td>
                                <td>O(log<sub>2</sub>(n))</td>
                            </tr>
                            <tr>
                                <td>RB Tree</td>
                                <td>O(log<sub>2</sub>(n))</td>
                                <td>O(log<sub>2</sub>(n))</td>
                                <td>O(log<sub>2</sub>(n))</td>
                            </tr>
                            <tr>
                                <td>B+ Tree</td>
                                <td>O(log<sub>t</sub>(n))</td>
                                <td>O(log<sub>t</sub>(n))</td>
                                <td>O(log<sub>t</sub>(n))</td>
                            </tr>
                        </table>

                    </div>
                    <br />
                    <br />
                    <br />

                </div>
            </div>
        </>
    );
}

export default LearnRBPage;