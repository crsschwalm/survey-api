import { Component } from "react";

class AsyncList extends Component {
    state = {
        list: [],
        isLoading: false,
    };

    callApi = async () => {
        const response = await fetch(this.props.url);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        this.callApi()
            .then(res => this.setState({ list: res, isLoading: false }))
            .catch(err => console.log(err));
    }

    render() {
        return this.props.render(this.state);
    }
}

export default AsyncList;