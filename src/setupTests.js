import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//setupJest.js or similar file
global.fetch = require('jest-fetch-mock')