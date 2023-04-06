
export class BinaryTree{

    constructor(){
        this.root = null;
    }

    insert(node, newNode){ //method to insert a ndoe into the binary tree
        if(this.root === null){
            this.root = newNode;
        }
        else{
            if(newNode.key > node.key){
                if(node.left === null){
                    node.left = newNode;
                }
                else{
                    this.insert(node.left, newNode);
                }
            }
            else if(newNode.key < node.key){
                if(node.right === null){
                    node.right = newNode;
                }
                else{
                    this.insert(node.right, newNode);
                }
            }
            else{
                node.value = newNode.value;
            }
        }
    }

    remove(node, key){
        if(node === null){
            return null;
        }
        else if(key > node.key){
            node.left = this.remove(node.left, key);
            return node;
        }
        else if(key < node.key){
            node.right = this.remove(node.right, key);
            return node;
        }
        else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            if(node.left == null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            
            const smallestNode = this.findSmallestNode(node.right); //find smallest node in the right subtree
            node.key = smallestNode.key;
            node.value = smallestNode.value;

            node.right = this.remove(node.right, smallestNode.key);

            return node;
        }
    }

    find(node, key){ //function that finds and returns a specified key value from the tree. Can make this key value an integer or a string
        if(node === null){
            return null;
        }
        else if(key > node.key){ //traverse left if value stored in the node is greater than passed key
            return this.find(node.left, key);
        }
        else if(key < node.key){ //traverse right if value stored in the node is smaller than passed key
            return this.find(node.rihgt, key);
        }
        else{ //if the values are equal, return the found node
            return node;
        }
    }

    findSmallestNode(node){
        if(node.left === null){
            return node;
        }
        return this.findSmallestNode(node.left);
    }

    printTree(node){
        if(node !== null){
            console.log(node.value);
            this.printTree(node.left);
            this.printTree(node.right);
        }
    }

    convertToJson(){
        let jsonTree = JSON.stringify(this.root);
        let jsonTreeReformat = jsonTree.replaceAll("\"left\":", "\"children\":");
        jsonTreeReformat = jsonTreeReformat.replaceAll(/\"value\":\d+,/g, "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"children\":null", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"right\":null", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"left\":null", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"key\"", "\"name\"")
        jsonTreeReformat = jsonTreeReformat.replaceAll(",,", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll(",},", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"right\":", "}");
        jsonTreeReformat = jsonTreeReformat.replaceAll(",", "@");
        jsonTreeReformat = jsonTreeReformat.replaceAll(/}@/g, "|");
        jsonTreeReformat = jsonTreeReformat.replaceAll("|", "");
        jsonTreeReformat = jsonTreeReformat.replaceAll("@", ",");
        jsonTreeReformat = jsonTreeReformat.replaceAll("}{", "},{");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"children\":", "\"children\": [")
        jsonTreeReformat = jsonTreeReformat.replaceAll("}}", "}]}");
        jsonTreeReformat = jsonTreeReformat.replaceAll("}]}}", "}]}]}");
        jsonTreeReformat = jsonTreeReformat.replaceAll("\"name\":", "\"name\": ")

        console.log(jsonTreeReformat)

        // const json = JSON.parse(jsonTreeReformat);

        console.log("conversion done successfully");

        // return JSON.parse(jsonTreeReformat);

        // return JSON.parse(JSON.stringify(this.root));
    }

}