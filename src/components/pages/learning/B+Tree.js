import React from "react";
import Header from "../../navbar/Header"
import Progressbar from "../../progressbar/Progressbar";
import TableOfContents from "../../tableofcontents/TableOfContents";
import "./LearningPage.css";

const LearnBPlus = () =>{

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
                        B+ Trees
                    </h1>
                    <div className="Intro">
                        <h2 id="BPlus-Intro">Introduction</h2>
                        <p>
                            A B+ tree is a prety advanced form of a self-balancing tree where every value is present at the leaf level.
                            Additionally, all the leaf nodes will be in order from left to right by their values with pointers also
                            moving from the leftmost node to it's neighbour node.
                        </p>
                        <p>
                            These trees are quite important to understand since they are used quite often with databases since it allows
                            for easy indexing of the data, making data access easier and faster.
                        </p>
                        <br />

                        <p>
                            There are some properties of a B+ tree that we need to know before we start looking at operations:
                        </p>
                        <ul>
                            <li>
                                All leaves are at the same level.
                            </li>
                            <li>
                                The root has at least 2 children.
                            </li>
                            <li>
                                Each node except the root can have a max of 'm' children and at least 'm/2' children. Where m is the order
                                of the B+ tree.
                            </li>
                            <li>
                                Each node can contain a max of 'm - 1' keys and minimum of 'ceil(m/2) - 1' keys.
                            </li>
                        </ul>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Searching">
                        <h2 id="BPlus-Searching">Searching</h2>
                        <p>Since a B+ tree can have many more than 2 children, searching is a bit different than in Binary Search Trees.</p>

                        <p>
                            We will use the following base tree, which has an order of 3. We will search for the node 40:
                        </p>
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/search-tree.png" alt="B+ Tree" className="center"></img>
                            <figcaption>
                                Initial B+ tree we will search on.
                            </figcaption>
                        </figure>
                        <br />
                        
                        <ul>
                            <li>
                                We compare the node we are searching for with the keys that are stored in the present node we are checking.
                                Since we are searching for the node 40, and we know that 40 is greater than 25, we will follow the pointer
                                to the right of 25 to the next node. All nodes stored to the left of a particular value are strictly less than
                                that value. In the case of 25, all nodes greater than or equal to 25 go to the right.
                            </li>
                            <li>
                                We then compare 40 with the values stored in the next node. Since 40 is greater than 35, but less than 45, we
                                will follow the middle pointer to take us to the node containing values greater than or equal to 35 but less than
                                45.
                            </li>
                            <li>
                                We then check the values in this new node to see if 40 is contained here. Since this is a leaf node, and all values
                                in a B+ tree are stored in the leaves, we know that 40 must be here if it is in the tree. Sure enough, 40 is the second
                                element in this leaf node.
                            </li>
                        </ul>
                        <br />

                        <p>
                            We can see that we simply travel down the tree similar to how we would with Binary Search Tree if it were allowed to have
                            more than 2 children.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Inserting">
                        <h2 id="BPlus-Insert">Insertion</h2>
                        <p>When we insert into a B+ tree, we usually follow these steps: Search for the appropriate leaf to store the node, inserting
                            the element into the leaf, and splitting the nodes and rebalancing as necessary.
                        </p>
                        <p>
                            We can use the following algorithm to insert elements into the tree.
                        </p>

                        <ul>
                            <li>
                                <b>Case 1:</b> <br />
                                If the leaf node were we would insert the node is not full, insert the value into the leaf in increasing order.
                            </li>
                            <li>
                                <b>Case 2:</b> <br />
                                If the leaf is full, insert the value into the leaf in increasing order then perform the following steps to balance.
                                <ul>
                                    <li>
                                        Break the leaf node in the middle floor(m/2th position).
                                    </li>
                                    <li>
                                        Also add the middle value from the leaf floor(m/2th key) to the parent node.
                                    </li>
                                    <li>
                                        Repeat the above if the above steps if the parent is also full until the tree is balanced.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <br />

                        <p>
                            We can see an example below where we will insert the nodes 5, 15, 25, 35 and 45 into a B+ tree.
                        </p>
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-2-b+tree.png" alt="B+ Tree Insertion 1" className="center"></img>
                            <figcaption>
                                Inserting 5 and 15 into the first node.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-3-b+tree.png" alt="B+ Tree Insertion 2" className="center"></img>
                            <figcaption>
                                Inserting 25 into the leaf, breaking it in the middle, and pushing 15 to the parent node.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-4-b+tree.png" alt="B+ Tree Insertion 3" className="center"></img>
                            <figcaption>
                                Inserting 35 into right leaf breaking it in the middle, and pushing 25 to the parent node.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/insert-5-b+tree.png" alt="B+ Tree Insertion 4" className="center"></img>
                            <figcaption>
                                Inserting 45 into the rightmost leaf, breaking it in the middle and pushing 35 to the parent node. Break the parent node
                                in the middle and push 25 to the parent node.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            The time complexity of this algorithm is a bit more complex since the nodes can contain more than 2 children,
                            unlike many other trees. We will say that the B+ we are analysing has a degree of <i>t</i>, meaning that it can
                            have at most <i>t</i> children. Once again, the majority of time that we spend in this algorithm is dominated
                            by searching for the correct place to insert our node. Since these trees are balanced, we know that when we
                            move down a level to find the correct position, we are only using 1/<i>t</i> of the total number of nodes in
                            the tree. Thus, we eliminate (<i>t</i> - 1)/<i>t</i> nodes every time we move down a level. This gives
                            us a time complexity of <code>O(log<sub>t</sub>(n)</code> for insertion.
                        </p>
                        
                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Deleting">
                        <h2 id="BPlus-Delete">Deletion</h2>
                        <p>Deletion from a B+ tree has a similar process to insertion, follow the same 3 main steps: searching for the node where the key We
                            want to delete is stored, deleting the key, and then rebalancing the tree if necessary.
                        </p>
                        <p>
                            One thing that we need to be careful of when deleting from B+ trees is underflow. Underflow happens when there are fewer keys in
                            node than the minimum number it should be holding. 
                        </p>
                        <p>
                            There are some facts about B+ trees that have a degree of m that will be useful to us in this operation.
                        </p>

                        <ul>
                            <li>
                                A node can have a maximum of 'm' children.
                            </li>
                            <li>
                                A node can contain a maximum of 'm - 1' keys
                            </li>
                            <li>
                                A node should have a minimum of at least 'ceil(m/2)' children.
                            </li>
                            <li>
                                A node should contain a minimum 'ceil(m/2) - 1' keys except for possibly the root node.
                            </li>
                        </ul>
                        <br />
                        <p>
                            Once we search the tree and find the key that we want to delete, we can follow the above steps to delete it safely from the tree.
                        </p>

                        <h3 id="BPlus-Case1">Case 1</h3>
                        <p>This case occurs when the key that we want to delete is only found at the leaves of the tree and is not present
                            in any internal nodes.
                        </p>
                        <p>There are 2 scenarios that can play out in this case:</p>

                        <ul>
                            <li>
                                There is more than the minimum number of keys in the node.

                                <ul>
                                    <li>
                                        In this case, just delete the key. Everything will still be as it should afterwards.
                                    </li>
                                </ul>

                                <figure>
                                    <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-1-b+tree.png" alt="B+ Tree Deletion 1" className="center"></img>
                                    <figcaption>
                                        Deleting the key 40 from this B+ tree is easy since it is only the leaves and that leaf has 2 keys,
                                        more than the minimum. Thus, we simply delete it from the tree.
                                    </figcaption>
                                </figure>
                                <br />
                            </li>

                            <li>
                                If there is exactly the minimum number of keys in the leaf node where the key we want to delete is, we can
                                delete the key and then split the immediate sibling node apart. We then take the middle node from this sibling
                                leaf node and push it to the parent node.

                                <figure>
                                    <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-2-b+tree.png" alt="B+ Tree Deletion 2" className="center"></img>
                                    <figcaption>
                                        Deleting the key 5 from this B+ tree means that we need to change the parent node slightly. We split the sibling
                                        node apart and make 20 the new parent to preserve the ordering.
                                    </figcaption>
                                </figure>
                                <br />

                            </li>
                        </ul>

                        <h3 id="BPlus-Case2">Case 2</h3>
                        <p>This case occurs when the key we want to delete is also stored in the interal nodes. When this occurs, we need to make sure
                            that we remove the node from the leaves and the internal nodes as well.
                        </p>
                        <p>
                            There are a couple scenarios that can play out in this case.
                        </p>

                        <ul>
                            <li>
                                If there is more than the minimum number of keys in the leaf node and the internal node, we can delete the key from both.
                                Once both keys are removed, we can fill the empty space in the internal node by the next largest key in the tree than the
                                key we deleted.

                                <figure>
                                    <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-3-b+tree_0.png" alt="B+ Tree Deletion 3" className="center"></img>
                                    <figcaption>
                                        Here, we can delete key 45 by removing it from both the internal node and the leaf node since there would be
                                        more than 1 key left in each. We then fill the space where 45 was with the key 55 since it is the next largest
                                        value.
                                    </figcaption>
                                </figure>
                                <br />
                            </li>
                            <li>
                                If there is an exact minimum number of keys in the leaf node, then we can delete the key and simply borrow a key from
                                an immediate sibling of the parent. We then split this node apart and fill the space in the node with the borrowed
                                key.
                                <figure>
                                    <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-4-b+tree.png" alt="B+ Tree Deletion 5" className="center"></img>
                                    <figcaption>
                                        Here, we can delete key 35 by removing it from bothe the leaf and the internal node. We then split the node containing 25 and 30
                                        apart since they shared a parent with the leaf node containing 35. We then replace the space where 35 was in the internal node with
                                        30.
                                    </figcaption>
                                </figure>
                                <br />
                            </li>
                            <li>
                                If we have only a single key in the leaf node, but when we delete the key, we generate a space above the immediate parent node
                                for the leaf, we use this case. Once we delete this key from the leaf, we can merge the space with it's sibling key.
                                Then, we can fill the empty space in the grandparent node with the next key from the leaves.
                                <figure>
                                    <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-5-b+tree.png" alt="B+ Tree Deletion 6" className="center"></img>
                                    <figcaption>
                                        Here, we can delete key 25 by removing it from the leaves, then sending 30 to fill the space left 25 at the root.
                                    </figcaption>
                                </figure>
                                <br />
                            </li>
                        </ul>

                        <h3 id="BPlus-Case3">Case 3</h3>
                        <p>This case occurs when we need to shrink the height of the tree and it can get a little bit complicated.</p>
                        <p>
                            Take for example the tree below, if we wanted to delete the key 55, we would need to shrink the tree since a leaf and
                            internal node would be deleted.
                        </p>
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/deletion-6-b+tree.png" alt="B+ Tree Deletion 7" className="center"></img>
                            <figcaption>
                                Here, we delete the node 55 to trigger this case.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            Here, you can see that we resolve the situation by moving the root down to the other child node that doesn't disappear.
                            We then adjust the pointers to the leaves and the height of the tree has shrunk by 1 while remaining mostly intact.
                        </p>
                        <br />

                        <p>
                            The time complexity for this deletion algorithm is, once again, similar to that of insertion. Since we will spend
                            the majority of time in this algorithm serching for the node to delete, and we remove (<i>t</i> - 1)/<i>t </i> 
                            nodes every time we traverse down a level, we know that the algorithm will have a time complexity of <code>O(log<sub>t</sub>(n)</code>.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="complexity-analysis">
                        <h2  id="complexity-table">Time Complexity Comparisons</h2>
                        <p>
                            We can see how B+ Trees stack up against some of the other tree structures in the table below.
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

export default LearnBPlus;