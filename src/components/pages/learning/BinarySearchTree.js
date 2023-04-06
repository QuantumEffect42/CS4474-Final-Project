import React from "react";
import Header from "../../navbar/Header";
import Progressbar from "../../progressbar/Progressbar";
import TableOfContents from "../../tableofcontents/TableOfContents";
import "./LearningPage.css";

const LearnBSTPage = () =>{

    return (
        <>
            <div className="Page-Container">
                <Header/>
                <div  className="utility">
                    <Progressbar />
                    <TableOfContents />
                </div>

                <div className="Page-Content">
                    <h1>
                        Binary Search Trees
                    </h1>
                    <div className="Intro">
                        <h2 id="BST-Intro">Introduction</h2>
                        <p>A Binary Search Tree is a data structure that allows us to maintain a sorted list of numbers or elements very easily. </p>
                            <br />
                        <p> 
                            It is called "Binary" since each node in the tree can have at most 2 children, and it is called a search tree since
                            it can be used to search for a specific node in <code>O(log(n))</code> time on average.</p>
                        <br />
                        <p>There are some basic rules of binary search trees that we need to remember going forward: </p>
                        <br />
                        <ul>
                            <li>Every node in the left subtree of the root is less than the root,</li>
                            <li>Every node in the right subtree of the root is greater than the root,</li>
                            <li>Both subtrees of a node are also subtrees, meaning that binary search trees are recursive structures.</li>
                        </ul>
                        <br />
                        <p>Below you can see an example of a valid binary tree on the left, and an invalid binary tree on the right:</p> 
                        <br />
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.png" alt="Valid Vs Invalid BST" className="center"></img>
                            <figcaption>
                                Remember that all children nodes to the left of a parent need to be less than the parent node.
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            The node that contains 2 in the above image should be the right child of the node containing 1 since it is smaller than
                            3, meaning it will go to the left, and larger than 1, meaning it will go to the right.
                        </p>
                        <br />
                        <p>Below, we will go throug the various operations we can perform on Binary Search Trees.</p>
                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Searching">
                        <h2 id="BST-Searching">Searching</h2>
                        <p>When searching for a particular value in a Binary Search Tree we only need to remember the properties we discussed above. </p>
                        <br />
                        <p> 
                            If the value we are searching for is less than the node we are currently at, we move to the left child. If the node we are looking for
                            is greater than the node we are currently looking at, we move to the right child. All we do is repeat those steps until we find the
                            value we are looking for or we get to a leaf node, that is a node that has no children. 
                        </p>
                        <br />
                        <p>We can use a simple recursive algorithm below that will find a node for us:</p>
                        <pre>
                            <code>
                                Search(root, number): <br />
                                &emsp;if(root == null): <br />
                                &emsp;&emsp;return null; <br />
                                &emsp;if(number == root.data): <br />
                                &emsp;&emsp;return root.data; <br />
                                &emsp;if(number &lt; root.data): <br />
                                &emsp;&emsp;return Search(root.left, number); <br />
                                &emsp;if(number &gt; root.data); <br />
                                &emsp;&emsp;return Search(root.right, number); <br />
                            </code>
                        </pre>
                        <br />
                        <p>
                            We first pass in the root node of the tree and check if it is the value we are searching for. If it is, we simply return the value in the node.
                            We also check if the root node is null, which would happen when there is no data stored in the tree, in which case, we simply return null. We then
                            start checking if the value is less than or greater than the value of the root node. If it is less than the root node, we call the function again
                            this time passing in the left child of the root node as the new root. We mentioned above that all subtrees in a Binary Search Tree are also
                            Binary Search Trees, meaning we can simply call the algorithm again when searching the left or right subtrees and it will work without any issues.
                            When we do eventually find the value we are looking for, we return the data stored in the node and this will be propogated back through the recursive
                            algorithm. 
                        </p>
                        <br />
                        <p>
                            If, however, the value we are looking for isn't in the tree, then we will eventually get to a leaf. Then, the next time we call the algorithm, we
                            will pass in a null value as the new root, meaning that a null value is going to be propogated back through and returned by the function.
                        </p>
                            <br />
                        <p>Here you can see an animation of searching for the node 27 in a Binary Search Tree:</p>
                        <figure>
                            <img src="https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-sorted-array-animation.gif" alt="Binary Search Tree seraching for value 27" className="center"></img>
                            <figcaption>
                                Searching for node 27 in a Binary Search Tree.
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            If we wanted to think about the time complexity of this algorithm, there are a few things that we need notice about Binary Search Trees. Unlike
                            some of the other self balancing trees, like Red-Black or AVL trees, there is no way for a Binary Search Tree to balance itself so that all the
                            nodes are evenly distributed. 
                        </p>
                        <p>
                            Consider the case where the root of the tree might be the smallest number, and all elements after are larger than the previous. This would mean
                            that the Binary Search Tree would effectively be a line, since every node will always go to the right of the last node. When this happens, we say
                            the tree has degenerated into a Linked-List. This means that if we wanted to consider the worst case time complexity of a Binary Search Tree, we
                            need to use this case. If there are <i>n</i> nodes in the tree, and the tree has degenerated into a Linked-List,
                            then we know that the height of the tree, <i>h</i> = <i>n</i>. Thus, the worst case time complexity for the search algorithm is <code>O(h)</code>,
                            since the node we might be searching for could be a leaf.
                        </p>

                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Inserting">
                        <h2 id="BST-Insert">Insertion</h2>
                        <p>
                            Now that we've got a hang of searching, we can move on to inserting, which is very similar since we need to make sure we retain the properties
                            we discussed above: 
                        </p>
                        <ul> 
                            <li>All elements to the left of a node are less than the value stored in the node. </li>
                            <li>All elements to the right of the node are greater than the value stored in the node.</li>
                        </ul>
                        <br />
                        <p>
                            When we want to insert an item, we perform the same searching algorithm we showed above until we get to the correct position, then we simply
                            create a new node and store it in that location.
                        </p>
                            <br />
                        <p>You can see below an algorithm for inserting into a Binary Search Tree:</p> 
                        <pre>
                            <code>
                                Insert(node, number): <br />
                                &emsp;if(node == null): <br />
                                &emsp;&emsp;return createNode(number); <br />
                                &emsp;if(number &lt; node.data): <br />
                                &emsp;&emsp;node.left = Insert(node.left, number); <br />
                                &emsp;else if(number &gt; node.data); <br />
                                &emsp;&emsp;node.right = Insert(node.right, number); <br />
                                &emsp;return node;
                            </code>
                        </pre>
                        <br />

                        <p>You can see below an animation on how this algorithm works:</p>
                        <figure>
                            <img src="https://daankolthof.com/wp-content/uploads/2020/01/BST-insertion-animation.gif" alt="Binary Search Tree inserting the values 10 and 5" className="center"></img>
                            <figcaption>
                                Inserting the nodes 10 and 5 into the Binary Search Tree.
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            As you can see, we apply the generally the same searching functionality we discussed in the previous section. The only real difference here is
                            that we keep track of which subtree we're going to head down by assigning the children nodes of the current node depending on which if statement
                            we head into.
                        </p>
                        <p>
                            For example, in the animation, if we wanted to insert 10, we would call this insert function with the initial node of 6 and the number 10.
                            We would then hit the else if condition since the 10 is greater than 6. We then call the function again with node 8 and number 10. Once
                            again we hit the else if condition and call the function again with node 9 and number 10 since 10 is greater than 8. Finally, we will get to the
                            function call after we go through node 9, where we get the right child node of 9 as null. Because of this, we would go into the first if statement
                            and create a new right child node of 9. We would then propogade back up the tree, returning the current node we are at to keep the rest of the tree
                            the same.
                        </p>
                        <br />

                        <p>
                            If we wanted to consider the time complexity for this operation on Binary Search Trees, we will once again consider the worst case where the tree has
                            degenerated into a Linked-List. We will use the example from the searching section where all of the nodes in the binary tree are larger than the previously
                            inserted node. This would make a straight line in the tree moving to the right, since every child is larger than their parent. If we wanted to insert another
                            node that was larger than the only leaf node in the tree, we would have to traverse down the entire height of the tree to find the correct position
                            to insert the node. Once again, this gives us a worst case time complexity of <code>O(h)</code>.
                        </p>
                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="Deleting">
                        <h2 id="BST-delete">Deletion</h2>
                        <p>Deletion from Binary Search Trees gets a bit more complicated because we need to make sure that we preserve the properties of the Binary Search Tree.
                            There are 3 cases that will help us delete any node from the tree properly.
                        </p>
                        <br />

                        <h3 id="BST-Case1">Scenario 1</h3>
                        <p>The first case we are going to consider is when the node we want to delete is a leaf node. That is, when the node has no children. </p>
                        <p>When this is the case, we can simply delete the node from the tree and all the properties are preserved automatically.</p>
                        <br />

                        <p>You can see below an image of this case:</p>
                        <figure>
                            <img src="https://www.ideserve.co.in/learn/img/bstDelete_0.gif" alt="Binary Search Tree deleting the node 4" className="center"height="200"></img>
                            <figcaption>
                                Deleting the node 4 from a Binary Search Tree.
                            </figcaption>
                        </figure>
                    
                        <br />

                        <h3 id="BST-Case2">Scenario 2</h3>
                        <p>The second case we are going to consider is when the node we want to delete has 1 child node. </p>
                        <p>When this is the case, we follow these below steps: </p>
                        <ul>
                            <li>Replace the node we wish to delete with it's child.</li>
                            <li>Remove the child node from where it was originally.</li>
                        </ul>
                        <br />

                        <p>You can see below a series of images for this case:</p>
                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-delete-3.png" alt="Node 6 is to be deleted" className="center"></img>
                            <figcaption>
                                Node 6 is to be deleted.
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-delete-4.png" alt="Apply the first step" className="center"></img>
                            <figcaption>
                                Apply the first step for this case: "replace the node we want to delete with it's child".
                            </figcaption>
                        </figure>
                        <br />

                        <figure>
                            <img src="https://cdn.programiz.com/sites/tutorial2program/files/bst-delete-5.png" alt="Apply the second step" className="center"></img>
                            <figcaption>
                                Apply the second step for this case: "Remove the child node from where it was originally".
                            </figcaption>
                        </figure>
                        <br />

                        <p>
                            This process also works if the child node also has children nodes of it's own. Just apply the same rules and move the children along with the
                            child node when we replace its parent.
                        </p>
                        <br />

                        <h3 id="BST-Case3">Scenario 3</h3>
                        <p>The third and final case we will consider is when the node we want to delete has 2 child nodes.</p>
                        <p>When this is the case, we follow these below steps:</p>
                        <ul>
                            <li>Get smallest element from the right subtree of the node,</li>
                            <li>Replace the node we want to delete with this node,</li>
                            <li>Remove the duplicate node from the tree.</li>
                        </ul>
                        <br />

                        <p>You can see below an animation for this case:</p>
                        <figure>
                            <img src="https://1.bp.blogspot.com/-NEDj-KtZUGM/YLhtRv-PNGI/AAAAAAAAOvM/UY0WmAxsHSI4kmGeXnelQF4v3lRBLFVPQCLcBGAsYHQ/s320/delete_bst.gif" alt="Delete case 3" className="center"></img>
                            <figcaption>
                                Node 62 is to be deleted.
                            </figcaption>
                        </figure>
                        <br />
                        <p>
                            You can see that the we search the right subtree for the smallest node, swap with the parent and delete the parent node as a leaf. We always
                            swap the smallest in the right subtree, or the largest in the left subtree, with the parent so that all properties of the Binary Search Trees
                            are preserved.
                        </p>
                        <br />

                        <p>
                            Just like with searching and insertion, if we want to find the time complexity of this algorithm, we need to consider the case where the tree
                            has degenerated into a Linked-List. If we use the same example from insertion, where every child node is larger than their parent, making a
                            line that moves to the right in the tree, then we know that we might have to potentially check all nodes to the only leaf node to find the
                            node we want to delete. This, once again, gives us a time complexity of <code>O(h)</code> for this algorithm.
                        </p>
                        <br />
                        <hr></hr>
                        <br />
                    </div>

                    <div className="complexity-analysis">
                        <h2 id="complexity-table">Time Complexity Comparisons</h2>
                        <p>
                            We can see how Binary Search Trees stack up against some of the other tree structures in the table below.
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

export default LearnBSTPage;