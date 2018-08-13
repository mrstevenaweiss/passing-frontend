// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { addReminder, replyReminder } from '../actions'
// // import { bindActionCreators } from 'redux'
//
// class PostNew extends Component {
//
//   state = {
//     // username: "",
//     title: "",
//     // email: "",
//     // where: "",
//     text: ""
//   }
//
//   addReminder() {
//     this.props.addReminder(this.state.title, this.state.text)
//   }
//
//   replyReminder(id) {
//     console.log('this.props', this.props)
//     console.log('id', id)
//   }
//
//   renderReminders() {
//     const { reminders } = this.props
//     return (
//       <ul className="list-group my-6">
//         {
//           reminders.map(reminder => {
//             return (
//               <li key={reminder.id} className="list-group-item">
//                 <div
//                   className="post-item title">
//                   <div><strong>{reminder.title}</strong></div>
//                 <div><span className="post-item text">{reminder.text}</span></div>
//               </div>
//                 <div
//                   className="post-item reply-button"
//                   onClick={() => this.replyReminder(reminder.id)}>
//                   &#x21b3;
//                 </div>
//               </li>
//             )
//           })
//         }
//       </ul>
//     )
//   }
//
//   render() {
//   // const {handleSubmit, submitting, newPost} = this.props;
//   return (
//     <div className='container'>
//       <br/>
//       <form>
//         <div className="col-12 col-lg-6 offset-lg-3">
//           {/* <input className="form-control my-3" placeholder="Username" onChange={(e)=>this.handleChange(e)} />
//           <input className="form-control my-3" placeholder="Email" onChange={(e)=>this.handleChange(e)}/>
//           <input className="form-control my-3" placeholder="Where" onChange={(e)=>this.handleChange(e)}/> */}
//           <input className="form-control my-3" placeholder="Title" onChange={ event => this.setState({ title: event.target.value }) }/>
//           <textarea className="form-control my-6" placeholder="The Story" onChange={ event => this.setState({ text: event.target.value }) }>
//             </textarea>
//           <span className="input-group-btn">
//           <button
//             type="button"
//             className="btn btn-primary float-right"
//             onClick={()=> this.addReminder()}
//             >
//               Submit
//             </button>
//             </span>
//             <br/>
//             { this.renderReminders() }
//         </div>
//       </form>
//     </div>
//     )
//   }
// }
//
//   function mapStateToProps(state) {
//     return {
//       reminders: state
//     }
//   }
//
// export default connect(mapStateToProps, { addReminder })(PostNew)
