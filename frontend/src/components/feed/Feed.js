import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Skeleton, List, Icon } from 'antd';
import 'antd/dist/antd.css';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

IconText.propTypes = {
  type: PropTypes.string,
  text: PropTypes.text
};

class Feed extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.things}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={!this.props.loading && [<IconText key="1" type="star-o" text="156" />, <IconText key="2" type="like-o" text="156" />, <IconText key="3" type="message" text={item.commentsCount} />]}
            >
              <Skeleton loading={this.props.loading} active>
                <List.Item.Meta
                  title={<Link to={`/${item.id}`}>{item.title}</Link>}
                  description={item.headline}
                />
                {/* {item.body} */}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

Feed.propTypes = {
  things: PropTypes.array,
  loading: PropTypes.bool
};

export default Feed;
