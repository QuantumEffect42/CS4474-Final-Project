import { Tree } from  "react-tree-graph";
// import { BinaryTree } from "../trees/BinaryTree";
// import { Node } from "../trees/Node";

import "./Visualizer.css"

// const binaryTree = new BinaryTree();

// const node1 = new Node(10, 10);
// const node2 = new Node(12, 12);
// const node3 = new Node(9, 9);
// const node4 = new Node(11, 11);
// const node5 = new Node(8, 8);
// const node6 = new Node(13, 13);

// binaryTree.insert(binaryTree.root, node1);
// binaryTree.insert(binaryTree.root, node2);
// binaryTree.insert(binaryTree.root, node3);
// binaryTree.insert(binaryTree.root, node4);
// binaryTree.insert(binaryTree.root, node5);
// binaryTree.insert(binaryTree.root, node6);

// const test = binaryTree.convertToJson();

const data = {
    name: "Parent",
    children : [{
        name: "Child 1"
    }, {
        name: "Child 2"
    }]
};

// console.log(JSON.stringify(test));

const BSTVisualizer = () => {
    return(
        <div className="visualizer-container">
            <Tree data={data} height={400} width={400} svgProps={{transform: "rotate(90)"}} textProps={{transform: "rotate(270)"}} animated={true}/>
        </div>
    );
};

export default BSTVisualizer;