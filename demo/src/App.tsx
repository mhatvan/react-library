import * as React from 'react';

// TODO: make this import work by using rollup and not webpack in /library

// import { ISelectContext } from 'mh-react-library';
// import { data } from 'mh-react-library/lib/src/Data';

// TODO: make it work with these imports
// TODO: the packages are built by the library
// TODO: however, since the Context isn't shared across both bundles, it crashes

// import { List, Item } from 'mh-react-library/lib/data';
// import { SelectButton } from 'mh-react-library/lib/select';

// TODO: finally make it work without the extra /lib path

// import { List, Item } from 'mh-react-library/data';
// import { SelectButton } from 'mh-react-library/select';

// console.log(54, data);

// const list = [
//   {
//     id: '1',
//     name: 'foo',
//     isSelect: false,
//   },
//   {
//     id: '2',
//     name: 'bar',
//     isSelect: true,
//   },
// ];

const App = () => (
  <>
    <div>Hello</div>
  </>
);

// const App = () => (
//   <List>
//     {list.map((item) => (
//       <Item
//         key={item.id}
//         id={item.id}
//         offset={24}
//         theme={`
//           &.selected {
//             background-color: green;
//           }
//         `}
//       >
//         {item.name} <SelectButton id={item.id}>Select</SelectButton>
//       </Item>
//     ))}
//   </List>
// );

export default App;
