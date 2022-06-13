import renderer from 'react-test-renderer';
import HomePage from '../HomePage/index';

it('render page elements', ()=>{
    const component = renderer.create(
        <HomePage></HomePage>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
