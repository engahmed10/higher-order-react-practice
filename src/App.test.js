import { render } from '@testing-library/react';
import App from './App';
import {shallow}  from 'enzyme';
import Movies  from "./components/movies"
it('chceks App by using enzyme lib and shallow render type',()=>{
 

 const wrapped = shallow(<App/>)


 expect(wrapped.find(Movies).length).toEqual(1)


})