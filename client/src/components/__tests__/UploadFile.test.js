import UploadFile from "../UploadFile";
import Enzyme ,{ shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter : new Adapter})
describe('uploadfile', () => {
    const component = shallow(<UploadFile />);
    it('should render a label and a file input field', () => {
      expect(component.find('input[type="file"]')).toBeTruthy();
      expect(component.find('label')).toBeTruthy();
    });

   });