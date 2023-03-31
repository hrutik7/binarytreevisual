import React,{useState} from "react";
import BinaryTreeView from "./components/BinaryTreeView";
import { arrayToTree } from "performant-array-to-tree";
// function arrayToTree(data) {
//   const tree = {};
//   const length = data.length;

//   for (let i = 0; i < length; i++) {
//     const { id, value, parentId } = data[i];

//     if (!tree[id]) {
//       tree[id] = { value, children: [] };
//     } else {
//       tree[id].value = value;
//     }

//     const parent = parentId || 'root';

//     if (!tree[parent]) {
//       tree[parent] = { children: [] };
//     }

//     tree[parent].children.push(tree[id]);
//   }

//   return tree.root.children;
// }



const App = () => {
  
  const array = {
    value: 1,
    children: [
      {
        value: 2,
        children: [],
      }],
    children: [
      {
        value: 3,
        children: [
          { value: 5 },
          { value: 5 },
          // { value: 5 },
        
        ],
      },
      {
        value: 4,
        children: [
          { value: 5 },
          
        ],
      },
    ],
    
  };
  const [inputValue, setInputValue] = useState('');
  const [treeData, setTreeData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Parse the input value as JSON
    const inputData = JSON.parse(inputValue);

    // Convert the array to a tree
    const tree = arrayToTree(inputData);

    // Update the state with the tree data
    setTreeData(tree);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input data:
          <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* {treeData && <BinaryTreeView data={treeData} />} */}
      <BinaryTreeView data={array} />
    </div>
  );
};
export default App;
