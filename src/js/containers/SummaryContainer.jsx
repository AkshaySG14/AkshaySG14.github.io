import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

class SummaryContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.header1}</h1>
                {this.props.paragraph1.map((paragraph, i) => {
                    return (
                        <p key={i}>{paragraph}</p>
                    );
                })}
                {this.paragraph1}
                <br/>
                <h3>{this.props.header2}</h3>
                {this.props.paragraph2.map((paragraph, i) => {
                    return (
                        <p key={i}>{paragraph}</p>
                    );
                })}
            </div>
        )
    }
}

SummaryContainer.propTypes = {
    header1: PropTypes.string.isRequired,
    header2: PropTypes.string.isRequired,
    paragraph1: PropTypes.array.isRequired,
    paragraph2: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        header1: state.summaryHeader,
        header2: state.secondaryHeader,
        paragraph1: state.summaryParagraph,
        paragraph2: state.secondaryParagraph
    };
};

export default connect(mapStateToProps, null)(SummaryContainer);