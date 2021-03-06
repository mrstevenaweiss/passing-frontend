import React from 'react';
import { selectPost } from '../actions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Post extends React.Component {

  state = {
    imageUrl: null
  }

  componentDidMount() {

      return fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => {
        this.setState({
          imageUrl: json.message
        })
      })
    }

  render() {
    // <a href="https://icons8.com">Icon pack by Icons8</a>
    // const image = this.getImage()
    return (
      <li key={this.props.post.id} className="list-group-item my-6" onClick={() => this.props.selectPost(this.props.post)}>
        <Link className="detail-return" to={`/posts/${this.props.post.id}`}>&#x21b3;</Link>
        <div className="post-image">
          <img height="120" width="120" src={this.state.imageUrl}/>
        </div>

        <div
          className="post-item title">
          <strong>{this.props.post.headline}</strong>
        <span className="post-item text">{this.props.post.encounter}</span>
      <div className="post-item name">{this.props.post.first_name}</div>
        </div>
        <div className="post-item retweet"><span className="post-item comments-count">&#128488;{this.props.post.comments.length}</span><br/><img className='image-retweet' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASxSURBVGhD7ZlpqFVVFMdfFmnRJDZSoVSI2TxQhpVWNOgHBdMii6CIiGgeSfoQJWoR4hBZ1IcoKvxgZmqFFVQ0BwXNI81R0Yg2qtXvd7jrcd677953z93nvns/3D/84O59z9ln73P2WnvttXu66qqrrlqtreFkuAzmw81wMRwBW0DHaw+4A36F/2rwBVwJDnYg7Q2L4FnY2Yr+mgGrYK+sVL7Oh/VgZ/+FV2EhXAXXw1J4F2JAH8GhoLaE4+Fe+BvimgOhj7aF78A/34IdoUzdBrbtAB6EfaCWDoEnwOt/hxXwU6Wc52Wo0rmQv+gV2AHK0KVgm3/AmVY0KKfXZog+fQlPVn77QiZBlRy1F8yF5yu/34TdIUUHwKYK06woqBNBJ3AQjIWvIAa1Br4HP0KvNDAvOBi2gxjMJ6AnaVaPge3cnpWa13T4DWyrP5dAr8KAtBU1Ah4C6/6Cy6GoWxwD3v8LjLQiQRshOp73eM+AjqBX/4DzLu/y7PgciEY0rsOgUTl477svK6XJ6XM1TIaYLR/DLtBH34B/7peV+upoeB/8X+O7H5z7g+kB8J6zslK6XBZeB9v8APziVYq5PDMrVWsbuAny64DGdgb430B6Grz22KyUpt0gloeXYBQMqIvAi9ZmpdpyZb4TNoDXi0b4CBhuHA7al3oB/P+orJQmX4Zt+SVqvbhMeiqN0qkTq2k97QTXwNsQAwr8Wp9DGKVfLVUxEO1jUF0HXmyYEN6rEWlX18KjELaWx9AkVaeCbTmda2oYvAgakguXNzwFzYYpzmcdhL7/HIipliJt1349nJVqyFAk3l6edyDV/5clp7F9GnRhddHzwtfAQC0Gcwx0gpaB/TFcqavwzy48LorjoCpEbqOc+vbvpKxUR64RXvh4VuosaWOGUNqv3rWuRoOhiO73SCs6SCeAL/mNrNSANKS4oYj7bbUWg/2al5Ua0HBwD+JNbnnLcJupcmmIPUihmbIvfAre6J663QY/FeyL+/fCckGLJIA2sxLOhroxTosUW1vXkcK6Eby5P/fAUMqdqXGbEbexXWHdAPkB/AkulKfBUGod+PwFWakJGarbeRuZbUUbFLbxMySFSbeADf0Ie1oxhDJYDU91hRUpMkxxj25jZlIMWYZK7vF9rjvBPomFZuXGPjZOfmL3FaU0XEexUzVwLfXlbQ/LwcbFjdMSOA/MaJSZOTcgNKbSUxXJSBbSKfAc+JAYlNRKVhSVCerYPtxqRStlOn81xCCcdmU4gikQ2RnXqpacjxjrmCzOp/ONkvVqtc4visjMS2yvfUbTgzBJPRHM+ZokngD6cM8s3B9/DfEFzEaanBsPqdoVInHudDWaSPoSkbyuh2G9R2PuWVKl19P7/QC2rTf0gClZHiPkE8Riks43ZD6qrNMrB3A65E+k3I2Wutg6VcwUxgM8kDFv685sK0jR/uDXzOe7PoRZ0DLpAk2yaQvxUNOh1nl6pAuu94XMxx4HF4LeJ8KMwCO9CyD15TQsDdHM4XuQ70igcTq3P6vg7/wRWR4HcxfoRNoqDdxV3LySKZlvof+iGHgMZm72bvDcsJGjh7bK9cPQ2vMJjbWsQ9Ouuuos9fT8D5NgeZffuuvQAAAAAElFTkSuQmCC"/> </div>

      </li>
    )}
};

const mapStateToProps = (state, ownProps) => {
  console.log('Post', state);
  const selected = state.selectPost.id === ownProps.post.id
  return {
    selected
  }
}

export default connect(null, { selectPost })(Post)
