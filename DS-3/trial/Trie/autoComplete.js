// Auto complete system using Trie
class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let node=this.root;
        for(let ch of word){
             if(!node.children[ch]){
                 node.children[ch]=new TrieNode();
            }
            node=node.children[ch];
        }
        node.isEnd=true;
    }
    search(word){
        let node=this.root;
        for(let ch of word){
             if(!node.children[ch]){
                  return false;
             }
            node=node.children[ch];
        }
        return node.isEnd;
    }
    startWith(prefix){
        let node=this.root;
        for(let ch of prefix){
             if(!node.children[ch]){
                 return false;
            }
            node=node.children[ch];
        }
        return true;
    }
    collectAllWords(node,prefix,words){
        if(node.isEnd){
            words.push(prefix)
        }
        for(let ch in node.children){
            this.collectAllWords(node.children[ch],prefix+ch,words);
        }
    }
    autoComplete(prefix){
        let node=this.root;
        let words=[];
        for(let ch of prefix){
            if(!node.children[ch]){
                 return words;
            }
            node=node.children[ch];
        }
        this.collectAllWords(node,prefix,words);
        return words;
    }
}

let trie=new Trie();
trie.insert('card');
trie.insert('cat');
trie.insert('cart');
trie.insert('cap');
trie.insert('apple');
trie.insert('apricot');
trie.insert('app');
trie.insert('append');
console.log("Words ::"+ trie.autoComplete("ca"));
console.log("Words ::"+ trie.autoComplete("app"));