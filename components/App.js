var App = React.createClass({
  render: function() {
    return (
    /*
      <div className={'app'}>
      	<ContactForm {contact: contactForm}>
      	<Contacts {items: contacts}, {}>*/
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
    	)
    )}
});