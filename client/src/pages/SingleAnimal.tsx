// import React, { useState } from 'react';

// import { useParams, Link } from 'react-router-dom';

// import { animalChannelMap } from '..animalChannelMap';

// // place holder for actual data linking
// import {animals} from './data'

// import type {FormProps} from 'antd';

// import { Button, Col, Divider, Row, Form, Input } from 'antd';

// const animal = data?.animals 


// type FieldTypes = {
//   postText?: String;
// };

//  const onFinish: FormProps<FieldTypes>['onFinish']=(values)=>{
//   console.log('This was inputed'),values);
//  };



// function SingleAnimal = () => {
//     const [animal, setAnimal] = useState({});

//   const { id } = useParams<{ id: string }>();
//   const fetchData = async () =>{
//     const {data} = await API.getSingleAnimal(id);
//     setAnimal(data);
//   };

// // Ensure 'id' is defined and use it to get the stream ID
// const animalData = id ? animalChannelMap[id] : undefined;

// // If animalData is undefined, show a message indicating that the animal or live stream is not found
// if (!animalData) {
//   return <div>Live stream not found for {id}.</div>;
// }

// const { streamId } = animalData;

// useEffect(()=>{
//     fetchData();
// }, []);


// return(
// <body>
// // This is the div that will have all the wiki information on the animal
//   <div>
//     <h2>{animal.name}</h2>
//     <h3>{animal.scientficfact}</h3>
//     <p>{animal.dataParagraph}</p>
    
//   </div>












// // This is the overall div for both the stream and the Form
//     <div>
//     //This is the div for the live stream
//         <div>
//             <h1>Live Stream for {id}</h1>
//             <iframe
//                 width="560"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${streamId}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={`Live stream for ${id}`}
//             ></iframe>
//             <p>Enjoy the live stream of {id}!</p>
//         </div>
// // This is the Form for the comments 
//         <Form name = "postComment" onFinish = {onFinish} autoComplete="off" variant="filled" >
//             <Form.Item
//                 name="postText"
//                 label="Leave a Comment"
//                 rules={[{ required: true, message: 'Comment is required to Post' }]}
//             >
//                 <Input.TextArea />
//             </Form.Item>
//             <Button htmlType ="submit">Submit</Button>
//         </Form>
//     </div>
//     </body>
// );};

// export default SingleAnimal;