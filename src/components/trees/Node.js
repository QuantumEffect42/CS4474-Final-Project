
export class Node{
    constructor(key, value){
        this.value = value;
        this.key = key;
        this.left = null;
        this.right = null;
    }

    freeNode(){
        this.left = null;
        this.right = null;
    }
}