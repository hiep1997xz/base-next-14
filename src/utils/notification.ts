/* eslint-disable @typescript-eslint/no-unused-expressions */
import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export const showSuccessNotification = ({
  message,
  className = 'success-noti',
  placement = 'top',
  ...rest
}: ArgsProps) => {
  notification.success({
    message,
    className,
    placement,
    ...rest,
  });
};

export const showErrorNotification = ({
  message,
  className = 'error-noti',
  placement = 'top',
  ...rest
}: ArgsProps) => {
  message &&
    message !== '' &&
    notification.error({
      message,
      className,
      placement,
      ...rest,
    });
};
