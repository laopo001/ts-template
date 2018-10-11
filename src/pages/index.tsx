import * as React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
export class TestError extends React.Component {
    componentDidCatch(e) {
        alert(e.message);
    }
    componentDidMount() {
        // throw new Error('a');
    }
    render() {
        return <Button>TestError</Button>
    }
}

export function IApp(props) {
    return (
        <div>
            <TestError />
            <h2>{props.count}</h2>
            <button key="add" onClick={() => { props.dispatch({ type: 'count/add' }) }}>+</button>
            <button key="minus" onClick={() => { props.dispatch({ type: 'count/minus' }) }}>-</button>
        </div>
    );
}

export const App = connect(({ count }) => ({
    count
}))(IApp);