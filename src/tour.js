import { push } from 'connected-react-router';

export const tourConfig = (props) => {
  return [
    {
      content: `Ok, let's start with the demonstration of the pages, click → to start or cloes`,
    },
    {
      content: `Here is the list of users, you can view the data, edit it or delete entry`,
      action: () => props.dispatch(push('/admin/users'))
    },
    {
      content: `Here is sample data.`,
      action: () => {
        if (props.rows) {
          props.dispatch(push(`/admin/users/${props.rows[0].id}`))
        }
      }
    },
    {
      content: "Here you can see edit options available",
      action: () => {
        if (props.rows) {
          props.dispatch(push(`/admin/users/${props.rows[0].id}/edit`))
        }
      }
    },
    {
      content: "This is my profile page where you can see your own information",
      action: () => props.dispatch(push('/app/profile'))
    },
    {
      content: "And you can change the password, please, remember it. If you loose it you can you pre-build password reset functionality that we have added to this application",
      action: () => props.dispatch(push('/app/password'))
    },
    {
      content:
        "Thank you very much for taking this tour!"
    },
  ];
}