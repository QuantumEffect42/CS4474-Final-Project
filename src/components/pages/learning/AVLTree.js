import React from "react";
import Header from "../../navbar/Header"
import Progressbar from "../../progressbar/Progressbar";
import TableOfContents from "../../tableofcontents/TableOfContents";
import "./LearningPage.css";

const LearnAVLPage = () =>{

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
                        AVL Trees
                    </h1>
                    <div className="Intro">
                        <h2 id="AVL-Intro">Introduction</h2>
                        <p>An AVL Tree is a special kind of Binary Search Tree that self balances itself
                            to avoid degenerating into a linked list. This is when a tree ends up with all
                            its nodes in a long line.
                        </p>
                        <p>
                            In order to self balance, each node maintains some additional information called
                            a balance factor which can have a value of either -1, 0, or 1.
                        </p>
                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Balancing">
                        <h2 id="AVL-Balancing">Searching</h2>
                        <p>The balance factor that each node now has is simply the difference between the
                            height of the left subtree and the height of the right subtree or vice versa. Thus:
                        </p>
                        <br />
                        <p>
                            Balance Factor = (height of left of subtree) - (height of right subtree) <br />
                            OR <br />
                            Balance Factor = (height of right subtree) - (height of left subtree)
                        </p>
                        <br />
                        <p>
                            This propert in AVL trees should ALWAYS be -1, 0 or 1. so that the tree remains
                            balanced. If we were inserting or deleting nodes from this tree and that operation
                            caused the balance factor of one of the nodes to become a value other than -1, 0, or 1 
                            we would have to perform a rotation of some kind to rebalance the tree.
                        </p>
                        <p>
                            Below we will cover the various rotations we might encounter when trying to rebalance
                            an AVL tree
                        </p>
                        <br />

                        <h3 id="AVL-Case1">Left Rotate</h3>
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


                        <h3 id="AVL-Case2">Right Rotate</h3>
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

                        <h3 id="AVL-Case3">Left-Right Rotate</h3>
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

                        <h3 id="AVL-Case4">Right-Left Rotate</h3>
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
                        <h2 id="AVL-Insert">Insertion</h2>
                        <p>Now that we've covered how we go about applying rotaitons to the AVL trees to keep them balanced
                            we can start covering how we insert nodes into the tree.
                        </p>
                        <p>
                            We can use the following steps to insert a node into an AVL tree. We will use the tree below as
                            an example and we will insert the Node containing the value 9.
                        </p>

                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_initial-tree.png" alt="Insert 1" className="center"></img>
                            <figcaption>
                                Initial values of the tree we will be inserting into.
                            </figcaption>
                        </figure>
                        <br />

                        <ul>
                            <li>
                                We can use the same insertion method we used for Binary Search Trees to insert the node here.
                                We move left if the node we want to insert is less than the current node, and more right if
                                the node we want to insert is greater than the current node. We do this until we reach the
                                position where the node we want to insert will be stored. In the case of our node 9. It will
                                be placed to the right of the Node containing 8. Additionally, when we insert a node in an AVL
                                tree, we always insert it with a balance factor of 0.
                            </li>

                            <figure>
                                <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_insert.png" alt="Insert 2" className="center"></img>
                                <figcaption>
                                    Tree after inserting the Node containing 9.
                                </figcaption>
                            </figure>
                            <br />

                            <li>
                                We then update the balance factors of each of the nodes. We update them so that the balance
                                factor of a node is positive if the height of the left subtree is greater than height of the 
                                right subtree, the balance factor of a node is negative if the height of the right subtree is
                                greater than the height of the left subtree.<br />
                                The image below shows the updated balance factors for our tree after inserting Node 9.
                            </li>

                            <figure>
                                <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_update-bf.png" alt="Insert 3" className="center"></img>
                                <figcaption>
                                    Tree after updating all the balance factors.
                                </figcaption>
                            </figure>
                            <br />

                            <li>
                                Since we see that there is a node that has a balance factor of 2, we know that the tree is unbalanced
                                and we need to do some rotations to rebalance.<br /> <br />
                                If the balance factor of a node is greater than 1, we know that the left subtree is larger than the
                                right subtree. Thus, we know either a right rotation, or a left right rotation to rebalance properly.
                                <br /> <br />
                                We rebalance our tree by applying a Left-Right Rotation:
                            </li>
                            
                            <figure>
                                <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_balance1.png" alt="Insert 4" className="center"></img>
                                <figcaption>
                                    Tree after applying the first Left Rotation.
                                </figcaption>
                            </figure>
                            <br />

                            <figure>
                                <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_balnce2.png" alt="Insert 5" className="center"></img>
                                <figcaption>
                                    Tree after applying the second Right Rotation.
                                </figcaption>
                            </figure>
                            <br />
                            
                            <li>
                                We can do a similar process when there are nodes that have a balance factor of less than -1. We simply
                                apply either a left rotation or a right-left rotation. 
                            </li>
                            <br />

                            <li>
                                Once we are finished applying the rotations, we update the balance facotrs of all the nodes and check
                                if we need to rebalance anything else. If we do, we simply apply the same methods we outlined above.
                                <br /><br />
                                We can see below the new balance factors of our tree and we can see that our tree is balanced.
                            </li>

                            <figure>
                                <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_final-tree.png" alt="Insert 5" className="center"></img>
                                <figcaption>
                                    Tree after applying the second Right Rotation.
                                </figcaption>
                            </figure>
                            <br />
                        </ul>
                        <br />
                        
                        <p>
                            If we wanted to consider the time complexity of this algorithm, we first need to think about what the worst possible
                            case for our tree is. Since this tree is self balancing, we can't have a case where the tree will degenerate into a
                            Linked-List like a regular Bianry Search Tree. Instead, the tree can only have subtrees that vary in height by at most
                            1 node. This means that instead of potentially searching all the nodes in the tree, we discard half every time we
                            traverse down a level to find the correct spot to insert our node. This gives the insertion algorithm above a time
                            complexity of <code>O(log<sub>2</sub>(n))</code>.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Deleting">
                        <h2 id="AVL-Delete">Deletion</h2>
                        <p>A cool thing about deleting nodes from AVL trees is that we will always end up deleting a node as a leaf</p>

                        <p>There are a few cases that we need to consider when deleting nodes just like we did with Binary Search Trees</p>
                        <ul>
                            <li>
                                If the node we want to delete is a leaf ndoe, then we simply remove the node.
                            </li>
                            <br />
                            <li>
                                If the node we want to delete has one child, we copy all the elements from the child node to the parent
                                and remove the duplicate child node aftwarards.
                            </li>
                            <br />
                            <li>
                                If the node we want to delete has 2 children, we want to find the smallest node in the right subtree
                                of that node. We want to swap the node we want to delete with the smalles node we found. We then
                                delete the smallest node that is a leaf.
                            </li>
                            <br />
                        </ul>

                        <p>
                            Let's consider the following tree. We want to delete the node 13, which has 2 children, so we need to apply
                            the last rule. We will replace Node 13 with 21 and then delete the Node 21 that is a leaf and update the
                            balance factors for each node.
                        </p>

                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_nodeToBeDeleted_0.png" alt="Delete 1" className="center"></img>
                            <figcaption>
                                Initial tree we want to delete from.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_substitute_0.png" alt="Delete 2" className="center"></img>
                            <figcaption>
                                Swap Node 13 with Node 21 since Node 21 is the smallest node in the right subtree.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree_upatebf_0.png" alt="Delete 3" className="center"></img>
                            <figcaption>
                                Removing the Node 21 that is a leaf and calculate the balance factors for each node.
                            </figcaption>
                        </figure>
                        <br />
                        
                        <p>
                            Just like with insertions, once we delete a node, we need to make sure that the tree remains balanced. If
                            There is a node that has a balance factor either greater than 2 or less than -2, we need to rebalance the tree
                            using the same methods we talked about in the insertion section.
                        </p>
                        <p>
                            In the example tree above, we see that Node 21 has a balance factor of 2. We can use a right rotation on nodes
                            9 and 21 to rebalance the tree. We recalcuate the balance factors and we get the following tree.
                        </p>

                        <figure>
                            <img src="https://www.programiz.com/sites/tutorial2program/files/avl-tree-final-tree-1_0_2.png" alt="Delete 4" className="center"></img>
                            <figcaption>
                                Final Tree after performing a right rotation on Nodes 9 and 21 and recalcuating the balance factors.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            Much like with the insertion algorithm, the majority of time this runs is taken up by mostly finding the correct
                            node to delete. Since we know that the tree is balanced and can't degenerate into a Linked-List, we know that
                            every time we move down a level, to find the node we want to delete, we are discarding half of the remaining nodes
                            at each level. If the node we want to delete is a leaf node, then we will get a time complexity for the algorithm
                            of <code>O(log<sub>2</sub>(n))</code>.
                        </p>

                        <br /><br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="complexity-analysis">
                        <h2  id="complexity-table">Time Complexity Comparisons</h2>
                        <p>
                            We can see how AVL Trees stack up against some of the other tree structures in the table below.
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

                    <br /><br />
                    <br /><br />
                    <br /><br />
                </div>
            </div>
        </>
    );
}

export default LearnAVLPage;