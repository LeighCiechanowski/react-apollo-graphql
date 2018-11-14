import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddThingForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values.comment);
        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, } = this.props.form;

    // Only show error after a field is touched.
    const commentError = isFieldTouched('comment') && getFieldError('comment');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={commentError ? 'error' : ''}
          help={commentError || ''}
        >
          {getFieldDecorator('comment', {
            rules: [{ required: true, message: 'Please input your comment' }],
          })(
            <Input prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Comment" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Post comment
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(AddThingForm);
export default WrappedHorizontalLoginForm;