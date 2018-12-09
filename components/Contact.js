var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="contactItem, box">
        <img className="contactImage, image" src={'http://www.stickpng.com/assets/images/585e4beacb11b227491c3399.png'} />
        <p className="contactLabel, name">
          Imię: {this.props.contact.firstName}
        </p>
        <p className="contactLabel, name">
          Nazwisko: {this.props.contact.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
        </a>
      </div>
    )
  },
});