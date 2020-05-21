import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const likePost = () => {
    console.log('liked post');
  };
  const commentOnPost = () => {
    console.log('commenting on a post :)');
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={likePost}
          icon='heart'
          basic
          label={{ as: 'a', basic: true, content: `${likeCount}` }}
          labelPosition='right'
          color='orange'
        />
        <Button
          onClick={commentOnPost}
          icon='comment'
          basic
          label={{ as: 'a', basic: true, content: `${commentCount}` }}
          labelPosition='right'
          color='teal'
        />
      </Card.Content>
    </Card>
  );
};

export default PostCard;
