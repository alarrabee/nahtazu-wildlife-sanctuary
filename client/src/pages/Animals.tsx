import {Link} from "react-router-dom"

import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

const Animals: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt= "picture of animal" src="" />}
  >
    <Meta title="" description="Click Here to learn More!" />
    <Link to ="/Animals/SingleAnimal:id"
  </Card>
);

export default Animals;