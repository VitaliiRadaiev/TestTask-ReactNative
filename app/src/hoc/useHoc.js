import React from 'react';

export const useHoc = (WrappedComponent) => {

	return class extends React.Component {
		constructor(props) {
			super(props);
			this.getText = this.getText.bind(this);
		}

		getText() {
			return 'Congratulations comrade!'
		}

		render() {
			return <WrappedComponent getText={this.getText} {...this.props}/>
		}
	}
}